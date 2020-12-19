import { flattenDeep, flatten, compact, concat } from 'lodash'
import React, { useState } from 'react'
import {
  Button,
  Modal,
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader,
  ModalBody
} from 'reactstrap'

const EditModal = ({ fields, data, dataId, editMethod }) => {
  const [showModalEdit, setShowModalEdit] = useState(false)
  const toggleModalEdit = () => setShowModalEdit(!showModalEdit)

  const submitEdit = (e) => {
    e.preventDefault()
    console.log('submitEdit()')

    const data = fields.map((field, index) => {
      return {
        [field.field]: e.target[field.field].value
      }
    })

    console.log('data', data)

    return editMethod(data)
      .then((res) => toggleModalEdit())
      .catch((err) => console.log('err', er))
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
        <i className='fas fa-edit' />
      </Button>
      <Modal isOpen={showModalEdit} toggle={toggleModalEdit}>
        <ModalHeader toggle={toggleModalEdit}>Modifier</ModalHeader>
        <ModalBody>
          <Form onSubmit={submitEdit}>
            {fields &&
              fields.map((field, index) => (
                <FormGroup key={index}>
                  <Label for={field.field}>{field.name}</Label>
                  <Input
                    type={
                      (field && field.inputType && field.inputType) || 'text'
                    }
                    defaultValue={data[field.field]}
                    name={field.field}
                    required
                    id={field.field}
                  />
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
