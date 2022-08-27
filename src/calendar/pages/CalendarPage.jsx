import { Calendar } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours} from 'date-fns/esm'
import { Navbar, CalendarEvent, CalendarModal } from "../"
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';

const events = [{
  title: "cumpleaños",
  notes: "hay que comprar torta",
  start: new Date(),
  end: addHours (new Date(),1),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Hernan"
  }
}]

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem("lastView" || "week"))

  const eventStyleGetter = (event,start,end,isSelected) =>{

    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white"
    }
    return{
      style
    }
  }

  const onDoubleClick = (event) =>{
    console.log({doubleClick: event})
  }

  const onSelectClick = (event) =>{
    console.log({Click: event})
  }

  const onViewChanged = (event) =>{
    localStorage.setItem("lastView", event);
    setLastView(event);
  }

  return (
    <>
      <Navbar/>

    <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "calc(100vh - 80px)" }}
      messages= {getMessagesES()}
      eventPropGetter={eventStyleGetter}
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelectClick}
      onView={onViewChanged}
    />

    <CalendarModal/>
    </>
  )
}
