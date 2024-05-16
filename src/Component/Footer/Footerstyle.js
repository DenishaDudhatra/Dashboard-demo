import styled from "styled-components";

const Footerstyle = styled.div`
   .footer {
      padding: 20px 30px 20px 100px;
      @media (max-width: 767px) {
         padding: 10px 10px 10px 10px;
      }
      .copyright {
         display: flex;
         justify-content: space-between;
         h5 {
            color: #878a99;
            font-size: 14px;
            font-family: "IBM Plex Sans Devanagari", sans-serif;
            @media (max-width: 575px) {
               font-size: 12px;
            }
         }
      }
   }
`;
export default Footerstyle;
