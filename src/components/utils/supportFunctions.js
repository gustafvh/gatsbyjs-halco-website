export const hexToRGBA = (hex, opacity) => {
  const tempHex = hex.replace("#", "")
  const red = parseInt(tempHex.substring(0, 2), 16)
  const green = parseInt(tempHex.substring(2, 4), 16)
  const blue = parseInt(tempHex.substring(4, 6), 16)

  return `rgba(${red},${green},${blue},${opacity / 100})`
}
