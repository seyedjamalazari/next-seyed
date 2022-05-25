import styled from "styled-components";
import { devices, devicesMax } from "../../themes/variables";

export const StaffCardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  .ant-card-bordered{
    height:60vh;
    
   margin-top:1rem;
   overflow:hidden;
  }

  .CardWrapper {
    display: flex;
  }

  .ant-card-cover {
   width:10rem!important

  }
  @media ${devicesMax.mobileS} {
    .CardWrapper {
      width: 100%;
      display: flex;
    }
    .ant-card-body{
/* padding:65px; */
position:absolute;
display:flex;

justify-content:center;

    }
  }
`;
