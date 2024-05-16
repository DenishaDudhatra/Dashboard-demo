import styled from "styled-components";

const Dashboardsidebarstyle = styled.div`
   .dasboardsidebar {
      .sidebar {
         width: 280px;
         position: absolute;
         right: 0;
         top: 109px;
         background: #fff;
         z-index: 1;
         @media (max-width: 1199px) {
            position: fixed;
            height: 100vh;
            top: 0;
            overflow-y: scroll;
            z-index: 999;
         }
         .sidebardashboard {
            h6 {
               color: #878a99;
               font-size: 14px;
               font-weight: 500;
               text-transform: uppercase;
               font-family: "IBM Plex Sans Devanagari", sans-serif;
            }
            .recentactivity {
               padding: 15px;
            }
            .category {
               padding: 0 16px;
               h6 {
                  margin-bottom: 14px;
               }
               ul {
                  padding-left: 0;
                  margin: 0;
                  li {
                     list-style-type: none;
                     line-height: 28px;
                     .accessories {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        color: #878a99;
                        font-size: 14px;
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                        p {
                           font-size: 15px;
                           font-family: "IBM Plex Sans Devanagari", sans-serif;
                        }
                     }
                     a {
                        color: #878a9b;
                        font-size: 14px;
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                        display: flex;
                        justify-content: center;
                        margin-top: 16px;
                     }
                  }
               }
            }
            .purshase {
               padding-bottom: 20px;
               .slick-slider {
                  height: 370px;
                  overflow-y: scroll;
                  /* width */
                  ::-webkit-scrollbar {
                     width: 4px;
                  }

                  /* Track */
                  ::-webkit-scrollbar-track {
                     box-shadow: inset 0 0 5px grey;
                     border-radius: 10px;
                  }

                  /* Handle */
                  ::-webkit-scrollbar-thumb {
                     background: grey;
                     border-radius: 10px;
                  }

                  /* Handle on hover */
                  ::-webkit-scrollbar-thumb:hover {
                     background: #b30000;
                  }
               }
               button {
                  display: none !important;
               }
               .slick-track {
                  height: auto !important;
                  //   top: 400px;
               }
               h1 {
                  color: #495057;
                  font-size: 14px;
                  font-family: "IBM Plex Sans Devanagari", sans-serif;
                  font-weight: 600;
                  margin-bottom: 7px;
                  max-width: 160px;
                  span {
                     color: #7084c7 !important;
                     font-size: 13px !important;
                  }
                  .tomorrow {
                     color: #5ea3cb !important;
                  }
               }
               .slick-list {
                  height: auto !important;
               }
               .firstactivity {
                  display: flex !important;
                  align-items: start;
                  justify-content: space-around;
                  margin-bottom: 10px;
                  h6 {
                     color: #878a99 !important;
                     font-size: 14px;
                     font-weight: 400;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     max-width: 200px;
                     text-transform: capitalize;
                     span {
                        color: #7084c7 !important;
                        font-size: 13px !important;
                        font-weight: 600;
                     }
                     .days {
                        color: #fa896b;
                     }
                     a {
                        color: #f7b84b;
                     }
                  }
                  span {
                     color: #878a99;
                     font-size: 12px;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                  }
                  svg {
                     color: #6ada7d;
                     background: #6ada7d1a;
                     padding: 6px;
                     font-size: 17px;
                     border-radius: 100%;
                  }
                  img {
                     width: 40px;
                     background: #f3f6f9;
                     padding: 4px 4px;
                     margin: 0 4px;
                  }
                  .tshirtimage {
                     display: flex;
                     align-items: start;
                     justify-content: space-between;
                     margin-bottom: 10px;
                     border: 1px dashed #e9ebec;
                     padding: 7px 3px 7px 3px;
                  }
                  .price {
                     margin-right: 25px;
                     margin-bottom: 14px;
                  }
                  .border {
                     border-left: 2px dashed #e9ebec;
                     border-width: 1px;
                     height: 80px;
                     padding-left: 0px;
                     display: flex;
                     transform: translate(25px, 10px);
                     z-index: -1;
                  }
                  .italic {
                     font-style: italic;
                  }
               }
            }
            .productreview {
               h1 {
                  color: #878a99;
                  font-size: 13px;
                  font-family: "IBM Plex Sans Devanagari", sans-serif;
                  font-weight: 500;
                  padding: 15px;
                  margin-top: 14px;
               }

               .clients {
                  height: 290px;
                  overflow-y: scroll;
                  /* width */
                  ::-webkit-scrollbar {
                     width: 4px;
                  }

                  /* Track */
                  ::-webkit-scrollbar-track {
                     box-shadow: inset 0 0 5px grey;
                     border-radius: 10px;
                  }

                  /* Handle */
                  ::-webkit-scrollbar-thumb {
                     background: grey;
                     border-radius: 10px;
                  }

                  /* Handle on hover */
                  ::-webkit-scrollbar-thumb:hover {
                     background: #b30000;
                  }
                  img {
                     width: 40px;
                  }
                  .template {
                     display: flex;
                     align-items: start;
                     justify-content: space-around;
                     border: 1px dashed #e9ebec;
                     padding: 20px 0;
                     margin: 20px 20px;
                     h1 {
                        padding: 0;
                        font-style: italic;
                        max-width: 140px;
                        font-size: 14px !important;
                        span {
                           font-style: normal;
                        }
                     }
                     svg {
                        color: #f7b84b;
                        font-size: 13px;
                        margin-top: 10px;
                     }
                     .zomentic {
                        text-align: right;
                     }
                  }
               }
            }
            .customer_review {
               .customerrating {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background: #f3f6f9;
                  padding: 10px 14px;
                  margin: 0 13px;
                  border-radius: 6px;
                  margin-bottom: 20px;
                  svg {
                     color: #f7b84b;
                     font-size: 20px;
                  }
                  h4 {
                     font-size: 15px;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     font-weight: 500;
                  }
               }
               .totalreview {
                  h4 {
                     color: #878a99;
                     font-size: 15px;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     font-weight: 400;
                     text-align: center;
                     margin-bottom: 16px;
                  }
                  .progrees {
                     display: flex;
                     align-items: center;
                     justify-content: space-between;
                     padding: 0 16px;
                     margin-bottom: 9px;
                     &:nth-child(2) {
                        .progreesbar {
                           span {
                              transform: translateX(-70%) !important;
                           }
                        }
                     }
                     &:nth-child(3) {
                        .progreesbar {
                           span {
                              background: #f7b84b;
                              transform: translateX(-85%) !important;
                           }
                        }
                     }
                     &:nth-child(4) {
                        .progreesbar {
                           span {
                              transform: translateX(-94%) !important;
                           }
                        }
                     }
                     &:nth-child(5) {
                        .progreesbar {
                           span {
                              background: #fa896b;
                              transform: translateX(-94%) !important;
                           }
                        }
                     }
                     h6 {
                        color: #495057;
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                        font-size: 13px;
                        text-transform: capitalize;
                        font-weight: 700;
                     }
                     .progreesbar {
                        width: 140px;
                        height: 6px;
                        span {
                           background-color: #6ada7d;
                           transform: translateX(-50%);
                        }
                     }
                     span {
                        color: #878a99;
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                        font-size: 15px;
                        font-weight: 400;
                     }
                  }
               }
               .invite {
                  background: #f3f6f9;
                  text-align: center;
                  padding: 16px;
                  border-radius: 7px;
                  margin: 26px;
                  margin-bottom: 60px;
                  h5 {
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     color: #495057;
                     font-size: 20px;
                     font-weight: 600;
                     margin-bottom: 10px;
                     margin-top: 10px;
                  }
                  p {
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     color: #878a9b !important;
                     font-size: 14px;
                     font-weight: 500;
                     max-width: 200px;
                     margin: auto;
                  }
                  .mail {
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     position: relative;
                     margin-top: 16px;
                     button {
                        background: #5ea3cb;
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                        text-transform: capitalize;
                        color: #fff;
                        border-radius: 27px;
                        padding-left: 30px;
                        padding-right: 16px;
                     }
                     svg {
                        font-size: 18px;
                        margin-bottom: 4px;
                        background: #6eacd0;
                        padding: 9px;
                        border-radius: 100%;
                        color: #fff;
                        position: absolute;
                        left: 29px;
                        z-index: 99;
                        top: 0px;
                     }
                  }
               }
            }
         }
      }
   }
`;
export default Dashboardsidebarstyle;
