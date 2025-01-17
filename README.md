# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### (NEW) Deviations

- Color scheme is based on OS instead of only dark mode by the design

### Screenshot

![Mobile Screenshot](./screenshots/mobile.jpeg)
![Desktop Screenshot](./screenshots/desktop.jpeg)

### Links

- Solution URL: [Password Generator App Solution](https://www.frontendmentor.io/solutions/password-generator-app-kmHbIAQjUw)
- Live Site URL: [Password Generator App](https://alexl8819.github.io/password-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS Modules
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev) - Frontend tooling
- [ESLint](https://eslint.org) - JS linter
- [Stylelint](https://stylelint.io) - CSS linter
- [Jest](https://jestjs.io) - JS test framework

### What I learned

~~Styling a consistent cross-browser range input is not easy. It took several attempts to get a consistent baseline styling, which is nothing more than a thumb and track to a default scheme. Many weird vendor prefixed styles were unfortunately used and while a CSS only solution was possible, the solutions found across the internet were less than impressive or overly complicated. Luckily enough, firefox does have the appropriate vendor prefix to style the track and thumb appropriately however it seemed browsers utilizing webkit were left to implement their own solution. Therefore I came up with an idea to dynamically style a `linear-gradient` background in JS as shown below:~~

Updated solution using CSS only:

```css
background: linear-gradient(to right, var(--lime-green) calc(calc(var(--range) - var(--offset)) / var(--max) * 100%), var(--black) calc(calc(var(--range) - var(--offset)) / var(--max) * 100%));
```

### Continued development

I plan to use CSS modules as my preferred solution over styled components when working with React going forward as I find it easier to read and catch mistakes. I also plan to test on various browsers to ensure functionality and accessibility is respected across all browsers.

### Useful resources

- [linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) - Good resource used when trying to understand linear gradient behavior.
- [Fisher Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm) - Useful resource to implement a modern shuffle algorithm, which was used to randomize charsets in sequence generation.

## Author

- Frontend Mentor - [@alexl8819](https://www.frontendmentor.io/profile/alexl8819)

