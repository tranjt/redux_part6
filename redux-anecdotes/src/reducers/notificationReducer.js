const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

let timeoutID

export const setNotification = (notification, seconds) => {
  return dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      notification
    })
    clearTimeout(timeoutID)
    timeoutID =setTimeout(() => {
      dispatch(clearNotification())
    }, seconds * 1000)
  }
}

const clearNotification = () => {
  return {
    type: 'NEW_NOTIFICATION',
    notification: ''
  }
}



export default notificationReducer