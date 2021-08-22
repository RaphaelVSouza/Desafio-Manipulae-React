export type action = {
  type: string
  [key: string]: unknown
}

export type dispatchFn = (action: action) => action