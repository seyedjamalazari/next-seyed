import { Col, Collapse, Row } from "antd";
import StaffCard from "../Cards/StaffCard";
import { StaffCardStyle } from "../Cards/StaffCardStyle";
import { StaffCollapseStyle } from "./StaffCollappse.style";

const staffs = [
  {
    name: "sofia-vergara",
    id:1,
    image: "/images/staffs/sofia-vergara.jpeg",
    description: "www.gmail.com",
    color: "red",
  },
  {
    name: "bill-burr",
    id:2,
    image: "/images/staffs/bill-burr.jpeg",
    description: "www.google.com",
    color: "blue",
  },
  {
    name: "joe-rogan",
    id:3,
    image: "/images/staffs/joe-rogan.jpeg",
    description: "www.yahoo.com",
    color: "green",
  },
];

const StaffCollapse = ({ children }) => {
  const { Panel } = Collapse;
  return (
    <>
      <StaffCollapseStyle color={""}>
        <Collapse>
          <Panel header="Staff" key="1">
            {children}

            <div className="staffWrapper">
             
              {staffs.map((staff) => (
                <StaffCard staff={staff} key={staff.id} />
              ))}
            </div>
          </Panel>
        </Collapse>
      </StaffCollapseStyle>
    </>
  );
};

export default StaffCollapse;
