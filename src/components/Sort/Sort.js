import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCheapestValue, setFastestValue, setOptimalValue } from '../../redux/sortReducer'

import classes from './Sort.module.scss'

function Sort() {

  const dispatch = useDispatch()
  const ticket = useSelector(state => state.sort.ticket)

  return (
    <ul className={classes.sort}>
      <li className={classes.sort_item}>
        <button
          type="button"
          className={`${classes.sort_button} ${ticket === 'CHEAPEST' ? classes.active : ''}`}
          onClick={() => dispatch(setCheapestValue())}
        >
          Самый дешевый
        </button>
      </li>
      <li className={classes.sort_item}>
        <button
          type="button"
          className={`${classes.sort_button} ${classes.fastest} ${ticket === 'FASTED' ? classes.active : ''}`}
          onClick={() => dispatch(setFastestValue())}
        >
          Самый быстрый
        </button>
      </li>
      <li className={classes.sort_item}>
        <button
          type="button"
          className={`${classes.sort_button} ${ticket === 'OPTIMAL' ? classes.active : ''}`}
          onClick={() => dispatch(setOptimalValue())}
        >
          Оптимальный
        </button>
      </li>
    </ul>
  )
}

export default Sort