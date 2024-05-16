import styled from "styled-components";

const Viewstyle = styled.div`
   .purchase {
      background: #f1f1f1;
      padding: 20px 30px 0px 100px;

      @media (max-width: 767px) {
         padding: 20px 10px 10px 10px;
      }
      .sellingprod {
         background: #fff;
         .sortby {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 17px 20px;
            border-bottom: 1px solid #e0e0e0;
            .report {
               button {
                  padding: 0;
               }
            }
         }
         h1 {
            font-size: 18px;
            font-weight: 500;
            color: #353d44;
            font-family: "IBM Plex Sans Devanagari", sans-serif;
            @media (max-width: 425px) {
               font-size: 14px;
            }
         }
         h5 {
            font-size: 14px;
            display: flex;
            align-items: center;
            color: #000;
            font-weight: 500;
            font-family: "IBM Plex Sans Devanagari", sans-serif;
            @media (max-width: 425px) {
               font-size: 13px;
            }
            span {
               text-transform: capitalize;
               display: flex;
               align-items: center;
               color: #878a99;
               svg {
                  font-size: 15px;
               }
            }
         }
         .selling {
            button {
               padding: 0;
               &:hover {
                  background: none;
               }
            }
            .price {
               display: flex;
               align-items: center;
               justify-content: space-between;
            }
         }
      }
   }
   .productdetail {
      p {
         color: #495057;
         font-size: 14px;
         font-weight: 400;
         font-family: "IBM Plex Sans Devanagari", sans-serif;
      }
      span {
         color: #878a99;
         font-family: "IBM Plex Sans Devanagari", sans-serif;
      }
      .MuiPaper-elevation {
         border-radius: 0;
      }
      table {
         overflow-x: scroll;
         tr {
            padding: 14px;
            &:hover {
               background: #f3f6f9;
            }
            &:nth-child(2) {
               td {
                  &:nth-child(4) {
                     p {
                        color: #fa896b;
                        background-color: #fa896b1a;
                        font-weight: 600;
                        max-width: 70px;
                        font-size: 12px;
                        padding: 0 7px;
                        border-radius: 4px;
                     }
                  }
               }
            }
            &:nth-child(4) {
               td {
                  &:nth-child(4) {
                     p {
                        color: #fa896b;
                        background-color: #fa896b1a;
                        font-weight: 600;
                        max-width: 70px;
                        font-size: 12px;
                        padding: 0 7px;
                        border-radius: 4px;
                     }
                  }
               }
            }
            td {
               padding: 14px;
            }
         }
      }
      .showresult {
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding: 12px 20px;
         border-top: 2px solid #80808026;
         @media (max-width: 575px) {
            padding: 12px 12px;
            display: block;
         }
         p {
            color: #878a99;
            font-size: 14px;
         }
         .pagination {
            display: flex;
            align-items: center;
            @media (max-width: 575px) {
               justify-content: end;
            }
            button {
               border-radius: 6px;
               border: 2px solid #80808026;
               :focus {
                  color: #fff;
               }
            }
            nav {
               ul {
                  li {
                     &:first-child {
                        display: none;
                     }
                     &:last-child {
                        display: none;
                     }
                  }
               }
            }
            .arrow {
               color: #8080806b;
               border: 2px solid #80808026;
               border-radius: 6px;
               transform: rotate(180deg);
               margin-right: 10px;
            }
            .rotate {
               transform: rotate(0deg);
               margin-left: 10px;
               margin-right: 0;
            }
         }
      }
      .product {
         display: flex;
         align-items: center;
         img {
            width: 40px;
            background: #f3f6f9;
            padding: 5px 10px;
            margin-right: 10px;
         }
         p {
            font-size: 14px;
            font-family: "IBM Plex Sans Devanagari", sans-serif;
            font-weight: 500;
         }
         span {
            font-size: 15px;
            color: #21252987;
         }
      }
   }
   .sellingdeatil {
      p {
         color: #495057;
         font-size: 14px;
         font-weight: 600;
         font-family: "IBM Plex Sans Devanagari", sans-serif;
      }
      span {
         color: #878a99;
         font-family: "IBM Plex Sans Devanagari", sans-serif;
      }
      img {
         width: 30px;
         margin-right: 10px;
      }
      .product {
         display: flex;
         align-items: center;
      }
      table {
         overflow-x: scroll;
         tr {
            height: 82px;
            &:hover {
               background: #f3f6f9;
            }
         }
      }
      .order {
         display: flex;
         align-items: center;
         svg {
            color: #6ada7d;
            font-size: 20px;
            transform: rotatey(170deg);
            margin-left: 8px;
         }
      }
      .showresult {
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding: 12px 20px;
         border-top: 2px solid #80808026;
         @media (max-width: 575px) {
            padding: 12px 12px;
            display: block;
         }
         p {
            color: #878a99;
            font-size: 14px;
         }
         .pagination {
            display: flex;
            align-items: center;
            @media (max-width: 575px) {
               justify-content: end;
            }
            button {
               border-radius: 6px;
               border: 2px solid #80808026;
               :focus {
                  color: #fff;
               }
            }
            nav {
               ul {
                  li {
                     &:first-child {
                        display: none;
                     }
                     &:last-child {
                        display: none;
                     }
                  }
               }
            }
            .arrow {
               color: #8080806b;
               border: 2px solid #80808026;
               border-radius: 6px;
               transform: rotate(180deg);
               margin-right: 10px;
            }
            .rotate {
               transform: rotate(0deg);
               margin-left: 10px;
               margin-right: 0;
            }
         }
      }
   }
   .hello {
      padding-left: 100px;
   }
`;
export default Viewstyle;
