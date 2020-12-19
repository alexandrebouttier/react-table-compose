
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/alexandrebouttier/react-table-compose">
    <img src="https://banner2.cleanpng.com/20180817/oox/kisspng-react-computer-icons-scalable-vector-graphics-redu-5b777faedc42d8.1916296815345581269022.jpg" alt="Logo" width="100" height="80">
  </a>

  <h3 align="center">React Table Compose</h3>

  <p align="center">
  Package React permettant de créer facilement des tableaux Bootstrap avec des jeux de données
    <br />
    <a href="https://github.com/alexandrebouttier/react-table-compose"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/alexandrebouttier/react-table-compose">View Demo</a>
    ·
    <a href="https://github.com/alexandrebouttier/react-table-compose/issues">Report Bug</a>
    ·
    <a href="https://github.com/alexandrebouttier/react-table-compose/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [Fields](#fields)
  * [Exemples](#exemples)  
  
<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

React Table Compose , vous permettra de créer facilement un tableau avec Bootstrap , avec les champs des données directement formaté par rapport aux types de donner, mais aussi de permettre de créer directement un CRUD 

<!-- GETTING STARTED -->
## Getting Started

### Installation

```
$ yarn add https://github.com/alexandrebouttier/react-table-compose.git
```
<!-- USAGE EXAMPLES -->
## Usage

`import {ReactTableCompose} from 'react-table-compose';`


```javascript

   <ReactTableCompose
        dataset={depositsMoney}
        nameEntities='dépot'
        idCollection="depot_id" //default id
        deleteMethod={deleteDepotMoney}
        // Si deleteMethod à une fonction de suppresion ,
        // une modal de suppression ainsi qu'un bouton sera automatiquement créer 
        fields={[
          {
            name: 'Date',
            field: 'date',
            fieldType: 'date',
            options: {
              dateFormat: 'll',
            },
          },
          {
            name: 'Crypto',
            field: 'currency',
            fieldType: 'text',
            options: {
              upperCase: true,
            },
          },
          {
            name: 'Quantité',
            field: 'quantity',
            fieldType: 'number',
          },
          {
            name: 'Frais',
            field: 'fee',
            fieldType: 'number',
          },
          {
            name: 'Prix/Crypto',
            field: 'priceCoin',
            fieldType: 'number',
          },
          {
            name: 'Total',
            field: 'priceTotal',
            fieldType: 'price',
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
        idCollection="depot_id" // default id
        // nom de l'entité 
        fields={[
          {
            name: 'Crypto',
            field: 'currency',
            fieldType: 'text',
            options: {
              upperCase: true,
            },
          },
          {
            name: 'Quantité',
            field: 'quantity',
            fieldType: 'number',
          },
        // Champs à afficher
        ]}
      />
/>
```
<!-- Fields disponible -->
## Fields

#### FieldText
|  options |type|
| ------------- | ------------- |
| upperCase  |  boolean |
| upperFirst  |  boolean |
| transformValue  |  array |

#### FieldPercentage
|  options |null|

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




## Exemples

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
              fieldType: 'number',
            },
            {
              name: 'Date',
              field: 'datetime',
              fieldType: 'date',
              options: {
                dateFormat: 'll',
              },
            },
            {
              name: 'Achat/Vente',
              field: 'side',
              fieldType: 'badge',
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
              fieldType: 'text',
              options: {
                transformValue: ordersTypes,
              },
            },
            {
              name: 'Symbol',
              field: 'symbol',
              fieldType: 'text',
              options: {
                upperCase: true,
              },
            },
            {
              name: 'Quantité',
              field: 'quantity',
              fieldType: 'number',
            },
            {
              name: 'Prix',
              field: 'price',
              fieldType: 'price',
              options: {
                currency: '$',
                decimal: 2,
              },
            },
            {
              name: 'Statut',
              field: 'status',
              fieldType: 'text',
              options: {
                transformValue: ordersStatus,
              },
            },
          ]}
        />
```      



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alexandrebouttier/react-table-compose.svg?style=flat-square
[contributors-url]: https://github.com/alexandrebouttier/react-table-compose/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alexandrebouttier/react-table-compose.svg?style=flat-square
[forks-url]: https://github.com/alexandrebouttier/react-table-compose/network/members
[stars-shield]: https://img.shields.io/github/stars/alexandrebouttier/react-table-compose.svg?style=flat-square
[stars-url]: https://github.com/alexandrebouttier/react-table-compose
[issues-shield]: https://img.shields.io/github/issues/alexandrebouttier/react-table-compose.svg?style=flat-square
[issues-url]: https://github.com/alexandrebouttier/react-table-compose/issues
[license-shield]: https://img.shields.io/github/license/alexandrebouttier/react-table-compose.svg?style=flat-square
[license-url]: https://github.com/alexandrebouttier/react-table-compose/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alexandrebouttier/
[product-screenshot]: screenshot.png
