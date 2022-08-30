import { useSelector, useDispatch } from "react-redux"
import { onOpenDateModal,onCloseDateModal } from "../store/ui/uiSlice";


export const useUiStore = () =>{

    const dispatch = useDispatch();

    const {isDateModalOpen} = useSelector(state => state.ui);
    
    const OpenDateModal = () =>{
        dispatch(onOpenDateModal())
    }

    const CloseDateModal = () =>{
        dispatch(onCloseDateModal());
    }

    return{
        isDateModalOpen,
        OpenDateModal,
        CloseDateModal
    }
}