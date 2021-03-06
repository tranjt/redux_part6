import anecdoteService from '../services/anecdotes'

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
          anecdote.votes = action.data.votes
        }
        return anecdote
      })
    }
    default:
      return state
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    anecdote.votes = anecdote.votes + 1
    const voteChangedAnecdote = await anecdoteService.changeVote(anecdote)
    return dispatch({
      type: 'VOTE',
      data: voteChangedAnecdote
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: anecdote,
    })
  }
}


export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes,
    })
  }
}


export default anecdoteReducer