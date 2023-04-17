import React, { useState } from 'react'
import './calendar.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { Box, colors, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'


const Calendar = ({ title }) => {
  const [currentEvents, setCurrentEvents] = useState([])

  const handleEventClick = async (selected) => {
    const title = prompt('Enter a new title for your event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }

  const handleDateClick = (selected) => {
    const confirm = window.confirm(`The event ${selected.event.title} will be deleted`)
    if (confirm) {
      selected.event.remove()
    }
  }


  return (
    <div className='calendar'>
      <Sidebar />
      <div className='calendarContainer'>
        <Navbar />
        <div className='topCalendar'>
          <h1>{title}</h1>
        </div>
        <div className='centerCalendar'>
          <Box m='20px' >
            <Box display='flex' justifyContent='space-between'>
              {/*left part*/}
              <Box flex='1 1 20%' p='15px' borderRadius='4px' >
                <Typography variant='h5' color='#999'>Events</Typography>
                <List>
                  {currentEvents.map((event) => (
                    <ListItem key={event.id}
                              sx={{ backgroundColor: 'lightgrey', margin: '10px 0', borderRadius: '2px' }}>
                      <ListItemText primary={event.title}
                                    secondary={<Typography>
                                      {formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}
                                    </Typography>} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              {/*right part*/}
              <Box flex='1 1 100%' ml='15px'>
                <FullCalendar
                  height='75vh'
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                  headerToolbar={{
                    left: 'prev next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                  }}
                  initialView='dayGridMonth'
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  select={handleEventClick}
                  eventClick={handleDateClick}
                  eventsSet={(events) => setCurrentEvents(events)}
                  initialEvents={[
                    {id: '1234', title: 'All-day event', date: '2022-04-15'},
                    {id: '4321', title: 'Timed event', date: '2022-02-15'}
                  ]}
                />
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Calendar