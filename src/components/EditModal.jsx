import React, { useState } from 'react'
import {
  Button,
  Modal,
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

const EditModal = ({ fields, data, nameEntities, dataId, editMethod }) => {
  const [showModalEdit, setShowModalEdit] = useState(false)
  const toggleModalEdit = () => setShowModalEdit(!showModalEdit)

  const submitEdit = (depotId) => {
    return editMethod(depotId).then((res) => toggleModalEdit())
  }

  return (
    <React.Fragment>
      <Button
        onClick={() => toggleModalEdit()}
        className='btn-circle'
        size='sm'
        id={dataId}
        data-target={'#modalEdit' + dataId}
        color='info'
      >
        <i className='fas fa-edit-alt' />
      </Button>
      <Modal isOpen={showModalEdit} toggle={toggleModalEdit}>
        <ModalHeader toggle={toggleModalEdit}>Modifier</ModalHeader>
        <ModalBody>
          <Form onSubmit={submitEdit}>
            {fields &&
              fields.map((field, index) => (
                <FormGroup key={index}>
                  {console.log('field', field)}
                  {console.log('data', data)}
                  <Label for='email'>Email</Label>
                  <Input type='email' name='email' required id='email' />
                </FormGroup>
              ))}

            <div className='d-flex justify-content-around align-items-center'>
              <Button color='secondary' onClick={toggleModalEdit}>
                Annuler
              </Button>
              <Button color='primary' type='submit'>
                Modifier
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}
export default EditModal
