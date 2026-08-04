import { useModalContext } from "./ModalManager";

export default function ModalOpenButton() {
    const {openModal} = useModalContext();

    const openBtnHandler = () => {
        openModal("open");
    }

    return <button type="button" className="modal-open-btn" onClick={openBtnHandler}>Open
    </button>
}