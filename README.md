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
        datas={depositsMoney}
        // données 
        nameEntities='dépot'
        // nom de l'entité 
        fields={[
          {
            name: 'Id',
            field: 'date',
            type: 'date',
            dateFormat: 'LL',
          },
          {
            name: 'Crypto',
            field: 'currency',
            type: 'text',
          },
        // Champs à afficher
        ]}
      />
/>
```

#### Fields Types/Options
| Type  | Options |
| ------------- | ------------- |
| date  | dateFormat  |
| text  |  upperFirst |
| price  | toFixed   |

