<!-- Inspired by https://github.com/jennifertakagi/weather-app -->

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jennifertakagi/weather-app">
    <img src="docs/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">How's the weather?</h3>

  <p align="center">
    Check it out the current and the next 24 hours weather of 5 European cities!
    <br />
    <a href="https://github.com/jennifertakagi/weather-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://weather-app26.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/jennifertakagi/weather-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/jennifertakagi/weather-app/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://weather-app26.vercel.app/)

Check it out the current and the next 24 hours weather of 5 European cities!

Features:
* Gets all data from a public API: https://openweathermap.org
* Shows the weather of Amsterdam, Bristol, Brussels, London and Krakow
* Shows the current weather of each city, with the information about: city's name, main weather, weather description, average temperature, wind speed and the current hour
* Shows the next 24 hours at a click


### Built With

* [Angular JS](https://angular.io/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Get a free API Key at [Open Weather Map](https://openweathermap.org/api/one-call-api)
2. Clone the repo
   ```sh
   git clone https://github.com/jennifertakagi/weather-app.git
   ```
3. Install packages
   ```sh
   yarn | npm install
   ```
4. Enter your API in `.env.js`
   ```sh
   API_KEY= = 'ENTER YOUR API'
   ```
5. Run the following command in root folder to start (on port 4200) the application in a development environment
   ```sh
   yarn start | npm run start
   ```
6. Run tests on project
   ```sh
   yarn test | test:coverage
   ```



<!-- USAGE EXAMPLES -->
## Usage

* Mobile version
<p align="left">
   <img src="docs/hows-weather-mobile.png" width="250"/>
</p>



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jennifertakagi/weather-app/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. Check the test coverage, it has 82,8% of unit tests coverage.
<p align="left">
   <img src="docs/test-coverage.png" />
</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Jennifer Takagi - [@jennitakagi](https://twitter.com/jennitakagi)

[Check out the demo project](https://weather-app26.vercel.app/)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jennifertakagi/weather-app.svg?style=for-the-badge
[contributors-url]: https://github.com/jennifertakagi/weather-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jennifertakagi/weather-app.svg?style=for-the-badge
[forks-url]: https://github.com/jennifertakagi/weather-app/network/members
[stars-shield]: https://img.shields.io/github/stars/jennifertakagi/weather-app.svg?style=for-the-badge
[stars-url]: https://github.com/jennifertakagi/weather-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/jennifertakagi/weather-app.svg?style=for-the-badge
[issues-url]: https://github.com/jennifertakagi/weather-app/issues
[license-shield]: https://img.shields.io/github/license/jennifertakagi/weather-app.svg?style=for-the-badge
[license-url]: https://github.com/jennifertakagi/weather-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jennifertakagi
[product-screenshot]: docs/screenshot.png