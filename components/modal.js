import React, { useContext } from 'react'; 
import { useAppContext } from '../src/context/appcontext'

const Modal = () => {
    
    const ctx = useAppContext();
    let show = ctx[0].state.isModalOpen;
    let { title, content } = ctx[0].state.modalData;
    
    let protoModal = {
        background: "white",
        padding: "10px",
        display: show ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        width: "60%",
        opacity: 1,
        transition: "all 1s ease"
    };

    let modalBackground = {
        display: show ? "flex" : "none",
       
    }

    const closeModal = () => {
        ctx[0].handlers.setIsModalOpen(!show);
        document.body.classList.toggle('body-modal-open');
    }

    return(
        <div className="bg-black bg-opacity-75 fixed top-0 left-0 w-full h-full z-50 flex items-center justify-start p-4" style={modalBackground}>
            <div className="protoModal" style={protoModal}>
                <h2 style={{ fontSize: "4em" }}>{title ? title : 'STUFF JUST FOR NOW'}</h2>
                <p>{content ? content : ''}</p>
                <a onClick={() => closeModal()}>Close</a>   
            </div>
        </div>
    )
};

export default Modal