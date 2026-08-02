import { useModalContext } from "./ModalManager";

export default function ModalOpenButton() {
    const {openModal} = useModalContext();

    return <button type="button" className="modal-open-btn" onClick={openModal}>Open
    </button>
}