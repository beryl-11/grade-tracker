import { useContext, useState } from "react";
import { createContext } from "react";

const ModalContext = createContext(null);

export function ModalContextProvider({ children }) {
    const [modalState, setModalState] = useState("closed");

    // Modal state control functions
    const openModal = (modalName) => setModalState("open");
    const closeModal = () => setModalState("closed");

    return <ModalContext.Provider value={modalState}>
        {children}
    </ModalContext.Provider>
}

export function useModalContext() {
    return useContext(ModalContext);
}