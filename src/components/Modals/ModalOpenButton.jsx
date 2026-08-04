import { useModalContext } from "./ModalManager";

export default function ModalOpenButton({modalRef, textContent = ""}) {
    const {openModal} = useModalContext();

    const openBtnHandler = () => {
        openModal("open");
    }

    return <button type="button" className="modal-open-btn" onClick={openBtnHandler}>Open
    </button>
}
