import styled from "styled-components";

const HeaderStyle = styled.div`
   .dashboardheader {
      position: fixed;
      left: 70px;
      right: 0;
      background: #fff;
      z-index: 99;
      transition: 0.4s;
      @media (max-width: 767px) {
         left: 0;
      }
      .mainheader {
         display: flex;
         align-items: center;
         justify-content: space-between;
         border-bottom: 1px solid #efefef;
         padding: 0 30px;
         @media (max-width: 767px) {
            padding: 0 10px;
         }
         .navbar {
            .back {
               display: none;
               @media (max-width: 767px) {
                  display: block;
                  svg {
                     color: #21252987;
                  }
               }
            }
            .searchpage {
               position: relative;
               @media (max-width: 767px) {
                  display: none;
               }
               .searchicon {
                  position: absolute;
                  top: 12px;
                  left: 13px;
                  color: #878a99;
                  .search {
                     font-size: 18px;
                  }
               }
            }
            .searchfill {
               input {
                  padding: 10px 30px 10px 40px;
                  background: #f3f3f9;
                  color: #212529;
                  font-size: 14px;
                  border-radius: 5px;
                  font-family: "IBM Plex Sans Devanagari", sans-serif;
                  font-weight: 500;
               }
               fieldset {
                  border: 0;
               }
            }
         }
         .navbar2 {
            display: flex;
            align-items: center;
            .crop {
               @media (max-width: 767px) {
                  display: none;
               }
            }
            .addtocart {
               .badge {
                  span {
                     background: #58caea;
                  }
               }
            }
            .notification {
               .badge {
                  span {
                     background: #fa896b;
                  }
               }
            }
            .dark {
               @media (max-width: 767px) {
                  display: none;
               }
            }
            svg {
               color: #495057;
            }
            .flag {
               img {
                  width: 20px;
                  border-radius: 4px;
               }
            }
            button {
               @media (max-width: 425px) {
                  min-width: 10px;
               }
            }
            .profilemenu {
               button {
                  padding: 0;
               }
               .profile {
                  display: flex;
                  align-items: center;
                  background: #f3f3f9;
                  padding: 14px;
                  .founder {
                     text-align: start;
                     margin-left: 10px;
                     @media (max-width: 1199px) {
                        display: none;
                     }
                  }
                  h6 {
                     font-size: 15px;
                     color: #495057;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     font-weight: 600;
                     text-transform: capitalize;
                  }
                  h4 {
                     font-size: 12px;
                     color: #495057;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                     font-weight: 400;
                  }
               }
            }
         }
      }
   }
   .scroll-to-top {
      background-color: #fa896b;
      border-radius: 5px;
      width: 40px;
      height: 40px;
      bottom: 100px;
      &:hover {
         animation: fade-up 1.5s linear infinite;
      }
      svg {
         color: #fff;
         font-size: 17px;
      }
   }
   @keyframes fade-up {
      0% {
         opacity: 1;
         transform: translatey(0);
      }

      75% {
         opacity: 0;
         transform: translatey(-20px);
      }
   }
`;

export default HeaderStyle;
