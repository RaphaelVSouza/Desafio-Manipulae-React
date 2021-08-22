export function pauseReducer(state = false, action: any) {
  switch (action.type) {
    case 'PAUSE_PLAYERS':
      return action.isRunning

    default:
      return state
  }
}
