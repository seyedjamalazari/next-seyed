import { Card } from "antd";

import { StaffCollapseStyle } from "../Collapses/StaffCollappse.style";
import { StaffCardStyle } from "./StaffCardStyle";

const { Meta } = Card;

export default ({ staff }) => {
  return (
    <StaffCollapseStyle color={staff.color}>
      <StaffCardStyle>

     
          <div className="CardWrapper">
        <Card cover={<img alt={staff.name} src={staff.image} />}>
          <Meta title={staff.name} description={staff.description} />
        </Card></div>
       
        
      </StaffCardStyle>
    </StaffCollapseStyle>
  );
};
