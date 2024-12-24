import * as S from './styles'

import {
  useEffect,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react'

type ICanvasV1 = {
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

// adjust to device to avoid blur
const { devicePixelRatio: ratio = 1 } = window

function diffPoints(p1: Point, p2: Point) {
  return { x: p1.x - p2.x, y: p1.y - p2.y }
}

function addPoints(p1: Point, p2: Point) {
  return { x: p1.x + p2.x, y: p1.y + p2.y }
}

function scalePoint(p1: Point, scale: number) {
  return { x: p1.x / scale, y: p1.y / scale }
}

const CanvasV1 = (props: ICanvasV1) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [scale, setScale] = useState<number>(1)
  const [offset, setOffset] = useState<Point>(ORIGIN)
  const [mousePos, setMousePos] = useState<Point>(ORIGIN)
  const [viewportTopLeft, setViewportTopLeft] = useState<Point>(ORIGIN)
  const isResetRef = useRef<boolean>(false)
  const lastMousePosRef = useRef<Point>(ORIGIN)
  const lastOffsetRef = useRef<Point>(ORIGIN)

  // update last offset
  useEffect(() => {
    lastOffsetRef.current = offset
  }, [offset])

  // reset
  const reset = useCallback(
    (context: CanvasRenderingContext2D) => {
      if (context && !isResetRef.current) {
        // adjust for device pixel density
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

        // reset state and refs
        setContext(context)
        setOffset(ORIGIN)
        setMousePos(ORIGIN)
        setViewportTopLeft(ORIGIN)
        lastOffsetRef.current = ORIGIN
        lastMousePosRef.current = ORIGIN

        // Apply initial scale
        context.scale(initialScale, initialScale)

        // this thing is so multiple resets in a row don't clear canvas
        isResetRef.current = true
      }
    },
    [props.canvasWidth, props.canvasHeight]
  )

  // functions for panning
  const mouseMove = useCallback(
    (event: MouseEvent) => {
      if (context) {
        const lastMousePos = lastMousePosRef.current
        const currentMousePos = { x: event.pageX, y: event.pageY } // use document so can pan off element
        lastMousePosRef.current = currentMousePos

        const mouseDiff = diffPoints(currentMousePos, lastMousePos)
        setOffset((prevOffset) => addPoints(prevOffset, mouseDiff))
      }
    },
    [context]
  )

  const mouseUp = useCallback(() => {
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
  }, [mouseMove])

  const startPan = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      document.addEventListener('mousemove', mouseMove)
      document.addEventListener('mouseup', mouseUp)
      lastMousePosRef.current = { x: event.pageX, y: event.pageY }
    },
    [mouseMove, mouseUp]
  )

  // setup canvas and set context
  useLayoutEffect(() => {
    if (canvasRef.current) {
      // get new drawing context
      const renderCtx = canvasRef.current.getContext('2d')

      if (renderCtx) {
        reset(renderCtx)
      }
    }
  }, [reset, props.canvasHeight, props.canvasWidth])

  // pan when offset or scale changes
  useLayoutEffect(() => {
    if (context && lastOffsetRef.current) {
      const offsetDiff = scalePoint(
        diffPoints(offset, lastOffsetRef.current),
        scale
      )
      context.translate(offsetDiff.x, offsetDiff.y)
      setViewportTopLeft((prevVal) => diffPoints(prevVal, offsetDiff))
      isResetRef.current = false
    }
  }, [context, offset, scale])

  // draw
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
      // clear canvas but maintain transform
      // const storedTransform = context.getTransform()
      // context.canvas.width = context.canvas.width
      // context.setTransform(storedTransform)

      // // Ajuste para centralizar o quadrado
      // const centerX = props.canvasWidth / 2 / scale
      // const centerY = props.canvasHeight / 2 / scale

      // context.fillStyle = 'white'

      // context.fillRect(
      //   centerX - SQUARE_SIZE / 2,
      //   centerY - SQUARE_SIZE / 2,
      //   SQUARE_SIZE,
      //   SQUARE_SIZE
      // )

      context.arc(viewportTopLeft.x, viewportTopLeft.y, 200, 0, 2 * Math.PI)
      // context.fillStyle = 'gray'
      // context.fill()
    }
  }, [
    props.canvasWidth,
    props.canvasHeight,
    context,
    scale,
    offset,
    viewportTopLeft
  ])

  // add event listener on canvas for mouse position
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

  // add event listener on canvas for zoom
  useEffect(() => {
    const canvasElem = canvasRef.current
    if (canvasElem === null) {
      return
    }

    // this is tricky. Update the viewport's "origin" such that
    // the mouse doesn't move during scale - the 'zoom point' of the mouse
    // before and after zoom is relatively the same position on the viewport
    function handleWheel(event: WheelEvent) {
      event.preventDefault()
      if (context) {
        const zoom = Math.exp(-event.deltaY / ZOOM_SENSITIVITY) // Use Math.exp para transição suave
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

  return <S.CanvasV1 onMouseDown={startPan} ref={canvasRef}></S.CanvasV1>
}

export default CanvasV1
