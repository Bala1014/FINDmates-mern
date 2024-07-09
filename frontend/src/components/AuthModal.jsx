const AuthModal = ({setShowModal})=>{

    const handleclick = ()=>{
        setShowModal(false);
    }
    return (
        <div className="auth-modal">
            <div onClick={handleclick}>❌</div>
            AUTH MODAL
        </div>
    )
}

export default AuthModal;