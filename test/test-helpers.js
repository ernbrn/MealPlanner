export function resolvedPromise(resolveData) {
  return Promise.resolve(resolveData);
}

export function rejectedPromise(rejectData) {
  return Promise.reject(rejectData);
}
