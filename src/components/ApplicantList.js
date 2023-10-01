import React, { Component } from "react";
import { List, Checkbox, Avatar } from "antd";
import "./list.css";
class ApplicantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      isSelectedAll: false,
    };
  }

  handleCheckboxChange = (item) => {
    const { selectedItems } = this.state;
    if (selectedItems.includes(item)) {
      this.setState({
        selectedItems: selectedItems.filter((selected) => selected !== item),
      });
    } else {
      this.setState({
        selectedItems: [...selectedItems, item],
      });
    }
  };
  handleSelectAll = () => {
    if (this.state.isSelectedAll) {
      this.setState({
        isSelectedAll: false,
        selectedItems: [],
      });
    } else {
      this.setState({
        isSelectedAll: true,
        selectedItems: this.props.data,
      });
    }
  };
  render() {
    const { selectedItems, isSelectedAll } = this.state;
    return (
      <section className="app-body-applicant-list">
        <div className="app-body-applicant-list-header">
          <div className="app-body-applicant-list-total">
            <Checkbox
              checked={isSelectedAll}
              onChange={() => this.handleSelectAll()}
              style={{
                color: "#1d4ed8",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              {this.props.data.length} Candidates
            </Checkbox>
          </div>
        </div>
        <List
          dataSource={this.props.data}
          renderItem={(item) => (
            <List.Item className="applicant">
              <Checkbox
                checked={selectedItems.includes(item)}
                onChange={() => this.handleCheckboxChange(item)}
              >
                <div className="applicant-details">
                  <Avatar
                    style={{
                      backgroundColor: "#EDF4FF",
                      verticalAlign: "middle",
                      color: "#D0E1FF",
                      height: "56px",
                      width: "56px",
                      fontSize: "20px",
                      lineHeight: "56px",
                    }}
                    size="large"
                  >
                    {item.first_name[0] + item.last_name[0]}
                  </Avatar>
                  <div className="applicant-info">
                    <div className="applicant-name">{`${item.first_name} ${item.last_name}`}</div>
                    <div className="applicant-place">{`${item.address.city}, ${item.address.country}`}</div>
                    <div className="applicant-degree">{`${item.education.degree} - ${item.education.institution} (${item.education.graduation_year})`}</div>
                    <div className="applicant-tags">
                      {item.tags.map((tag) => (
                        <span className="applicant-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="applicant-skills">
                      {item.skills.map((skill) => (
                        <span className="applicant-skill">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Checkbox>
            </List.Item>
          )}
        />
      </section>
    );
  }
}

export default ApplicantList;
