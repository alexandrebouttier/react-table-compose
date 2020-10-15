import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = ({ nameEntities, dataId, deleteMethod }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const toggleModalDelete = () => setShowModalDelete(!showModalDelete);

  const deleteRow = (depotId) => {
    return deleteMethod(depotId).then((res) => toggleModalDelete());
  };

  return (
    <React.Fragment>
      <Button
        onClick={() => toggleModalDelete()}
        className='mr-2 ml-2 btn-circle'
        size='sm'
        id={dataId}
        data-target={'#deleteModal' + dataId}
        color='danger'
      >
        <i className='fas fa-trash-alt' />
      </Button>
      <Modal
        isOpen={showModalDelete}
        toggle={showModalDelete}
        id={'deleteModal' + dataId}
      >
        <ModalHeader toggle={toggleModalDelete}>
          Supprimer ce {nameEntities}
        </ModalHeader>
        <ModalBody>Confirmer la suppression de ce {nameEntities}</ModalBody>
        <ModalFooter>
          <Button color='danger' onClick={() => deleteRow(dataId)}>
            Je confirme
          </Button>
          <Button color='secondary' onClick={toggleModalDelete}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};
export default DeleteModal;
