import React from 'react'

import Route from './Route'
import classes from './Ticket.module.scss'

function Ticket() {

  return (

    <section className={classes.ticket}>
      <div className={classes.ticket_header}>
        <div className={classes.ticket_price}>
          13800 Р
        </div>
        <div className={classes.ticket_logo}>
          Изображение
        </div>
      </div>
      <Route />
      <Route />
    </section>

  )
}

export default Ticket