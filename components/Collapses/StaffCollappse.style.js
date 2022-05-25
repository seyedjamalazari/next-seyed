import styled from "styled-components";
import { devicesMax, devicesMin } from "../../themes/variables";

export const StaffCollapseStyle = styled.div`
  color: ${(props) => props.color.toString()};
  .staffWrapper {
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
  }

  .ant-card-meta-title {
    color: ${(props) => props.color.toString()};

    .sc-kSzVC nmAcs {
      display: flex;
      flex-direction: column;
 
    }
  }
  @media ${devicesMax.mobileS} {
    .staffWrapper{
      justify-content:center;
      overflow:hidden

    }
  }
`;
