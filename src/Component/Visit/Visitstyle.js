import styled from "styled-components";

const Visitstyle = styled.div`
   .Visitshop {
      background: #f1f1f1;
      padding: 20px 30px 20px 100px;
      @media (max-width: 767px) {
         padding: 20px 10px 20px 10px;
      }
      .source {
         background: #fff;
         height: 100%;
         .piechart {
            width: 410px;
            margin: auto;
            padding: 40px 0;
            @media (max-width: 575px) {
               width: 300px;
            }
         }
         .store {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid #80808026;
            padding: 16px 20px;
            h1 {
               font-size: 16px;
               font-weight: 500;
               color: #353d44;
               font-family: "IBM Plex Sans Devanagari", sans-serif;
            }
            .reportmenu {
               h5 {
                  display: flex;
                  align-items: flex-start;
                  font-size: 14px;
                  color: #878a99;
                  font-family: "IBM Plex Sans Devanagari", sans-serif;
                  svg {
                     font-size: 14px;
                  }
               }
            }
         }
      }
      .Recentorder {
         background: #fff;
         .confirmorder {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px;
            p {
               color: #495057;
               font-weight: 500;
               font-family: "IBM Plex Sans Devanagari", sans-serif;
            }
            .reportgenrate {
               display: flex;
               justify-content: space-between;
               align-items: center;
               background: #58caea1a;
               color: #58caea;
               padding: 6px 10px;
               &:hover {
                  background: #58caea;
                  color: #fff;
               }
               svg {
                  font-size: 12px;
                  margin-right: 6px;
               }
               span {
                  font-size: 11px;
                  font-family: "IBM Plex Sans Devanagari", sans-serif;
               }
            }
         }
         .table {
            .recent_order {
               .table {
                  box-shadow: none;
               }
               .tablehead {
                  border-bottom: 1px solid #80808026;
                  border-top: 1px solid #80808026;
                  background: #f3f6f9;
                  th {
                     color: #878a99;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                  }
               }
               .tablebody {
                  tr {
                     td {
                        border-bottom: 0;
                        font-family: "IBM Plex Sans Devanagari", sans-serif;
                     }
                     th {
                        border-bottom: 0;
                     }
                     &:nth-child(odd) {
                        td {
                           &:nth-child(6) {
                              span {
                                 color: #6ada7d;
                                 background-color: #6ada7d1a;
                                 padding: 3px 5px;
                                 border-radius: 4px;
                                 font-size: 11px;
                              }
                           }
                        }
                     }
                     &:nth-child(2) {
                        td {
                           &:nth-child(6) {
                              span {
                                 color: #f7b84b;
                                 background-color: #f7b84b1a;
                                 padding: 3px 5px;
                                 border-radius: 4px;
                                 font-size: 11px;
                              }
                           }
                        }
                     }
                     &:nth-child(4) {
                        td {
                           &:nth-child(6) {
                              span {
                                 color: #fa896b;
                                 background-color: #fa896b1a;
                                 padding: 3px 5px;
                                 border-radius: 4px;
                                 font-size: 11px;
                              }
                           }
                        }
                     }
                  }
                  .userimage {
                     display: flex;
                     align-items: center;
                     img {
                        width: 35px;
                        border-radius: 100%;
                        margin-right: 8px;
                     }
                  }
                  .orderid {
                     color: #5ea3cb;
                     font-weight: 500;
                     font-family: "IBM Plex Sans Devanagari", sans-serif;
                  }
                  .totalamount {
                     color: #6ada7d;
                  }
                  .rating {
                     span {
                        color: #878a99;
                        font-size: 12px;
                     }
                  }
               }
            }
         }
      }
   }
`;
export default Visitstyle;
