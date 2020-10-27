import React from 'react'

import { Table, CardBody, Card, Alert } from 'reactstrap'

import DeleteModal from './components/DeleteModal'
import FieldText from './components/fields/FieldText'
import FieldDate from './components/fields/FieldDate'
import FieldPrice from './components/fields/FieldPrice'
import FieldNumber from './components/fields/FieldNumber'
import FieldBadge from './components/fields/FieldBadge'

const ReactTableCompose = ({
  idCollection,
  nameEntities,
  deleteMethod,
  dataset,
  fields
}) => {
  const switchField = (fieldType, index, data, options, field) => {
    switch (fieldType) {
      case 'text':
        return (
          <FieldText
            index={index}
            data={data}
            options={options}
            field={field}
          />
        )
      case 'number':
        return (
          <FieldNumber
            index={index}
            data={data}
            options={options}
            field={field}
          />
        )
      case 'price':
        return (
          <FieldPrice
            index={index}
            data={data}
            options={options}
            field={field}
          />
        )
      case 'date':
        return (
          <FieldDate
            index={index}
            data={data}
            options={options}
            field={field}
          />
        )
      case 'badge':
        return (
          <FieldBadge
            index={index}
            data={data}
            options={options}
            field={field}
          />
        )
      default:
    }
  }
  return (
    <Card>
      <CardBody>
        <Table className='bg-light' striped responsive>
          <thead className='bg-light'>
            <tr>
              {fields &&
                fields.map((field, i) => <th key={i}>{field.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {dataset ? (
              dataset.map((data, row) => {
                return (
                  <tr key={(idCollection && data[idCollection]) || data.id}>
                    {fields &&
                      fields.map((field, i) => {
                        return switchField(
                          fields[i].type,
                          i,
                          data,
                          fields[i].options,
                          fields[i].field
                        )
                      })}
                    {deleteMethod && (
                      <td>
                        <DeleteModal
                          dataId={
                            (idCollection && data[idCollection]) || data.id
                          }
                          deleteMethod={deleteMethod}
                          nameEntities={nameEntities}
                        />
                      </td>
                    )}
                  </tr>
                )
              })
            ) : (
              <Alert>Aucun dataset !</Alert>
            )}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}
export default ReactTableCompose
