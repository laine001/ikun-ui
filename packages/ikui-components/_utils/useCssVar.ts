/**
 * get or set css var
 */
export const useCssVar = (varProp: string, value?: string) => {
  if (value) {
    document.documentElement.style.setProperty(varProp, value)
  } else {
    const cssVar = window.getComputedStyle(document.documentElement).getPropertyValue(varProp)
    return cssVar
  }
}

/**
 * calc color by origin color and olum
 * @param hex color
 * @param lum opacity
 * @returns string
 */
export const calcColor = (hex, lum = 0) => {
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }
  let rgb = '#'
  let c, i

  for (let i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += ('00' + c).substr(c.length)
  }
  return rgb
}
