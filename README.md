---


# React Table Compose


## Installation

```
$ yarn add https://github.com/alexandrebouttier/react-table-compose.git
```
## Usage

`import {ReactTableCompose} from 'react-table-compose';`


```javascript

   <ReactTableCompose
        dataset={depositsMoney}
        nameEntities='dépot'
        deleteMethod={deleteDepotMoney}
        /// Si deleteMethod à une fonction de suppresion , une modal de suppression ainsi qu'un bouton sera automatiquement créer 
        fields={[
          {
            name: 'Date',
            field: 'date',
            type: 'date',
            options: {
              dateFormat: 'll',
            },
          },
          {
            name: 'Crypto',
            field: 'currency',
            type: 'text',
            options: {
              upperCase: true,
            },
          },
          {
            name: 'Quantité',
            field: 'quantity',
            type: 'number',
          },
          {
            name: 'Frais',
            field: 'fee',
            type: 'number',
          },
          {
            name: 'Prix/Crypto',
            field: 'priceCoin',
            type: 'number',
          },
          {
            name: 'Total',
            field: 'priceTotal',
            type: 'price',
            options: {
              currency: '€',
              decimal: 2,
            },
          },
        ]}
      />
```
#### Basic parameters

```javascript
<ReactTableCompose
        dataset={depositsMoney}
        // données 
        nameEntities='dépot'
        // nom de l'entité 
        fields={[
          {
            name: 'Crypto',
            field: 'currency',
            type: 'text',
            options: {
              upperCase: true,
            },
          },
          {
            name: 'Quantité',
            field: 'quantity',
            type: 'number',
          },
        // Champs à afficher
        ]}
      />
/>
```
## Fields disponible

#### FieldText
|  options |type|
| ------------- | ------------- |
| upperCase  |  boolean |
| upperFirst  |  boolean |
| transformValue  |  array |

#### FieldDate
|  options |type|
| ------------- | ------------- |
| dateFormat  |  string ("LT","LTS","L","l","LL","ll","LLL","lll","LLLL","llll") |

#### FieldNumber
|  options |type|
| ------------- | ------------- |
| decimal  |  number ("1,2,3,4,5,6") |

#### FieldPrice
|  options |type|
| ------------- | ------------- |
| decimal  |  number ("1,2,3,4,5,6") |
| currency  |  string ("symbol currency") |

#### FieldBadge


```javascript
badge: {
   success: 'buy', // color => value
   danger: 'sell',
   },
```                
|  options |type|
| ------------- | ------------- |
| badge  |  object |

badges dispo :

primary 
secondary
success 
danger 
warning
info 
light
dark 


## Exemple

```javascript


export const ordersTypes = {
  market: 'Au marché',
  limit: 'Limite',
  take_profit_limit: 'Take profit limite',
};

export const ordersStatus = {
  closed: 'Fermer',
  canceled: 'Annuler',
  open: 'Ouvert',
};

  <ReactTableCompose
          dataset={ordersData}
          nameEntities='order'
          fields={[
            {
              name: 'Order id',
              field: 'id',
              type: 'number',
            },
            {
              name: 'Date',
              field: 'datetime',
              type: 'date',
              options: {
                dateFormat: 'll',
              },
            },
            {
              name: 'Achat/Vente',
              field: 'side',
              type: 'badge',
              options: {
                badge: {
                  success: 'buy',
                  danger: 'sell',
                },
              },
            },
            {
              name: 'Type',
              field: 'type',
              type: 'text',
              options: {
                transformValue: ordersTypes,
              },
            },
            {
              name: 'Symbol',
              field: 'symbol',
              type: 'text',
              options: {
                upperCase: true,
              },
            },
            {
              name: 'Quantité',
              field: 'quantity',
              type: 'number',
            },
            {
              name: 'Prix',
              field: 'price',
              type: 'price',
              options: {
                currency: '$',
                decimal: 2,
              },
            },
            {
              name: 'Statut',
              field: 'status',
              type: 'text',
              options: {
                transformValue: ordersStatus,
              },
            },
          ]}
        />
```      
