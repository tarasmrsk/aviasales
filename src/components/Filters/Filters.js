/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setAllValue, setNoneValue, setOneValue, setTwoValue, setThreeValue } from '../../redux/filtersReducer'

import classes from './Filters.module.scss'

function Filters() {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filter)

  const handleFilterChange = (filter) => {
    let updatedFilters
    if (filter === 'all') {
      const allChecked = !filters.all
      updatedFilters = {
        ...filters,
        all: allChecked,
        noneStop: allChecked,
        oneStop: allChecked,
        twoStops: allChecked,
        threeStops: allChecked,
      }
    } else {
      updatedFilters = { ...filters, [filter]: !filters[filter] }
      if (updatedFilters.noneStop && updatedFilters.oneStop && updatedFilters.twoStops && updatedFilters.threeStops) {
        updatedFilters.all = true
      } else {
        updatedFilters.all = false
      }
    }
    dispatch(setAllValue(updatedFilters))
    dispatch(setNoneValue(updatedFilters))
    dispatch(setOneValue(updatedFilters))
    dispatch(setTwoValue(updatedFilters))
    dispatch(setThreeValue(updatedFilters))
  }

  return (
    <ul className={classes.transfer}>
      <h3 className={classes.transfer_number}>Количество пересадок</h3>
      <li className={classes.transfer_item}>
        <label>
          <input
            id="all"
            className={classes.checkbox}
            type="checkbox"
            checked={filters.all}
            onChange={() => handleFilterChange('all')}
          />
          Все
        </label>
      </li>
      <li className={classes.transfer_item}>
        <label>
          <input
            className={classes.checkbox}
            type="checkbox"
            checked={filters.noneStop}
            onChange={() => handleFilterChange('noneStop')}
          />
          Без пересадок
        </label>
      </li>
      <li className={classes.transfer_item}>
        <label>
          <input
            className={classes.checkbox}
            type="checkbox"
            checked={filters.oneStop}
            onChange={() => handleFilterChange('oneStop')}
          />
          1 пересадка
        </label>
      </li>
      <li className={classes.transfer_item}>
        <label>
          <input
            className={classes.checkbox}
            type="checkbox"
            checked={filters.twoStops}
            onChange={() => handleFilterChange('twoStops')}
          />
          2 пересадки
        </label>
      </li>
      <li className={classes.transfer_item}>
        <label>
          <input
            className={classes.checkbox}
            type="checkbox"
            checked={filters.threeStops}
            onChange={() => handleFilterChange('threeStops')}
          />
          3 пересадки
        </label>
      </li>
    </ul>
  )
}

export default Filters
