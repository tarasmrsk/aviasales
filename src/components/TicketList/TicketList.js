import React from 'react'

import Ticket from '../Ticket'

import classes from './TicketList.module.scss'

function TicketList() {

  return (
    <section>
      <div>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <footer className={classes.show_more}>
        <button type="button" className={classes.show_button}>
          Показать еще 5 билетов
        </button>
      </footer>
    </section>
  )
}

export default TicketList
