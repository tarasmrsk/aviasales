import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSearchId, fetchTickets, setSortTickets} from '../../redux/ticketsReducer'

import classes from './Ticket.module.scss'

function Ticket() {
  const dispatch = useDispatch()
  const searchId = useSelector(state => state.id.searchId)
  const tickets = useSelector(state => state.id.tickets)
  const sortTickets = useSelector(state => state.id.sortTickets)
  const sortButton = useSelector(state => state.sort.sortButton)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (tickets.length > 0) {
      const sortedTickets = tickets.slice().sort((a, b) => {
        if (sortButton === 'CHEAPEST') {
          return a.price - b.price
        } if (sortButton === 'FASTEST') {
          const totalDurationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
          const totalDurationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
          return totalDurationA - totalDurationB
        } if (sortButton === 'OPTIMAL') {
          const hasNoStopsA = a.segments.every(segment => segment.stops.length === 0)
          const hasNoStopsB = b.segments.every(segment => segment.stops.length === 0)

          if (hasNoStopsA && !hasNoStopsB) {
            return -1
          } if (!hasNoStopsA && hasNoStopsB) {
            return 1
          } 
          return a.price - b.price  
        } 
        return 0
      })
  
      dispatch(setSortTickets(sortedTickets.slice(0, 5)))
    }
  }, [tickets, sortButton])

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [dispatch])

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId))
        // eslint-disable-next-line no-shadow
        .catch((error) => {
          setError(error.message)
        })
    }
  }, [dispatch, searchId])

  const formatTime = (dateString) => {
    const date = new Date(dateString)
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60
    return `${hours}ч ${minutes}м`
  }

  return (
    <div>
      {error ? (
        <p>Произошла ошибка: {error}</p>
      ) : (
        Array.isArray(tickets) && tickets.length > 0 ? (
          sortTickets.map(ticket => (
            <section key={ticket.id} className={classes.ticket}>
              <div className={classes.ticket_item}>
                <div className={classes.ticket_header}>
                  <div className={classes.ticket_price}>
                    {ticket.price} Р
                  </div>
                  <div className={classes.ticket_logo}>
                    <img src={`https://pics.avs.io/137/50/${ticket.carrier}.png`}  alt={ticket.carrier} />
                  </div>
                </div>
              </div>
              <div className={classes.card}>
                {ticket.segments.map((segment, idx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={idx} className={classes.card_info}>
                    <div className={classes.card_flight}>
                      <span className={classes.flight}>{segment.origin} - {segment.destination} </span>
                      <span className={classes.flight_time}>
                        {formatTime(segment.date)} – {formatTime(new Date(new Date(segment.date).getTime() + segment.duration * 60000))}
                      </span>
                    </div>
                    <div className={classes.card_status}>
                      <span className={classes.status}>В пути</span>
                      <span className={classes.status_time}>{formatDuration(segment.duration)}</span>
                    </div>
                    <div className={classes.card_change}>
                      <span className={classes.change}>{segment.stops.length === 0 ? 'Прямой рейс' : segment.stops.length === 1 ? '1 пересадка' : `${segment.stops.length} пересадки`}</span>
                      <span className={classes.change_place}>{segment.stops.join(', ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p>Загрузка билетов...</p>
        )
      )}
    </div>
  )
}

export default Ticket