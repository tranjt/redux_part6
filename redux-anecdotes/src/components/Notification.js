import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const styleForNotification = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const style = notification !== '' ? styleForNotification : {}

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification