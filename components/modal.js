import React, { useContext } from 'react'; 
import { useAppContext } from '../src/context/appcontext'

const Modal = () => {

    const ctx = useAppContext();

    let show = ctx[0].state.isModalOpen;
    let { title, content, image } = ctx[0].state.modalData;
    
    let protoModal = {
        background: "white",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        width: "70%",
        maxWidth: "100%",
        opacity: show ? 1 : 0,
        transition: "opacity 1s ease-in-out"
    };

    let modalBackground = {
        display: show ? "flex" : "none",
    }

    const closeModal = () => {
        ctx[0].handlers.setIsModalOpen(!show);
        document.body.classList.toggle('body-modal-open');
    }

    return(
        <div className="bg-black bg-opacity-75 fixed top-0 left-0 w-full h-full z-50 items-center justify-start" style={modalBackground}>
            <div className="protoModal" style={protoModal}>
                {image ? <img className="sm:w-full md:w-1/4 max-w-7xl mx-auto" src={`${image}`} /> : ''}
                <h2 style={{ fontSize: "1em" }}>{title ? title : 'STUFF JUST FOR NOW'}</h2>
                <p>{content ? content : ''}</p>
                <a onClick={() => closeModal()}>Close</a>   
            </div>
        </div>
    )
};

export default Modal