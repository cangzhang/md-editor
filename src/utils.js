export const isPromise = func => Boolean(func && typeof func.then === 'function')
