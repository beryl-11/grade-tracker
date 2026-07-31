export default function ModalOpenButton() {
    function openModal() {
        document.getElementById("modal-container").showModal();
    
    }

    return <button type="button" className="modal-open-btn" onClick={openModal}>Open
    </button>
}