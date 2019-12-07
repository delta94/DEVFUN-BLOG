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
  
  ul {
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
  .w-full {
    width: 100%;
  }
  .w-335 {
    width: 335px;
  }
  .w-h-78 {
    width: 78px;
    height: 78px;
  }
  .rounded {
    border-radius: .25rem;
  }
  .rounded-t-10 {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .rounded-lg {
    border-radius: .5rem;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .mt-30 {
    margin-top: 30px;
  }
  .mt-45 {
    margin-top: 45px;
  }
  .my-45 {
    margin-top: 45px;
    margin-bottom: 45px;
  }
  /*-------------------------Background Color -------------------*/
  .bg-white {
    background-color: #fff;
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
  .text-16 {
    font-size: 16px;
  }
  .text-transparent {
    color: transparent;
  }
  .text-white {
    color: #fff;
  }
  .text-24 {
    font-size: 24px;
  }
  .font-bold {
    font-weight: 700;
  }
  .w-100 {
    width: 100px;
  }
  .w-341 {
    width: 341.74px;
  }
  .w-254 {
    width: 254px;
  }
  .w-auto {
    width: auto;
  }
  .no-underline {
    text-decoration: none;
  }
  .w-full {
    width: 100%;
  }
  .max-w-lg {
    max-width: 32rem;
  }
  .max-w-xl {
    max-width: 36rem;
  }
  .max-w-1340 {
    max-width: 1340px;
  }
  .h-50 {
    width: 50px;
  }
  .h-screen {
    height: 100vh;
  }
   /*----------Opacity---------------------*/
  .opacity-50 {
    opacity: .5;
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
  .text-title {
    font: normal bold 18px/22px 'Inter';
  }
  .text-small {
    font: normal normal 12px/15px 'Inter';
  }
  .text-small-bold {
    font: normal bold 12px/15px 'Inter';
  }
  .text-normal-bold {
    font: normal bold 20px/143.19% 'Inter';
  }
  .leading-19 {
    line-height: 19px;
  }
  .leading-29 {
    line-height: 29px;
  }
  .cursor-pointer {
    cursor: pointer;
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
  .m-9 {
    margin: 9px;
  }
  .m-0 {
    margin: 0;
  }
  .m-20 {
    margin: 20px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .mt-7 {
    margin-top: 7px;
  }
  .mt-9 {
    margin-top: 9px;
  }
  .mt-12 {
    margin-top: 12px;
  }
  .mt-13 {
    margin-top: 13px;
  }
  .mt-15 {
    margin-top: 15px;
  }
  .mt-32 {
    margin-top: 32px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .mt-42 {
    margin-top: 42px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .mt-16 {
    margin-top: 16px;
  }
  .ml-17 {
    margin-left: 17px;
  }
  .mx-20 {
    margin: 0 20px;
  }
  .mx-auto {
    margin-right: auto;
    margin-left: auto;
  }
  .mr-10 {
    margin-right: 10px;
  }
  .mr-20 {
    margin: 0 20px 0 0;
  }
  .mr-16 {
    margin-right: 16px;
  }

  .mb-10 {
    margin-bottom: 10px;
  }
  .mb-30 {
    margin-bottom: 30px;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .mb-32 {
    margin-bottom: 32px;
  }
  
  .p-0 {
    padding: 0;
  }
  .p-9 {
    padding: 9px;
  }
  .p-20 {
    padding: 20px;
  }
  .pr-15 {
    padding-right: 15px;
  }
  .pb-0 {
    padding-bottom: 0;
  }
  .py-10 {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .pb-225 {
    padding-bottom: 225px;
  }
  .pt-17 {
    padding-top: 17px;
  }
  .pt-20 {
    padding-top: 20px;
  }
  .px-20 {
    padding-left:20px;
    padding-right:20px;
  }
  .px-25 {
    padding-left:25px;
    padding-right:25px;
  }
  .px-15 {
    padding-left:15px;
    padding-right:15px;
  }
  .px-17 {
    padding-left:17px;
    padding-right:17px;
  }
  .px-30 {
    padding-left: 30px;
    padding-right: 30px;
  }
  .px-40 {
    padding-left: 40px;
    padding-right: 40px;
  }
  .px-50 {
    padding-left:50px;
    padding-right: 50px;
  }
  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .leading-normal {
    line-height: 1.5;
  }
  .leading-relaxed {
    line-height: 1.625;
  }
  .leading-loose {
    line-height: 2;
  }
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  .border-section {
    border: 1px solid #e2e9ee;
  }
  .border-section-bottom {
    border-bottom: 1px solid #e2e9ee;
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
`;
