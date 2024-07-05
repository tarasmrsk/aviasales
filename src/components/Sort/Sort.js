import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCheapestValue, setFastestValue, setOptimalValue } from '../../redux/sortReducer'

import classes from './Sort.module.scss'

function Sort() {

  const dispatch = useDispatch()
  const sortButton = useSelector(state => state.sort.sortButton)

  return (
    <ul className={classes.sort}>
      <li className={classes.sort_item}>
        <button
          type="button"
          className={`${classes.sort_button} ${sortButton === 'CHEAPEST' ? classes.active : ''}`}
          onClick={() => dispatch(setCheapestValue())}
        >
          Самый дешевый
        </button>
      </li>
      <li className={classes.sort_item}>
        <button
          type="button"
          className={`${classes.sort_button} ${classes.fastest} ${sortButton === 'FASTEST' ? classes.active : ''}`}
          onClick={() => dispatch(setFastestValue())}
        >
          Самый быстрый
        </button>
      </li>
      <li className={classes.sort_item}>
        <button
          type="button"
          className={`${classes.sort_button} ${sortButton === 'OPTIMAL' ? classes.active : ''}`}
          onClick={() => dispatch(setOptimalValue())}
        >
          Оптимальный
        </button>
      </li>
    </ul>
  )
}

export default Sort