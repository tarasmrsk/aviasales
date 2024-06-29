import React from 'react'

import Filters from '../Filters'
import Navigation from '../Navigation'
import TicketList from '../TicketList'

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
            <Navigation />
            <TicketList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App