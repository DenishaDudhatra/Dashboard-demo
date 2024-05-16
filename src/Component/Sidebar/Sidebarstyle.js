import styled from "styled-components";

const Sidebarstyle = styled.div`
   .sidebar {
      background: #2e3230;
      width: 70px;
      position: fixed;
      height: 100vh;
      z-index: 999;
      transition: 0.2s;
      .widgets {
         span {
            display: none;
            &:hover {
               color: #fff;
            }
         }
      }
      .anyltics {
         margin-left: 20px !important;
      }
      &:hover {
         width: 250px;
         overflow-y: scroll;
         ::-webkit-scrollbar {
            width: 6px;
         }

         ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
         }

         ::-webkit-scrollbar-thumb {
            background: grey;
            border-radius: 10px;
         }
         .sidebaricon {
            svg {
               margin-right: 10px;
            }
         }
         .widgets {
            justify-content: flex-start !important;
            span {
               display: block !important;
            }
            svg {
               margin-right: 10px;
            }
         }
         h4 {
            display: block !important;
         }
         .more {
            display: none !important;
         }

         .menu {
            padding: 0 16px;
         }
         .accordian {
            display: block !important;
         }
         .sidebaricon {
            margin-bottom: 0 !important;
         }
         .velzone {
            justify-content: space-between !important;
            svg {
               display: block !important;
            }
            .circlelogo {
               display: none !important;
            }
            .logo {
               display: block !important;
            }
         }
      }
      h4 {
         padding: 0 20px;
         color: #a4b0bf;
         font-family: "IBM Plex Sans Devanagari", sans-serif;
         font-size: 12px;
         font-weight: 600;
         margin-bottom: 10px;
         padding-left: 0;
         display: none;
      }
      .navsidebar {
         padding: 28px 15px;
         @media (max-width: 767px) {
            padding: 8px 8px;
         }
         .velzone {
            display: flex;
            align-items: center;
            @media (max-width: 767px) {
               display: none;
            }
            svg {
               color: #a4b0bf;
               display: none;
            }
            .circlelogo {
               display: block;
               width: 25px;
               cursor: pointer;
               padding-left: 9px;
               @media (max-width: 767px) {
                  display: none;
               }
            }
            .logo {
               width: 100px;
               display: none;
               cursor: pointer;
            }
         }
      }
      .menu {
         padding: 0 10px;
         margin-bottom: 32px;
         &:last-child {
            margin-bottom: 0;
         }
         .sidemenu {
            .sidebaricon {
               display: flex;
               align-items: start;
               margin-bottom: 16px;
               justify-content: center;
               svg {
                  font-size: 20px;
                  color: #a4b0bf;
                  margin-top: 12px;
                  &:hover {
                     color: #fff;
                  }
               }
            }
         }
      }
      .menu {
         .space {
            margin: 10px 0;
         }
         .more {
            width: 100%;
            transform: rotate(90deg);
            color: #a4b0bf;
            justify-content: center;
            display: flex;
            margin-bottom: 10px;
         }

         .accordian {
            background: none;
            box-shadow: none;
            width: 100%;
            display: none;

            svg {
               font-size: 20px;
               margin-right: 10px;
               color: #a4b0bf;
            }
            .MuiAccordionDetails-root {
               padding: 0;
            }
            .dashboardmenu {
               min-height: auto;
               padding: 0;
               .MuiAccordionSummary-content {
                  margin: 0;
               }
               h6 {
                  display: flex;
                  align-items: center;
                  color: #a4b0bf;
                  &:hover {
                     color: #fff;
                  }
                  span {
                     font-size: 16px;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                  }
               }
            }
            ul {
               margin: 0;
               padding-left: 0px;
               margin-left: -25px;
               li {
                  list-style-type: none;
                  color: #a4b0bf;
                  font-family: "IBM Plex Sans Devanagari", sans-serif;
                  font-size: 14px;
                  line-height: 35px;
                  cursor: pointer;
                  &:hover {
                     color: #fff;
                  }
                  span {
                     margin-right: 14px;
                  }
                  .new {
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     color: #fff;
                     margin-right: 0;
                     background: #fa896b;
                     max-width: 10px;
                     font-weight: 600;
                     margin-left: 62px;
                     font-size: 12px;
                     border-radius: 4px;
                     padding: 1px 7px;
                  }
                  .new1 {
                     margin-left: 96px;
                  }
               }
            }
         }
         .datamenu {
            margin-bottom: 20px;
         }
         .widgets {
            padding-left: 0;
            color: #a4b0bf;
            display: flex;
            justify-content: center;
            li {
               list-style-type: none;
            }
            svg {
               font-size: 20px;
            }
         }
      }
   }
   .dashboardmenu {
      .MuiAccordionSummary-expandIconWrapper {
         display: none;
      }
   }
   .sidebar {
      &:hover {
         .dashboardmenu {
            .MuiAccordionSummary-expandIconWrapper {
               display: block;
               position: absolute;
               right: 0;
            }
         }
      }
   }
   .openMenu {
      width: 250px !important;
      overflow-y: scroll;
      ::-webkit-scrollbar {
         width: 6px;
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
      .widgets {
         span {
            display: none !important;
         }
      }
      h4 {
         display: block !important;
      }
      .more {
         display: none !important;
      }

      .menu {
         padding: 0 16px;
      }
      .accordian {
         display: block !important;
      }
      .sidebaricon {
         margin-bottom: 0 !important;
      }
      .velzone {
         justify-content: space-between !important;
         svg {
            display: block !important;
         }
         .circlelogo {
            display: none !important;
         }
         .logo {
            display: block !important;
         }
      }
   }
   .openMenu {
      .dashboardmenu {
         .MuiAccordionSummary-expandIconWrapper {
            display: block;
            position: absolute;
            right: 0;
         }
      }
   }

   .Mui-checked {
      span {
         border: 2px solid #a4b0bf !important;
         border-radius: 100% !important;
         height: 1px !important;
         width: 1px !important;
         top: 16px;
         left: 16px;
      }
   }
   .check {
      svg {
         color: #2e3230 !important;
         border: 2px solid #a4b0bf;
         border-radius: 100%;
         height: 15px;
         width: 15px;
      }
   }
   @media (max-width: 767px) {
      .sidebar-overlay {
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background-color: rgba(0, 0, 0, 0.4);
         transition: 0.5s;
         opacity: 0;
         visibility: hidden;
      }
      .active {
         opacity: 1;
         visibility: visible;
      }
   }
`;
export default Sidebarstyle;
