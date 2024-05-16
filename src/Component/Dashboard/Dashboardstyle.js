import styled from "styled-components";

const Dashboardstyle = styled.div`
   .dashboard {
      padding-top: 0px;
      padding-left: 100px;
      background-color: #f1f1f1;
      .setSidebar {
         display: block !important;
      }
      @media (max-width: 767px) {
         padding-left: 10px;
      }
      .bgcolor {
         padding: 20px 30px 0px 0px;
         @media (max-width: 575px) {
            padding: 20px 10px 0px 10px;
         }
         .product {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            @media (max-width: 900px) {
               display: block;
            }
            .anna {
               h5 {
                  font-size: 16px;
                  font-family: "IBM Plex Sans Devanagari", sans-serif;
                  color: #495057;
                  font-weight: 600;
               }
               h6 {
                  font-size: 14px;
                  color: #21252987;
                  margin-top: 6px;
                  font-family: "IBM Plex Sans Devanagari", sans-serif;
               }
            }
            .addproduct {
               display: flex;
               align-items: center;
               @media (max-width: 767px) {
                  display: block;
               }
               .chart1 {
                  display: flex;
                  align-items: center;
               }
               .add {
                  display: flex;
                  align-items: center;
                  margin-right: 20px;
                  button {
                     color: #6ada7d;
                     background: #6ada7d1a;
                     text-transform: capitalize;
                     &:hover {
                        background: #55d56b;
                        color: #fff;
                     }
                  }
                  .plus {
                     font-size: 13px;
                     margin-right: 10px;
                  }
               }
               .chart {
                  color: #58caea;
                  background: #13cbff26;
                  padding: 10px;
                  cursor: pointer;
               }
               .calender {
                  margin-right: 10px;
                  @media (max-width: 767px) {
                     .MuiFormControl-root {
                        width: 100%;
                        margin: 20px 0;
                     }
                  }
                  input {
                     background: #fff;
                     padding: 12px;
                     font-size: 14px;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                  }
                  fieldset {
                     border: none;
                  }
                  /* .MuiOutlinedInput-root {
                     &:focus {
                        outline: 0;
                        border-color: red;
                     }
                  } */
                  .MuiInputAdornment-root {
                     margin-left: 0;
                  }
                  button {
                     background: #7084c7;
                     border-radius: 0;
                     color: #fff;
                     padding: 11px;
                     svg {
                        font-size: 20px;
                     }
                  }
               }
            }
         }
         .customer {
            margin-bottom: 20px;
            .card {
               margin-right: 8px;
               background: #fff;
               padding: 10px 14px;
               transition: 0.3s;
               &:hover {
                  margin-top: -4px;
                  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
               }
               @keyframes mymove {
                  0% {
                     top: 15px;
                  }
                  100% {
                     top: 0px;
                  }
               }
               .totalearning {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  margin-bottom: 20px;
                  .downpercentage {
                     color: #fd896b;
                     display: flex;
                     align-items: center;
                     .call {
                        font-size: 14px;
                     }
                     p {
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                        font-size: 14px;
                     }
                  }
                  .downpercentage1 {
                     color: #21252987;
                     display: flex;
                     align-items: center;
                     .call {
                        font-size: 14px;
                     }
                     p {
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                        font-size: 14px;
                     }
                  }
                  h4 {
                     font-size: 15px;
                     color: #21252987;
                     margin-top: 6px;
                     font-weight: 600;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                  }

                  .percentage {
                     color: #6ada7d;
                     display: flex;
                     align-items: center;
                     .call {
                        font-size: 14px;
                     }
                     p {
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                        font-size: 14px;
                     }
                  }
               }
               .dolar {
                  h6 {
                     color: #495057;
                     font-size: 22px;
                     font-weight: 500;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                  }
               }
               .viewdata {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  a {
                     color: #21252987;
                     font-size: 14px;
                     font-weight: 600;
                     text-decoration: underline;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     cursor: pointer;
                  }
                  .dolar {
                     color: #6ada7d;
                     background: #6ada7d1a;
                     padding: 13px;
                  }
                  .dolar1 {
                     color: #5ac9ed;
                     background: #e1f5fb;
                     padding: 13px;
                  }
                  .dolar2 {
                     color: #f7b84b;
                     background: #f7b84b2e;
                     padding: 13px;
                  }
               }
            }
         }
         .chart {
            .revenue {
               background: #fff;
               height: 100%;
               .allrevenue {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  border-bottom: 1px solid #80808021;
                  padding: 20px 14px;
                  @media (max-width: 425px) {
                     padding: 20px 5px;
                  }
                  h4 {
                     font-size: 18px;
                     color: #495057;
                     font-weight: 500;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                  }
                  a {
                     text-decoration: none;
                     font-size: 12px;
                     margin: 0 4px;
                     color: #7084c7;
                     background: #7084c71f;
                     padding: 7px 10px;
                     border-radius: 4px;
                     cursor: pointer;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     @media (max-width: 425px) {
                        margin: 0 5px;
                     }
                     &:last-child {
                        margin-right: 0;
                        background-color: #5ea3cb1a;
                        color: #5ea3cb;
                        &:hover {
                           background: #5ea3cb;
                           color: #fff;
                        }
                     }
                     :hover {
                        background: #5c7ce7;
                        color: #fff;
                     }
                  }
               }
               .columnchart {
                  padding-right: 10px;
               }
               .refund {
                  border-top: 1px dashed #80808026;
                  border-bottom: 1px dashed #80808026;

                  background: #f3f6f92e;
                  .border {
                     border-right: 0 !important;
                     h1 {
                        color: #6ada7d !important;
                     }
                  }
                  .order {
                     text-align: center;
                     border-right: 1px dashed #80808026;
                     padding: 20px 14px;
                     @media (max-width: 900px) {
                        padding: 5px 14px;
                     }
                     h1 {
                        font-size: 19px;
                        color: #353d44;
                        font-weight: 600;
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                     }
                     h2 {
                        font-size: 14px;
                        color: #21252987;
                        font-weight: 500;
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                     }
                  }
               }
            }
            .google_maps {
               background: #fff;
               iframe {
                  width: 100%;
               }
               .search_location {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 20px 14px;
                  p {
                     color: #495057;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     font-size: 16px;
                     font-weight: 500;
                  }
                  button {
                     color: #5ac9ed;
                     background: #e1f5fb;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     font-size: 12px;
                     text-transform: capitalize;
                     padding: 4px 8px;
                  }
               }
            }
         }
      }
   }
   .dashboard-title {
      padding: 80px 30px 10px 100px;
      border-bottom: 2px solid #efefef;
      display: flex;
      justify-content: space-between;
      @media (max-width: 767px) {
         padding: 80px 10px 10px 10px;
      }
      h1 {
         font-size: 15px;
         font-weight: 700;
         color: #495057;
         font-family: "IBM Plex Sans Devanagari", sans-serif;
      }
      .title {
         display: flex;
         align-items: center;
      }
      h3 {
         font-size: 15px;
         font-family: "IBM Plex Sans Devanagari", sans-serif;
         &:last-child {
            font-weight: 500;
            color: #878a99;
         }
      }
      .right {
         font-size: 15px;
      }
   }
   .opendashSidebar {
      display: none;
   }
   .opendashboardsidebar {
      display: block;
      z-index: 9999;
   }
`;
export default Dashboardstyle;
