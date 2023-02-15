# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page coding challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw/hub). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle.

Your users should be able to: 

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![screenshot1](https://github.com/MSagdieva/FMChallenge---Loopstudios-landing-page/blob/master/Screenshots%20Loopstudios1.JPG)
![screenshot2](https://github.com/MSagdieva/FMChallenge---Loopstudios-landing-page/blob/master/Screenshots%20Loopstudios2.JPG)
![screenshot3](https://github.com/MSagdieva/FMChallenge---Loopstudios-landing-page/blob/master/Screenshots%20Loopstudios3.JPG)
![screenshot4](https://github.com/MSagdieva/FMChallenge---Loopstudios-landing-page/blob/master/Screenshots%20Loopstudios4.JPG)

### Links

- Solution URL: [GitHub Page](https://github.com/MSagdieva/FMChallenge---Loopstudios-landing-page)
- Live Site URL: [Live site URL](https://fm-challenge-loopstudios-landing-page.vercel.app)

## My process

### Built with

- [HTML5](https://html5.com/) - For layout
- [SCSS](https://scss.com/) - For styles
- [GULP](https://gulpjs.com) - For package 
assembly

### What I learned
Basics skills:
- HTML5 flexbox and grid layout
- SCSS
- CSS and JS hover animation
- CSS pseudo elements


```scss
// burger icon styles
&__burger-icon{
        display:none;
        @media (max-width: $md4+px){
        display: block;
        width:30px;
        height:20px;
        color:#fff;
        position:absolute;
        right: 20px;
        top:20px;
        span{
            display: block;
            width: 100%;
            height: 2px;
            background-color: #fff;
            position: absolute;
            top:40%;
            opacity:1;
            transition: opacity ease-in .1s;
        }
        &:before, &:after{
            position:absolute;
            content: '';
            width: 100%;
            height: 2px;
            background-color: #fff;
            left:0;
            transition: transform ease-in .3s;
        }
        &:before{
            top:0;

        }
        &:after{
            bottom:2px;
        }
    }
  }
```


```scss
// use of background change animation on hover
    .info-block.hover{
        .img-container{
        &:after{
            animation: changeBackground .3s forwards; 
        }
    }
}
```

### Useful resources
- [CSS reference book](https://cssreference.io/)
- [HTML reference book](https://htmlreference.io/)
- [FlexBox layout Cheatsheet](https://flexbox.help/)
- [Grid layout Cheatsheet](https://grid.layoutit.com/)
- [CSS Animation](https://learn.javascript.ru/css-animations)

## Author

- GitHub - [@MSagdieva](https://github.com/MSagdieva/)
- Frontend Mentor - [@MSagdieva](https://www.frontendmentor.io/profile/MSagdieva)
- Email - [sagdieva.mariana@gmail.com](https://mailto:sagdieva.mariana@gmail.com)
- Telegram - [@it_maris](https://t.me/@it_maris)
