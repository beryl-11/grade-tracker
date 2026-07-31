import {createPortal} from "react-dom";
import Modal from "./Modal";

export default function ModalContainer() {
    return createPortal(
        <Modal/>,
        document.body
    )

}
