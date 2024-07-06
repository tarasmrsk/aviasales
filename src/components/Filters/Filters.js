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
        <input
          className={classes.checkbox}
          type="checkbox"
          checked={filters.all}
          onChange={() => handleFilterChange('all')}
        />
        <span>Все</span>
      </li>
      <li className={classes.transfer_item}>
        <input
          className={classes.checkbox}
          type="checkbox"
          checked={filters.noneStop}
          onChange={() => handleFilterChange('noneStop')}
        />
        <span>Без пересадок</span>
      </li>
      <li className={classes.transfer_item}>
        <input
          className={classes.checkbox}
          type="checkbox"
          checked={filters.oneStop}
          onChange={() => handleFilterChange('oneStop')}
        />
        <span>1 пересадка</span>
      </li>
      <li className={classes.transfer_item}>
        <input
          className={classes.checkbox}
          type="checkbox"
          checked={filters.twoStops}
          onChange={() => handleFilterChange('twoStops')}
        />
        <span>2 пересадки</span>
      </li>
      <li className={classes.transfer_item}>
        <input
          className={classes.checkbox}
          type="checkbox"
          checked={filters.threeStops}
          onChange={() => handleFilterChange('threeStops')}
        />
        <span>3 пересадки</span>
      </li>
    </ul>
  )
}

export default Filters
