import React, { useState } from 'react';
import {
  Table,
  CardBody,
  Card,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
} from 'reactstrap';

import { upperFirst, upperCase, isNaN } from 'lodash';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const ReactTableCompose = ({ nameEntities, deleteMethod, datas, fields }) => {
  // console.log('fields', fields);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const toggleModalDelete = () => setShowModalDelete(!showModalDelete);

  const deleteDepot = (depotId) => {
    console.log('delete');
  };
  /// la valeur du field data[fields[i].field]
  // le type du field  fields[i].type
  return (
    <Card style={{ width: '100%' }}>
      <CardBody>
        <Table className='bg-light' striped hover responsive light>
          <thead className='bg-light'>
            <tr>
              {fields &&
                fields.map((field, i) => <th key={i}>{field.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {datas &&
              datas.map((data, row) => {
                return (
                  <tr key={data._id}>
                    {fields &&
                      fields.map((field, i) => {
                        if (fields[i].type === 'icon_text') {
                          return (
                            <td key={i}>
                              <div className='d-flex justify-content-center align-items-center'>
                                {upperFirst(data[fields[i].field])}
                                <img
                                  style={{
                                    height: '20px',
                                    width: '20px',
                                    marginLeft: '0.3em',
                                  }}
                                  src={
                                    fields[i].path_img +
                                    data[fields[i].field] +
                                    '.png'
                                  }
                                />
                              </div>
                            </td>
                          );
                        }
                        if (fields[i].type === 'text') {
                          return (
                            <td key={i}>
                              {(fields[i].upperFirst &&
                                upperFirst(data[fields[i].field])) ||
                                (fields[i].upperCase &&
                                  upperCase(data[fields[i].field])) ||
                                data[fields[i].field]}
                            </td>
                          );
                        }
                        if (fields[i].type === 'number') {
                          return (
                            <td key={i}>
                              {!isNaN(data[fields[i].field]) &&
                                data[fields[i].field]}
                            </td>
                          );
                        }
                        if (fields[i].type === 'price') {
                          return (
                            <td key={i}>
                              {!isNaN(data[fields[i].field]) &&
                                data[fields[i].field] + ' €'}
                            </td>
                          );
                        }
                        if (fields[i].type === 'date') {
                          return (
                            <td key={i}>
                              {moment(data[fields[i].field]).format(
                                fields[i].dateFormat && fields[i].dateFormat
                              )}
                            </td>
                          );
                        }
                        if (fields[i].type === 'badge') {
                          return (
                            <td key={i}>
                              <Badge
                                color={
                                  data[fields[i].field] === 'buy'
                                    ? 'success'
                                    : 'danger'
                                }
                              >
                                {data[fields[i].field] === 'buy'
                                  ? 'ACHAT'
                                  : 'VENTE'}
                              </Badge>
                            </td>
                          );
                        }
                      })}

                    {deleteMethod && (
                      <td>
                        <React.Fragment>
                          <Button
                            onClick={() => toggleModalDelete()}
                            className='mr-2 ml-2 btn-circle'
                            size='sm'
                            color='danger'
                          >
                            <i className='fas fa-trash-alt' />
                          </Button>
                          <Modal
                            isOpen={showModalDelete}
                            toggle={showModalDelete}
                          >
                            <ModalHeader toggle={toggleModalDelete}>
                              Supprimer ce {nameEntities}
                            </ModalHeader>
                            <ModalBody>
                              Confirmer la suppression de ce {nameEntities}
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color='danger'
                                onClick={() => deleteDepot(data._id)}
                              >
                                Je confirme
                              </Button>
                              <Button
                                color='secondary'
                                onClick={toggleModalDelete}
                              >
                                Annuler
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </React.Fragment>
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};
export default ReactTableCompose;
