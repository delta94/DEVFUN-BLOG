export const CSS_RESET = `
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
   box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  img,
  hr {
   margin: 0;
   padding: 0;
  }
  
  ul, ol {
   list-style: none;
  }
  
  embed,
  iframe,
  img,
  object,
  video {
   display: block;
   max-width: 100%;
  }
  
  table {
   table-layout: fixed;
   width: 100%;
  }
  
  [hidden] {
   display: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
`;

export const CLASS_UTILITY = `
   /*-------------------------Display----------------------------*/
   .list-none {
    list-style-type: none;
  }
   .flex {
    display: flex;
  }
  .justify-between {
    justify-content: space-between;
  }
  .flex-1 {
    flex: 1 1 0%;
  }


  //----------------------boder-radius------------
  .r {
    border-radius: .25rem;
  }
  .r-40 { 
    border-radius: 40px;
  }
  .r-1\\/2 {
    border-radius: 50%;
  }
  .r-full {
    border-radius: 9999px;
  }
  .r-t-10 {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .r-lg {
    border-radius: .5rem;
  }
  .r-full {
    border-radius: 9999px;
  }
   /*----------------------Background----------------------------*/
  .bg-auto {
    background-size: auto;
  }
  .bg-cover	{
    background-size: cover;
  }
  .bg-contain {
    background-size: contain;
  }
  .bg-transparent {
    background-color: transparent;
  }
   /*-----------------------Box shadow---------------------------*/
  .shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .shadow-md {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  /*------------Text--------------------*/
  .uppercase	{
    text-transform: uppercase;
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .font-light {
    font-weight: 300;
  }

  .text-transparent {
    color: transparent;
  }

  .font-bold {
    font-weight: 700;
  }
  /*-------------------------Width-------------------------------*/
  .w-1\\/2 {
     width: 50%; 
  }
  .w-1\\/3 {
     width: 33.333333%; 
  }
  .w-2\\/3 {
     width: 66.6666667%; 
  }
  .w-1\\/4 {
     width: 25%; 
  }
  .w-3\\/4 {
     width: 75%; 
  }
  .w-1\\/5 {
     width: 25%; 
  }
  .w-2\\/5 {
     width: 40%; 
  }
  .w-3\\/5 {
     width: 60%; 
  }
  .w-4\\/5 {
     width: 80%; 
  }
  .w-1\\/6 {
    width: 16.666667%;
  }
  .w-2\\/6	{
    width: 33.333333%;
  }
  .w-full {
    width: 100%;
  }
  .w-screen {
    width: 100vh;
  }
  .w-auto {
    width: auto;
  }
  .no-underline {
    text-decoration: none;
  }
  /*----------------------------max-width-------------*/
  .max-w-xs	{
    max-width: 20rem;
  }
  .max-w-lg {
    max-width: 32rem;
  }
  .max-w-xl {
    max-width: 36rem;
  }
  .max-w-2xl {
    max-width: 42rem;
  }
  .max-w-3xl {
    max-width: 48rem;
  }
  .max-w-4xl	{
    max-width: 56rem;
  }
  .max-w-5xl {
    max-width: 64rem;
  }
  .max-w-6xl {
    max-width: 72rem;
  }
  .max-w-full {
    max-width: 100%;
  }
  .h-50 {
    width: 50px;
  }
  .h-screen {
    height: 100vh;
  }
  //-------------------Opacity--------------------------------*/
  .o-5 {
    opacity: .05;
  }
  .o-70 {
    opacity: .7;
  }
  .o-75	{
    opacity: .75;
  }
  .o-50	{
    opacity: .5;
  }
  .o-25	{
    opacity: .25;
  }
  /*----------Position---------------------*/
  .absolute {
    position: absolute;
  }
  .relative	{
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  .right-10 {
    right: 10px;
  }
  .text-16 {
    font-size: 16px;
  }
  //------------------------------Cursor-------------------
  .cursor-auto {
    cursor: auto;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-wait {
    cursor: wait;
  }
  .cursor-text {
    cursor: text;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-not-allowed	{
    cursor: not-allowed;
  }
  /*----------Flex Box--------------------*/
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .object-contain {
    object-fit: contain;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-1 {
    flex: 1 1 0%;
  }
  /*----------Flex Box--------------------*/
  .grid {
    display: grid;
  }
  /*----------Margin, Padding--------------------*/
  .m-p-0 {
    margin: 0;
    padding: 0;
  }
  .m-0 {
    margin: 0;
  }
  .m-1 {
    margin: 0.25rem;
  }
  .m-2	{
    margin: 0.5rem;
  }
  .m-3 {
    margin: 0.75rem;
  }
  .m-4 {
    margin: 1rem;
  }
  .m-5 {
    margin: 1.5rem;
  }
  .m-6 {
    margin: 1.5rem;
  }
  .m-8 {
    margin: 2rem;
  }
  .m-10	{
    margin: 2.5rem;
  }
  .m-12	{
    margin: 3rem;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-1 {
    margin-top: 0.25rem;
  }
  .mt-2	{
    margin-top: 0.5rem;
  }
  .mt-3 {
    margin-top: 0.75rem;
  }
  .mt-4 {
    margin-top: 1rem;
  }
  .mt-5 {
    margin-top: 1.5rem;
  }
  .mt-6 {
    margin-top: 1.5rem;
  }
  .mt-8 {
    margin-top: 2rem;
  }
  .mt-10	{
    margin-top: 2.5rem;
  }
  .mt-12	{
    margin-top: 3rem;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mr-1 {
    margin-right: 0.25rem;
  }
  .mr-2	{
    margin-right: 0.5rem;
  }
  .mr-3 {
    margin-right: 0.75rem;
  }
  .mr-4 {
    margin-right: 1rem;
  }
  .mr-5 {
    margin-right: 1.5rem;
  }
  .mr-6 {
    margin-right: 1.5rem;
  }
  .mr-8 {
    margin-right: 2rem;
  }
  .mr-10	{
    margin-right: 2.5rem;
  }
  .mr-12	{
    margin-right: 3rem;
  }
  .my-0 {
    margin-top: 0;
    margin-bottom: 0;
  }
  .my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .my-2	{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .my-3 {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .my-5 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .my-6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .my-10	{
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .my-12	{
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .mx-0 {
    margin-top: 0;
    margin-right: 0;
  }
  .mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .mx-2	{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .mx-3 {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
  .mx-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .mx-5 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .mx-8 {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .mx-10	{
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
  .mx-12	{
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .mx-auto {
    margin-right: auto;
    margin-left: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }

  .p-0 {
    padding: 0;
  }
  .p-1 {
    margin: 0.25rem;
  }
  .p-2	{
    padding: 0.5rem;
  }
  .p-3 {
    padding: 0.75rem;
  }
  .p-4 {
    padding: 1rem;
  }
  .p-5 {
    padding: 1.5rem;
  }
  .p-6 {
    padding: 1.5rem;
  }
  .pt-0 {
    padding-top: 0;
  }
  .pt-1 {
    padding-top: 0.25rem;
  }
  .pt-2	{
    padding-top: 0.5rem;
  }
  .pt-3 {
    padding-top: 0.75rem;
  }
  .pt-4 {
    padding-top: 1rem;
  }
  .pt-5 {
    padding-top: 1.5rem;
  }
  .pt-6 {
    padding-top: 1.5rem;
  }
  .pt-8 {
    padding-top: 2rem;
  }
  .pt-10	{
    padding-top: 2.5rem;
  }
  .pt-12	{
    margin-top: 3rem;
  }
  .pr-0 {
    padding-right: 0;
  }
  .pr-1 {
    padding-right: 0.25rem;
  }
  .pr-2	{
    padding-right: 0.5rem;
  }
  .pr-3 {
    padding-right: 0.75rem;
  }
  .pr-4 {
    padding-right: 1rem;
  }
  .pr-5 {
    padding-right: 1.5rem;
  }
  .pr-6 {
    padding-right: 1.5rem;
  }
  .pr-8 {
    padding-right: 2rem;
  }
  .pr-10	{
    padding-right: 2.5rem;
  }
  .pr-12	{
    margin-right: 3rem;
  }
  .pl-1 {
    padding-left: 0.25rem;
  }
  .pl-2	{
    padding-left: 0.5rem;
  }
  .pl-3 {
    padding-left: 0.75rem;
  }
  .pl-4 {
    padding-left: 1rem;
  }
  .pl-5 {
    padding-left: 1.5rem;
  }
  .pl-6 {
    padding-left: 1.5rem;
  }
  .pl-8 {
    padding-left: 2rem;
  }
  .pl-10	{
    padding-left: 2.5rem;
  }
  .pl-12	{
    padding-left: 3rem;
  }
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .px-2	{
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .px-5 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .px-10	{
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  .px-12	{
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .py-0 {
    padding-left: 0;
    padding-bottom: 0;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .py-2	{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .py-5 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .py-10	{
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  .py-12	{
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  /*--------------z-index---------------------------*/
  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  /*--------------------Line Height----------------------------*/
  .leading-none	{
    line-height: 1;
  }
  .leading-tight	{
    line-height: 1.25;
  }  
  .leading-snug	{
    line-height: 1.375;
  }
  .leading-normal	{
    line-height: 1.5;
  }
  .leading-relaxed	{
    line-height: 1.625;
  }
  .leading-loose	{
    line-height: 2;
  }
  /*----------------- Over flow ---------------------------*/
  .ofl-auto {
    overflow: auto;
  }
  .ofl-hidden {
    overflow: hidden;
  }
  .ofl-visible	{
    overflow: visible;
  }
  .ofl-scroll {
    overflow: scroll;
  }
  .ofl-y-scroll {
    overflow-y: scroll;
  }
  /*-------------------List Style Type------------------------*/
  .list-none {
    list-style-type: none;
  }
  .absolute {
    position: absolute;
  }
  @media (min-width: 576px) {
    .sm-px-50 {
      padding-left:50px !important;
      padding-right: 50px !important;
    }
    .sm-m-p-0 {
      margin: 0;
      padding: 0;
    }
    .sm-text-center{
      text-align: center;
    }
    .sm-text-left {
      text-align: left;
    }
    .sm-flex-row {
      flex-direction: row;
    }
    .sm-w-533 {
      width: 533px;
    }
    .sm-mt-16 {
      margin-top: 16px;
    }
    .sm-text-19 {
      font-size: 19px;
    }
  }
  @media (min-width: 768px)  { 
    .md-text-center{
      text-align: center;
    }
    .md-text-left {
      text-align: left;
    }
    .md-flex-row {
      flex-direction: row;
    }
  }
  @media (min-width: 992px)  { 
    .lg-text-center{
      text-align: center;
    }
    .lg-text-left {
      text-align: left;
    }
    .lg-flex-row {
      flex-direction: row;
    }
   }
  @media (min-width: 1200px) { 
    .xl-text-center{
      text-align: center;
    }
    .xl-text-left {
      text-align: left;
    }
  }
  /*-----------------------Hover---------------------------------*/
  .grow {
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    &:hover, &:focus {
      transform: scale(1.05);
    }
  }
  .dim {
    opacity: 1;
    transition: opacity .15s ease-in;
    &:hover, &:focus {
      opacity: .5;
      transition: opacity .15s ease-in;
    }
  }
`;
