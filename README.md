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
        datas={depositsMoney}
        nameEntities='dépot'
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
            type: 'number',
          },
        ]}
      />
```
