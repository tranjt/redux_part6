import React from 'react'
import { setFilter } from '../reducers/filterReducer'
import { useSelector, useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={filter} onChange={handleChange} />
    </div>
  )
}

export default Filter