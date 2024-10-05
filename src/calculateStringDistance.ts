const da = new Uint32Array(0x10000)

const getIndex = (rowWidth: number, x: number, y: number): number => {
  return (y + 1) * rowWidth + (x + 1)
}

const initializeDPMatrix = (a: string, b: string): [number, Uint32Array] => {
  const maxDistance = a.length + b.length
  const ROW_WIDTH = a.length + 2
  const COL_WIDTH = b.length + 2

  const d = new Uint32Array(ROW_WIDTH * COL_WIDTH)

  d[getIndex(ROW_WIDTH, -1, -1)] = maxDistance

  for (let i = 0; i <= a.length; i++) {
    d[getIndex(ROW_WIDTH, i, -1)] = maxDistance
    d[getIndex(ROW_WIDTH, i, 0)] = i
  }

  for (let i = 0; i <= b.length; i++) {
    d[getIndex(ROW_WIDTH, -1, i)] = maxDistance
    d[getIndex(ROW_WIDTH, 0, i)] = i
  }

  return [ROW_WIDTH, d]
}

export const calculateStringDistance = (
  a: string,
  b: string,
  maxLenght: number = Math.max(a.length, b.length)
): number => {
  if (a.length + b.length === 0 || maxLenght === 0) {
    return 0
  }

  a = a.length > maxLenght ? a.substring(0, maxLenght) : a
  b = b.length > maxLenght ? b.substring(0, maxLenght) : b

  const [ROW_WIDTH, d] = initializeDPMatrix(a, b)
  da.fill(0)

  for (let i = 1; i <= a.length; i++) {
    let db = 0
    for (let j = 1; j <= b.length; j++) {
      const k = da[b.charCodeAt(j - 1)]
      const l = db
      let cost = 1

      if (a.charCodeAt(i - 1) === b.charCodeAt(j - 1)) {
        cost = 0
        db = j
      }

      d[getIndex(ROW_WIDTH, i, j)] = Math.min(
        d[getIndex(ROW_WIDTH, i - 1, j - 1)] + cost,
        d[getIndex(ROW_WIDTH, i, j - 1)] + 1,
        d[getIndex(ROW_WIDTH, i - 1, j)] + 1,
        d[getIndex(ROW_WIDTH, k - 1, l - 1)] + (i - k - 1) + (j - l - 1) + 1
      )

      da[a.charCodeAt(i - 1)] = i
    }
  }

  return d[getIndex(ROW_WIDTH, a.length, b.length)]
}
