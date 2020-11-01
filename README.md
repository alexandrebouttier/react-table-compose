
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
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">React Table Compose</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
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
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



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



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/alexandrebouttier/react-table-compose/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



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
[product-screenshot]: images/screenshot.png
