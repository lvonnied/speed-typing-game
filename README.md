<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lvonnied/speed-typing-game">
    <img src="./src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">speed-typing-game</h3>

  <p align="center">
    Simple speed typing game made with Angular.
    <br />
    <a href="https://github.com/lvonnied/speed-typing-game"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/lvonnied/speed-typing-game">View Demo</a>
    ·
    <a href="https://github.com/lvonnied/speed-typing-game/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/lvonnied/speed-typing-game/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
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
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

### Built With

* [![Angular][Angular.io]][Angular-url]

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

To run this locally you need Angular CLI installed. If you don't have it, you can install it with npm.
* npm
  ```sh
  npm install -g @angular/cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lvonnied/speed-typing-game.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the project locally
   ```sh
   ng serve
   ```

<!-- USAGE EXAMPLES -->
## Usage

Try to type the words as fast as you can. The game will start when you type the first letter and will end when the time runs out or when you type the last letter of the last word. Once the game ends, you will see your score.

_For more examples, please refer to the [Documentation](https://example.com)_

<!-- ROADMAP -->
## Roadmap

- [x] Create a display box for a paragraph of text that the user will type
- [x] Create an input box for the user to type the displayed text
- [X] Highlight the character of the word users are currently typing (in the display box):
    - [x] GREEN - letter is correct
    - [x] RED - letter is wrong
- [ ] Create a START button for the test to begin
- [x] Create a display box for the countdown timer
    - [ ] Set a countdown time for each test
    - [ ] Activate the timer when the user clicks on START    
- [x] When the timer runs out, display how many words the user typed per minute

- [ ] Create a drop down menu where the user can select the difficulty of the text (i.e. easy, medium, difficult). Based on the user’s selection, display the selected text.
- [x] Calculate the accuracy (%) of the user’s inputs
- [ ] Give different words different weights: simple words like “a”, “the”, “an” etc. should weigh less than difficult words like “friendship” and “neighborhood”
- [ ] Allow users to see only one line of text, rather than the entire paragraph
- [ ] Create different types of tests for different use cases: text only, numbers only, emoji only, etc.

See the [open issues](https://github.com/lvonnied/speed-typing-game/issues) for a full list of proposed features (and known issues).

<!-- LICENSE -->
## License

<!-- Distributed under the MIT License. See `LICENSE.txt` for more information. -->

<!-- CONTACT -->
## Contact

Lucas - lucaskvn@gmail.com

Project Link: [https://github.com/lvonnied/speed-typing-game](https://github.com/lvonnied/speed-typing-game)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [codementor](https://www.codementor.io/projects/web/speed-typing-game-c51led1afn)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/lvonnied/speed-typing-game.svg?style=for-the-badge
[contributors-url]: https://github.com/lvonnied/speed-typing-game/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lvonnied/speed-typing-game.svg?style=for-the-badge
[forks-url]: https://github.com/lvonnied/speed-typing-game/network/members
[stars-shield]: https://img.shields.io/github/stars/lvonnied/speed-typing-game.svg?style=for-the-badge
[stars-url]: https://github.com/lvonnied/speed-typing-game/stargazers
[issues-shield]: https://img.shields.io/github/issues/lvonnied/speed-typing-game.svg?style=for-the-badge
[issues-url]: https://github.com/lvonnied/speed-typing-game/issues
[license-shield]: https://img.shields.io/github/license/lvonnied/speed-typing-game.svg?style=for-the-badge
[license-url]: https://github.com/lvonnied/speed-typing-game/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/lucas-von-niederhäusern
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 