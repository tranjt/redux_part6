import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleAddAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(createAnecdote(content))
  }

  return (
    <form onSubmit={handleAddAnecdote}>
      <div><input name="newAnecdote" /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm