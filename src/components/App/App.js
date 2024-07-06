import React from 'react'

import Filters from '../Filters'
import Sort from '../Sort'
import Ticket from '../Ticket'

import classes from './App.module.scss'
import logo from './logo.svg'

function App() {

  return (
    <div className={classes.window}>
      <div className={classes.container}>
        <div className={classes.header}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.main}>
          <Filters />
          <div>
            <Sort />
            <Ticket />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App