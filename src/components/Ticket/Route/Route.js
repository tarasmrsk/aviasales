import React from 'react'

import classes from './Route.module.scss'

function Route() {

  return (

    <section className={classes.card}>
      <div className={classes.card_info}>
        <div className={classes.card_flight}>
          <span className={classes.flight}>
            MOW – HKT
          </span>
          <span className={classes.flight_time}>
            10:45 – 08:00
          </span>
        </div>
        <div className={classes.card_status}>
          <span className={classes.status}>
            В пути
          </span>
          <span className={classes.status_time}>
          21ч 15м
          </span>
        </div>
        <div className={classes.card_change}>
          <span className={classes.change}>
            2 пересадки
          </span>
          <span className={classes.change_place}>
            HKG, JNB
          </span>
        </div>
      </div>
    </section>

  )
}

export default Route