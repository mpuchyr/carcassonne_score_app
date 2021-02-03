import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import ModalContext from '../../context/modal-context';
import SharedFeature from './SharedFeature';

const SharedFeatureModal = ({ playerId, score, history }) => {
    const { modalIsOpen, closeModal } = useContext(ModalContext)

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel="Shared Feature"
        >
            <SharedFeature playerId={playerId} score={score} history={history}/>
        </Modal>
    )
}

export default SharedFeatureModal