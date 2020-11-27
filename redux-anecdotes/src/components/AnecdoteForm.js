import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const handleAddAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    props.createAnecdote(content)
    props.setNotification(`You created new anecdote: ${content}`, 5)
  }

  return (
    <form onSubmit={handleAddAnecdote}>
      <div><input name="newAnecdote" /></div>
      <button>create</button>
    </form>
  )
}


export default connect(
  null,
  {
    createAnecdote,
    setNotification
  }
)(AnecdoteForm)