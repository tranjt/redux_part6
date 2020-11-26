import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleAddAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(setNotification(`You created new anecdote: ${content}`, 5))
  }

  return (
    <form onSubmit={handleAddAnecdote}>
      <div><input name="newAnecdote" /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm