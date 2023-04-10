import React, { Fragment } from 'react';
import '../src/assets/css/main.css';
import Header from './components/Header';
import Features from './components/Features';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {

  const headerNavList = [
    { title: "INTRODUCTION", link: "https://www.google.co.in/", dropDownlist: ["df", "fd"] },
    { title: "DROPDOWN", link: "https://www.facebook.com/", dropDownlist: [] },
    { title: "LEFT SIDEBAR", link: "https://www.google.co.in/", dropDownlist: [] },
    { title: "RIGHT SIDEBAR", link: "https://www.google.co.in/", dropDownlist: [] },
    { title: "NO SIDEBAR", link: "https://www.google.co.in/", dropDownlist: [] }
  ]

  const featuresList = {
    title: "GENTLEMEN, BEHOLD! THIS IS STRONGLY TYPED!",
    itemList: [{ title: "OKAY, SO WHAT IS THIS?", subtitle: "This is Strongly Typed, a free, fully responsive site template by HTML5 UP. Free for personal and commercial use under the CCA 3.0 license" },
    { title: "NICE! WHAT IS HTML5 UP?", subtitle: "HTML5 UP is a side project of AJ’s (= me). I started it as a way to both test my responsive tools and sharpen up my coding and design skills a bit" },
    { title: "WHAT'S THIS BUILT WITH?", subtitle: "Responsive Tools is a simple set of tools for building responsive sites and apps. All of my templates at HTML5 UP are built using these tools." }]
  }

  const bannerTitle = [{ title: "Use this space for profound thoughts Or an enormous ad. Whatever." }]



  return (
    <Fragment>
      <head>
        <title>Strongly Typed by HTML5 UP</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main.css" />
      </head>
      <body class="homepage is-preload">
        <div id="page-wrapper">
          <Header headerNavList={headerNavList} />

          <Features featuresList={featuresList} />

          <Banner bannerTitle={bannerTitle} />

          <Main />

          <Footer />
        </div>
      </body>
    </Fragment>
  );
}

export default App;
