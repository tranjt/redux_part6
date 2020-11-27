import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const handleVote = (anecdote) => {
    props.vote(anecdote)
    props.setNotification(`You voted: ${anecdote.content}`, 5)
  }

  return (
    <div>
      {props.anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  if (state.filter === '') {
    return {
      anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes)
    }
  }
  const filteredAnecdotes = state.anecdotes.filter(anec => anec.content.includes(state.filter))
  return {
    anecdotes: filteredAnecdotes.sort((a, b) => b.votes - a.votes)
  }
}


export default connect(
  mapStateToProps,
  {
    vote,
    setNotification
  }
)(AnecdoteList)
