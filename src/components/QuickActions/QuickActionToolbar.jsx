function QuickActionToolbar() {
    return <aside className="toolbar">
        <button type="button" className="toolbar-btn modal-open-btn" id="add-course-btn" data-href="add-course-modal" aria-label="Add Course">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                className="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </aside>
}

export default QuickActionToolbar