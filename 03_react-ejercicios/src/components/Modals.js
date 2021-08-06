import React from 'react'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'
import ModalPortal from './ModalPortal'
import ContactForm from './ContactForm'
import SongSearch from './SongSearch'

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false); /*Con este hook podemos manejar todo la logica del modal */
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModalContact, OpenModalContact, closeModalContact] = useModal(false);
    const [isOpenModalSong, OpenModalSong, closeModalSong] = useModal(false);
    const [isOpenPortal, OpenModalPortal, closeModalPortal] = useModal(false);

    return (
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hola este es el contenido de mi modal 1</p>
                <img src="https://placeimg.com/400/400/animals" alt="Animals" />
            </Modal>
            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Otro modal</h3>
                <p>Lorem ipsum</p>
                <img src="https://placeimg.com/400/400/nature" alt="Nature" />
            </Modal>
            <button onClick={OpenModalContact}>Modal Contacto</button>
            <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
                <ContactForm />
            </Modal>
            <button onClick={OpenModalSong}>Modal Canciones</button>
            <Modal isOpen={isOpenModalSong} closeModal={closeModalSong}>
                <SongSearch />
            </Modal>
            <button onClick={OpenModalPortal}>Modal por medio de portales</button>
            <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
                <h3>Modal en portal</h3>
                <p>Este es el contenido de un modal que carga en otro nodo del DOM gracias a 
                    un react Portal
                </p>
                <img src="https://placeimg.com/400/400/tech" alt="Tecnologia" />
            </ModalPortal>
        </div>
    )
}

export default Modals
