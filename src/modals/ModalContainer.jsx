import '../css/modal.css'
import {createPortal} from "react-dom";
import Modal from "./Modal";

export default function ModalContainer() {
    return createPortal(
        <div className='modal-backdrop'>
            <Modal></Modal>
        </div>,
        document.body
    )

}
