import {useSelector, useDispatch} from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const {events, activeEvent} = useSelector(state => state.calendar);

  const SetActiveEvent = (calendarEvent) =>{
    dispatch(onSetActiveEvent(calendarEvent));
  }
  
  const startSavingEvent = async (calendarEvent) =>{
    if (calendarEvent._id){
      dispatch(onUpdateEvent(calendarEvent));
    } else {
      dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}))
    }
  }

  const startDeletingEvent = () =>{
    dispatch(onDeleteEvent());

  }
  return {
    activeEvent,
    events,
    hasEventSElected: !!activeEvent,
    SetActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}
