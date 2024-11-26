# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

<img src="./design/active-states-basket-filled.jpg" alt="desktop" width="400"/>

## Table of contents
 
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Links

Live: [E-commerce Product Page](https://fm-static-job-listings-gm.vercel.app)
Code: [github repo](https://github.com/minezzig/fm-static-job-listings)

## My process

### Built with

- HTML
- JavaScript
- TypeScript
- mobile first development
- React
- Tailwind

### What I learned

The design and layout of this were great! However, I really had to think about how to handle the sorting. I started by using an array for filters and found sorting the single elements, such as the role and level, to be really easy. I struggled when it came to comparing the arrays included in the data with the array of filters. I later decided to change my filters into an object and approach things that way. This seemed to create a lot more work, but it was great practice for working with objects. Once again, this has taught me that there are many ways to do things when it comes to development!

### Continued development

Now that I understand how the sorting works, I'd love to go back and refactor. I prefer my idea of using an array of tags to sort the job posts.