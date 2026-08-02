import '../css/modal.css';
import { createPortal } from "react-dom";
import {SettingsModal} from "./Modal";
import { ModalContextProvider, useModalContext } from '../components/ModalManager';

export function ModalContainer() {
    const {modalState} = useModalContext();
    return createPortal(
        <>
            {/* TODO: Close modal from backdrop without having onClick read clicks from child elements */}
            {modalState==="open" && <div className='modal-backdrop'>
                <SettingsModal />
            </div>}
        </>,
        document.body
    )

}
