import React, { useState } from 'react'

import classes from './Navigation.module.scss'

function Navigation() {
  const [selectedType, setSelectedType] = useState('cheapest')

  const handleButtonClick = (type) => {
    setSelectedType(type)
  }

  return (
    <ul className={classes.nav}>
      <li className={classes.nav_item}>
        <button
          type="button"
          className={`${classes.nav_button} ${selectedType === 'cheapest' ? classes.active : ''}`}
          onClick={() => handleButtonClick('cheapest')}
        >
          Самый дешевый
        </button>
      </li>
      <li className={classes.nav_item}>
        <button
          type="button"
          className={`${classes.nav_button} ${classes.fastest} ${selectedType === 'fastest' ? classes.active : ''}`}
          onClick={() => handleButtonClick('fastest')}
        >
          Самый быстрый
        </button>
      </li>
      <li className={classes.nav_item}>
        <button
          type="button"
          className={`${classes.nav_button} ${selectedType === 'optimal' ? classes.active : ''}`}
          onClick={() => handleButtonClick('optimal')}
        >
          Оптимальный
        </button>
      </li>
    </ul>
  )
}

export default Navigation