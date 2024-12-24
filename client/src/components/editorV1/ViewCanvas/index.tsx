import * as S from './styles'
import {
  useEffect,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react'

type IViewCanvas = {
  canvasWidth: number
  canvasHeight: number
}

type Point = {
  x: number
  y: number
}

const ORIGIN = Object.freeze({ x: 0, y: 0 })

const ZOOM_SENSITIVITY = 2000
const INITIAL_ZOOM_FACTOR = 0.6
const SQUARE_SIZE = 10000

const { devicePixelRatio: ratio = 1 } = window

function diffPoints(p1: Point, p2: Point) {
  return { x: p1.x - p2.x, y: p1.y - p2.y }
}

function addPoints(p1: Point, p2: Point) {
  return { x: p1.x + p2.x, y: p1.y + p2.y }
}

const ViewCanvas = (props: IViewCanvas) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [scale, setScale] = useState<number>(1)
  const [viewportTopLeft, setViewportTopLeft] = useState<Point>(ORIGIN)
  const isResetRef = useRef<boolean>(false)
  const [mousePos, setMousePos] = useState<Point>(ORIGIN)

  const reset = useCallback(
    (context: CanvasRenderingContext2D) => {
      if (context && !isResetRef.current) {
        context.canvas.width = props.canvasWidth * ratio
        context.canvas.height = props.canvasHeight * ratio
        context.scale(ratio, ratio)

        const reductionFactor = INITIAL_ZOOM_FACTOR
        const initialScale =
          Math.min(
            props.canvasWidth / SQUARE_SIZE,
            props.canvasHeight / SQUARE_SIZE
          ) * reductionFactor
        setScale(initialScale)

        setContext(context)
        setViewportTopLeft(ORIGIN)

        context.scale(initialScale, initialScale)

        isResetRef.current = true
      }
    },
    [props.canvasWidth, props.canvasHeight]
  )

  useLayoutEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d')
      if (renderCtx) {
        reset(renderCtx)
      }
    }
  }, [reset, props.canvasHeight, props.canvasWidth])

  useLayoutEffect(() => {
    if (context) {
      const storedTransform = context.getTransform()
      context.canvas.width = context.canvas.width
      context.setTransform(storedTransform)

      const centerX = props.canvasWidth / 2 / scale
      const centerY = props.canvasHeight / 2 / scale

      const x = centerX - SQUARE_SIZE / 2
      const y = centerY - SQUARE_SIZE / 2
      const width = SQUARE_SIZE
      const height = SQUARE_SIZE
      const radius = 100

      context.beginPath()
      context.moveTo(x + radius, y)
      context.lineTo(x + width - radius, y)
      context.arcTo(x + width, y, x + width, y + radius, radius)
      context.lineTo(x + width, y + height - radius)
      context.arcTo(
        x + width,
        y + height,
        x + width - radius,
        y + height,
        radius
      )
      context.lineTo(x + radius, y + height)
      context.arcTo(x, y + height, x, y + height - radius, radius)
      context.lineTo(x, y + radius)
      context.arcTo(x, y, x + radius, y, radius)
      context.closePath()

      context.fillStyle = 'white'
      context.fill()

      context.arc(viewportTopLeft.x, viewportTopLeft.y, 200, 0, 2 * Math.PI)
    }
  }, [props.canvasWidth, props.canvasHeight, context, scale, viewportTopLeft])

  useEffect(() => {
    const canvasElem = canvasRef.current
    if (canvasElem === null) {
      return
    }

    function handleUpdateMouse(event: MouseEvent) {
      event.preventDefault()
      if (canvasRef.current) {
        const viewportMousePos = { x: event.clientX, y: event.clientY }
        const topLeftCanvasPos = {
          x: canvasRef.current.offsetLeft,
          y: canvasRef.current.offsetTop
        }
        setMousePos(diffPoints(viewportMousePos, topLeftCanvasPos))
      }
    }

    canvasElem.addEventListener('mousemove', handleUpdateMouse)
    canvasElem.addEventListener('wheel', handleUpdateMouse)
    return () => {
      canvasElem.removeEventListener('mousemove', handleUpdateMouse)
      canvasElem.removeEventListener('wheel', handleUpdateMouse)
    }
  }, [])

  useEffect(() => {
    const canvasElem = canvasRef.current
    if (canvasElem === null) {
      return
    }

    function handleWheel(event: WheelEvent) {
      event.preventDefault()
      if (context) {
        const zoom = Math.exp(-event.deltaY / ZOOM_SENSITIVITY)
        const viewportTopLeftDelta = {
          x: (mousePos.x / scale) * (1 - 1 / zoom),
          y: (mousePos.y / scale) * (1 - 1 / zoom)
        }
        const newViewportTopLeft = addPoints(
          viewportTopLeft,
          viewportTopLeftDelta
        )

        context.translate(viewportTopLeft.x, viewportTopLeft.y)
        context.scale(zoom, zoom)
        context.translate(-newViewportTopLeft.x, -newViewportTopLeft.y)

        setViewportTopLeft(newViewportTopLeft)
        setScale(scale * zoom)
        isResetRef.current = false
      }
    }

    canvasElem.addEventListener('wheel', handleWheel)
    return () => canvasElem.removeEventListener('wheel', handleWheel)
  }, [context, mousePos.x, mousePos.y, viewportTopLeft, scale])

  return <S.ViewCanvas ref={canvasRef}></S.ViewCanvas>
}

export default ViewCanvas
