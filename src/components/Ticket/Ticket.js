import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd'

import {
  selectSearchId,
  selectTickets,
  selectLoading,
  selectSortButton,
  selectFilterAll,
  selectFilterNone,
  selectFilterOne,
  selectFilterTwo,
  selectFilterThree,
  selectDisplayedTicketsCount,
} from '../../redux/selectors'
import {
  formatTime,
  formatDuration
} from '../../redux/utils'
import { fetchSearchId, fetchTickets } from '../../redux/ticketsReducer'
import { showMoreTickets } from '../../redux/moreticketReducer'

import classes from './Ticket.module.scss'

function Ticket() {
  const dispatch = useDispatch()
  const searchId = useSelector(selectSearchId)
  const tickets = useSelector(selectTickets)
  const loading = useSelector(selectLoading)
  const sortButton = useSelector(selectSortButton)
  const filterAll = useSelector(selectFilterAll)
  const filterNone = useSelector(selectFilterNone)
  const filterOne = useSelector(selectFilterOne)
  const filterTwo = useSelector(selectFilterTwo)
  const filterThree = useSelector(selectFilterThree)
  const displayedTicketsCount = useSelector(selectDisplayedTicketsCount)
  const [error, setError] = useState(null)

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

  const filteredAndSortedTickets = useMemo(() => {
    if (tickets.length > 0) {
      return tickets.filter(ticket => {
        if (filterAll) return true
        if (filterNone && ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0) return true
        if (filterOne && ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1) return true
        if (filterTwo && ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2) return true
        if (filterThree && ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3) return true
        return false
      }).sort((a, b) => {
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
      }).slice(0, displayedTicketsCount)
    }
    return []
  }, [tickets, sortButton, displayedTicketsCount, filterAll, filterNone, filterOne, filterTwo, filterThree])

  const handleShowMoreTickets = () => {
    dispatch(showMoreTickets())
  }

  return (
    <div>
      {!loading && (
        <div className={classes.spinner}>
          <Spin tip="Loading" size="large" />
        </div>
      )}
      {error && <p>Произошла ошибка: {error}</p>}
      {
        filteredAndSortedTickets.map(ticket => (
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
                    <span className={classes.flight}>{segment.origin} - {segment.destination}</span>
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
      }
      {!filterAll && !filterNone && !filterOne && !filterTwo && !filterThree && (
        <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
      )}
      {(filterAll || filterNone || filterOne || filterTwo || filterThree) && (
        <footer className={classes.show_more}>
          <button type="button" className={classes.show_button} onClick={handleShowMoreTickets}>
            Показать еще 5 билетов
          </button>
        </footer>
      )}
    </div>
  )
}

export default Ticket