const getId = () => (1000000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTE':
      return action.data
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'VOTE': {
      const id = action.data.id
      return state.map(anecdote => {
        if (anecdote.id === id) {
          anecdote.votes = anecdote.votes + 1
        }
        return anecdote
      })
    }
    default:
      return state
  }
}

export const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: asObject(content)
  }
}


export const initializeAnecdote = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTE',
    data: anecdotes,
  }
}


export default anecdoteReducer