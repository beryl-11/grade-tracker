import { useModalContext } from "../components/ModalManager"

export function Modal() {
    return <div className="modal" id="template-modal">
        <button type="button" className="modal-exit-btn" aria-label="exit modal button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                className="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        {/* TODO: Delete the following dummy text and move them to a modal content component or something similar. */}
        <div className="modal-header">
            <h1>Header</h1>
        </div>

        <hr />

        <div className="modal-section">
            <h2>Random Heading</h2>
            <p>Some paragraph should be here.</p>
        </div>
    </div>

}