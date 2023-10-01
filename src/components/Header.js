import React from "react";
import { Dropdown, Select } from "antd";
import { ReactComponent as Tag } from "./../assets/ic_tag.svg";
import { ReactComponent as UserClose } from "./../assets/ic_userClose.svg";
import { ReactComponent as UserCheck } from "./../assets/ic_userCheck.svg";
import { ReactComponent as UserVoice } from "./../assets/ic_userVoice.svg";
import { ReactComponent as Mail } from "./../assets/ic_mail.svg";
import { ApplicationStatus } from "../data/application_status";
import "./styles.css";

const handleButtonClick = (e) => {
  console.log(e);
};
const handleMenuClick = (e) => {
  console.log("click", e);
};
const items = [
  {
    label: "Move to  Video Interview I",
    key: "1",
  },
  {
    label: "Move to Video Interview II",
    key: "2",
  },
  {
    label: "Move to Video Interview III",
    key: "3",
  },
  {
    label: "ShortList",
    key: "4",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
function Header(props) {
  return (
    <section className="app-header">
      <div className="app-header-program">
        <div className="app-header-program-name">London Internship Program</div>
        <div className="app-header-program-place">London</div>
      </div>
      <div className="app-header-dropdown">
        <Select
          defaultValue="Opportunity Browsing"
          onChange={props.handleChange}
          options={ApplicationStatus}
          value={props.application_status}
          className="app-header-dropdown-value"
        />
      </div>
      <div className="app-header-actions">
        <div className="app-header-icon">
          <Tag />
        </div>
        <div className="app-header-icon">
          <UserClose />
        </div>
        <div className="app-header-icon">
          <UserCheck />
        </div>
        <div className="app-header-icon">
          <UserVoice />
        </div>
        <div className="app-header-icon">
          <Mail />
        </div>
      </div>
      <Dropdown.Button
        menu={menuProps}
        onClick={handleButtonClick}
        className="app-header-action-dropdown"
      >
        Move to Video Interview I
      </Dropdown.Button>
    </section>
  );
}
export default Header;
