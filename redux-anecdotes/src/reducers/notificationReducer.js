const notificationReducer = (state = 'default notification', action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export const setNotification = notification => {
  return {
    action: 'NEW_NOTIFICATION',
    notification
  }
}

export default notificationReducer