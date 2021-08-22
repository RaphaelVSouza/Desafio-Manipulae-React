export function pausePlayers(isRunning: boolean) {
  return {
    type: 'PAUSE_PLAYERS',
    isRunning: !isRunning,
  }
}
