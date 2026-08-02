import { useState } from "react";
import { createContext } from "react";

export function ModalContextProvider() {
    const ModalContext = createContext(null);
    const [modalState, setModalState] = useState("open");
    return <ModalContext.Provider value={modalState}></ModalContext.Provider>
}