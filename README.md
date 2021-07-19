# Rocket.Q

[<img alt="Linkedin Logo" src="https://img.shields.io/badge/-Luiz%20Fernando%20Tavares-8257E5?logo=linkedin">](https://www.linkedin.com/in/luiz-fernando-tavares-141311187/)
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/luyzfern4ndo/nlw6-rocketQ">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/luyzfern4ndo/nlw6-rocketQ">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/luyzfern4ndo/nlw6-rocketQ">
<img alt="MIT License" src="https://img.shields.io/badge/license-MIT-green">

[linkedin-shield]: https://img.shields.io/badge/-Luiz%20Fernando%20Tavares-8257E5?logo=linkedin
[link-linkedin]: https://www.linkedin.com/in/luiz-fernando-tavares-141311187/

## :pushpin: Table of Contents

- [Introduction](#book-introduction)
- [Technologies](#rocket-technologies)
- [Requirements](#clipboard-requirements)
- [How to install](#fire-how-to-install)
- [Future Improvements](#man_astronaut-future-improvements)
- [License](#closed_book-license)

## :book: Introduction

A project based on HTML, CSS, Javascript, Nodejs and EJS. This app was created to register rooms that generate random codes and insert questions in them. Questions are saved in the database and you can mark them as read and delete them. To access another existing room, just have its code.

Please note that this project was built on the NLW 6th edition educational initiative promoted by Rocketseat and led by Educator [Jakeliny Gracielly](https://github.com/jakeliny).

In this project, the Nodejs with Express were used to configure the EJS so that it was possible to display the HTML pages and manipulate them with Javascript code.

Some features: create a new room with a password, register questions,

## :rocket: Technologies

This project was made using the following technologies:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## :clipboard: Requirements

You will need [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) (optional) installed. It is interesting to use a program like [Beekeeper](https://www.beekeeperstudio.io/) to access the Database interface.

## :fire: How to install

You must clone this repository and through terminal type the following commands:

```bash
# Clone the repository
$ git clone https://github.com/luyzfern4ndo/nlw6-rocketQ.git

# Go into the repository
$ cd nlw6-rocketQ

# Install dependencies
$ yarn install # if you use yarn
$ npm install # if you use npm

# Starting the express server on port 3000
$ yarn dev # if you use yarn
$ npm run dev # if you use npm

# To create the tables on Database
$ yarn database # if you use yarn
$ npm run database #if you use npm
```

---

## :man_astronaut: Future Improvements

- [x] Verify if the question input is empty.

- [x] Verify and encrypt the password to doesnt save without security.

- [x] Dont allow null values into database.

- [ ] Dont allow access a inexistent room.

- [x] Feel free to suggest any improvements!

## :closed_book: License

This project is under the [MIT](https://github.com/luyzfern4ndo/nlw6-rocketQ/blob/master/LICENSE) license.

---

Made with :purple_heart: by Luiz Fernando Tavares.

:wave: [Get in touch!](https://www.linkedin.com/in/luiz-fernando-tavares-141311187/)

I hope this project has helped you!
