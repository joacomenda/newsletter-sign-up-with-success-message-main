# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/newsletter-sign-up.png)

### Links

- Solution URL: [GitHub repository](https://github.com/joacomenda/newsletter-sign-up-with-success-message-main)
- Live Site URL: [GitHub pages](https://joacomenda.github.io/newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Clamp function for font-sizes

### What I learned

I learned a lot about making more responsive webpages using the clamp function. I used it mainly for adjusting font sizes of the page dinamically

### Continued development

I struggled when doing the jump from mobile to desktop design, I had to change the clamp functions again, which is not ideal

### Useful resources

- [min(), max(), and clamp() are CSS magic!](https://www.youtube.com/watch?v=U9VF-4euyRo) - This helped me to create font sizes that respond to different mobile layouts, thus, avoiding using a lot of media queries.

- [No justify-self in Flexbox? No problem!](https://www.youtube.com/watch?v=q08BbYNG8h0&t=242s) - When creating the success message that appears when you introduce a valid email, I had problems to put the button at the bottom of the container, this video helped me to do it.

## Author

- Frontend Mentor - [@joacomenda](https://www.frontendmentor.io/profile/joacomenda)
