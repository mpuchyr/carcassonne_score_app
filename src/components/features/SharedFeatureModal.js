import React, { useState } from 'react';
import Modal from 'react-modal';
import SharedFeature from './SharedFeature';

const SharedFeatureModal = ({ playerId, score, history, modalIsOpen, closeModal }) => {
    
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Shared Feature"
        >
            <SharedFeature playerId={playerId} score={score} history={history}/>
        </Modal>
    )
}

export default SharedFeatureModal