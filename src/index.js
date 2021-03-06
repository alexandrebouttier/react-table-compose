import React, { Fragment } from 'react'

import { Table, CardBody, Card, Alert } from 'reactstrap'

import DeleteModal from './components/DeleteModal'
import EditModal from './components/EditModal'

import FieldText from './components/fields/FieldText'
import FieldDate from './components/fields/FieldDate'
import FieldPrice from './components/fields/FieldPrice'
import FieldNumber from './components/fields/FieldNumber'
import FieldBadge from './components/fields/FieldBadge'
import FieldPercentage from './components/fields/FieldPercentage'

const ReactTableCompose = ({
  idCollection,
  nameEntities,
  deleteMethod,
  editMethod,
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
      case 'percentage':
        return <FieldPercentage index={index} data={data} field={field} />
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
            {dataset
              ? dataset.map((data, rowId) => {
                  return (
                    <tr key={rowId}>
                      {fields &&
                        fields.map((field, i) => {
                          return (
                            <Fragment key={i}>
                              {switchField(
                                fields[i].fieldType,
                                i,
                                data,
                                fields[i].options,
                                fields[i].field
                              )}
                            </Fragment>
                          )
                        })}
                      {editMethod && (
                        <td>
                          <EditModal
                            fields={fields}
                            data={data}
                            dataId={
                              (idCollection && data[idCollection]) || data.id
                            }
                            editMethod={editMethod}
                            nameEntities={nameEntities}
                          />
                        </td>
                      )}
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
              : null}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}
export default ReactTableCompose
