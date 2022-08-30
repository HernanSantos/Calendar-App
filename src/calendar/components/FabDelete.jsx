import { useCalendarStore, useUiStore } from "../../hooks"


export const FabDelete = () => {

    const {startDeletingEvent, hasEventSElected} = useCalendarStore();

    const handleDelete = () =>{
        startDeletingEvent();
    }

  return (
    <button
        className="btn btn-danger fab-danger"
        onClick={handleDelete}
        style={{
            display: hasEventSElected ? "" : "none"
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
