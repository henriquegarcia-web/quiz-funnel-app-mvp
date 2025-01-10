const formatPhone = (value: string): string => {
  if (!value) return value
  const phoneNumber = value.replace(/\D/g, '').slice(0, 11)
  const phoneNumberLength = phoneNumber.length

  if (phoneNumberLength < 11) {
    return phoneNumber.replace(/^(\d{2})(\d)/g, '($1) $2')
  } else {
    return phoneNumber.replace(
      /^(\d{2})(\d{1})(\d{4})(\d{4})/g,
      '($1) $2 $3-$4'
    )
  }
}

const formatCPF = (value: string): string => {
  if (!value) return value
  const cpfNumber = value.replace(/\D/g, '').slice(0, 11)
  return cpfNumber.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

export { formatPhone, formatCPF }
