export const isNotNull = <T>(value: T): value is Exclude<T, null> => {
  return value !== null
}

export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> => {
  return typeof value !== 'undefined'
}

export const isNotNullUndefined = <T>(
  value: T
): value is Exclude<T, null | undefined> => {
  return isNotNull(isNotUndefined(value))
}
