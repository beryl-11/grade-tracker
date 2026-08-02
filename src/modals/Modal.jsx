import { useModalContext } from "../components/ModalManager"

function ModalTemplate({ children }) {
    return <div className="modal" id="template-modal">
        <button type="button" className="modal-exit-btn" aria-label="exit modal button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                className="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        {children}
    </div>

}

export function SettingsModal() {
    return <ModalTemplate>
        <div className="modal-header">
            <h1>Settings</h1>
        </div>

        <hr />

        <div className="modal-section">
            <h2>Random Heading</h2>
            <p>Some paragraph should be here.</p>
        </div>
    </ModalTemplate>
}

export function AddCourseModal() {
    return <ModalTemplate>
        <div className="modal-header">
            <h1>Add Course</h1>
        </div>
    </ModalTemplate>
}