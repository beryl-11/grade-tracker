import '../css/modal.css';
import { createPortal } from "react-dom";
import Modal from "./Modal";
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalContainer() {
    const [modalState, setModalState] = useState("closed")

    function closeModal() {
        setModalState("closed");
    }

    return createPortal(
        <ModalContext.Provider>
            {/* TODO: Close modal from backdrop without having onClick read clicks from child elements */}
            {modalState === "open" && <div className='modal-backdrop'>
                <Modal />
            </div>}
        </ModalContext.Provider>,
        document.body
    )

}
