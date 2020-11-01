
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

There are many great README templates available on GitHub, however, I didn't find one that really suit my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should element DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

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
        idCollection="depot_id"
        deleteMethod={deleteDepotMoney}
        // Si deleteMethod à une fonction de suppresion ,
        // une modal de suppression ainsi qu'un bouton sera automatiquement créer 
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
<!-- Fields disponible -->
## Fields

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
