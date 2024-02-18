function Modal() {
return (
    <>
    {isOpen ? (
        <div id="confirmation" className="modal">
        Employee Created!
    </div>
    ) : (
        <div id="confirmation" className="modal">
        Problemes
    </div>
    )}
    </>
)
}
export default Modal