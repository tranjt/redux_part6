import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleAddAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    const newAnec = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnec))
    dispatch(setNotification(`You created new anecdote: ${content}`))
    setTimeout( () => {
      dispatch(setNotification(''))
    }, 5000)
  }

  return (
    <form onSubmit={handleAddAnecdote}>
      <div><input name="newAnecdote" /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm