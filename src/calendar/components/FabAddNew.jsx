import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"


export const FabAddNew = () => {

    const {OpenDateModal} = useUiStore();
    const {SetActiveEvent} = useCalendarStore();

    const handleClickNew = () =>{
        SetActiveEvent({
            title: "",
            notes: "",
            start: new Date(),
            end: addHours(new Date(), 1),
            bgColor: "#fafafa",
            user: {
            _id: "123",
            name: "Hernan",
            }
        })
        OpenDateModal();
    }
  return (
    <button
        className="btn btn-primary fab"
        onClick={handleClickNew}
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
