import React, { useState } from 'react'

import classes from './Filters.module.scss'

function Filters() {
  const [stops, setStops] = useState({
    all: false,
    withoutStops: false,
    oneStop: false,
    twoStops: false,
    threeStops: false
  })

  const handleCheckboxChange = (stop) => {
    if (stop === 'all') {
      const allValue = !stops.all
      setStops({
        all: allValue,
        withoutStops: allValue,
        oneStop: allValue,
        twoStops: allValue,
        threeStops: allValue
      })
    } else {
      setStops({
        ...stops,
        [stop]: !stops[stop]
      })
    }
  }

  return (
    <ul className={classes.transfer}>
      <h3 className={classes.transfer_number}>Количество пересадок</h3>
      <li className={classes.transfer_item}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id="all"
          checked={stops.all}
          onChange={() => handleCheckboxChange('all')}
        />
        <span>Все</span>
      </li>
      <li className={classes.transfer_item}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id="withoutStops"
          checked={stops.withoutStops}
          onChange={() => handleCheckboxChange('withoutStops')}
        />
        <span>Без пересадок</span>
      </li>
      <li className={classes.transfer_item}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id="oneStop"
          checked={stops.oneStop}
          onChange={() => handleCheckboxChange('oneStop')}
        />
        <span>1 пересадка</span>
      </li>
      <li className={classes.transfer_item}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id="twoStops"
          checked={stops.twoStops}
          onChange={() => handleCheckboxChange('twoStops')}
        />
        <span>2 пересадки</span>
      </li>
      <li className={classes.transfer_item}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id="threeStops"
          checked={stops.threeStops}
          onChange={() => handleCheckboxChange('threeStops')}
        />
        <span>3 пересадки</span>
      </li>
    </ul>
  )
}

export default Filters