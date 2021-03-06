import React, { Component } from "react";
import { connect } from "react-redux";
import "../Form/Form.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

class ReviewForm extends Component {
  //sets any input changes to state
  state = {
    isEditable: false,
    contact_first_name: "",
    contact_last_name: "",
    contact_phone: "",
    contact_email: "",
    company_name: "",
    company_website: "",
    company_street: "",
    company_city: "",
    company_state: "",
    company_zip: "",
    event_name: "",
    event_website: "",
    event_date: "",
    event_time: "",
    event_location_name: "",
    event_location_street: "",
    event_location_city: "",
    event_location_state: "",
    event_location_zip: "",
    event_type: "",
    event_description: "",
    event_first_time: false,
    fund_description: "",
    contribution_amount: "",
    contribution_submission: "",
    promotion: "",
    other_comment: "",
    user_id: this.props.reduxState.user.id,
    approved: false,
  };
  //load page with information on page load
  componentDidMount = () => {
    this.getForm();
  };
  //get information ready for page load
  getForm = () => {
    this.props.dispatch({
      type: "GET_FORM",
      id: this.props.reduxState.user.id,
    });
  };
  //changes state to new changes on each input
  handleChange = (event, typeOf) => {
    this.setState({
      [typeOf]: event.target.value,
    });
  };
  //sends new updated information to database
  updateForm = () => {
    this.props.dispatch({
      type: "UPDATE_FORM",
      payload: this.state,
      id: this.props.reduxState.review[0].id,
      user: { id: this.props.reduxState.user.id },
    });
  };
  //presets state to keep previous information whole allowing new changes
  edit = () => {
    this.props.dispatch({
      type: "TOGGLE_EDIT",
    });
    this.setState({
      contact_first_name: this.props.reduxState.review[0].contact_first_name,
      contact_last_name: this.props.reduxState.review[0].contact_last_name,
      contact_phone: this.props.reduxState.review[0].contact_phone,
      contact_email: this.props.reduxState.review[0].contact_email,
      company_name: this.props.reduxState.review[0].company_name,
      company_website: this.props.reduxState.review[0].company_website,
      company_street: this.props.reduxState.review[0].company_street,
      company_city: this.props.reduxState.review[0].company_city,
      company_state: this.props.reduxState.review[0].company_state,
      company_zip: this.props.reduxState.review[0].company_zip,
      event_name: this.props.reduxState.review[0].event_name,
      event_website: this.props.reduxState.review[0].event_website,
      event_date: this.props.reduxState.review[0].event_date,
      event_time: this.props.reduxState.review[0].event_time,
      event_location_name: this.props.reduxState.review[0].event_location_name,
      event_location_street: this.props.reduxState.review[0]
        .event_location_street,
      event_location_city: this.props.reduxState.review[0].event_location_city,
      event_location_state: this.props.reduxState.review[0]
        .event_location_state,
      event_location_zip: this.props.reduxState.review[0].event_location_zip,
      event_type: this.props.reduxState.review[0].event_type,
      event_description: this.props.reduxState.review[0].event_description,
      event_first_time: this.props.reduxState.review[0].event_first_time,
      fund_description: this.props.reduxState.review[0].fund_description,
      contribution_amount: this.props.reduxState.review[0].contribution_amount,
      contribution_submission: this.props.reduxState.review[0]
        .contribution_submission,
      promotion: this.props.reduxState.review[0].promotion,
      other_comment: this.props.reduxState.review[0].other_comment,
      user_id: this.props.reduxState.review[0].user_id,
      approved: this.props.reduxState.review[0].approved,
    });
  };
  //toggles state for editing access
  cancel = () => {
    this.props.dispatch({
      type: "TOGGLE_EDIT",
    });
  };
  //when clicked, user will be notified with success and pushed to home page
  goHome = () => {
    Swal.fire({
      title: "Thanks!",
      text: "The Hope Chest Team will be in touch.",
      icon: "success",
      timer: 3750,
      showCloseButton: true,
    });
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="ReviewForm">
        <h1 className="reviewHead1">Event Submission Review</h1>
        <div className="PHead">
          <center>
            <h3 className="reviewHead3"> Review Your Form </h3>
            <p>
              Please review your form to ensure that everything is correct. To
              make edits to the form, click on the Edit button at the bottom of
              the page to edit the desired form field if necessary. Once
              complete, click the Update button to save changes.
            </p>
          </center>
          <hr></hr>
        </div>
        {this.props.reduxState.newReducer.edit ? (
          <>
            {this.props.reduxState.review.map((intake) => (
              <center>
                <p>
                  Contact First Name:
                  <input
                    placeholder={intake.contact_first_name}
                    onChange={(event) =>
                      this.handleChange(event, "contact_first_name")
                    }
                  />
                </p>
                <p>
                  Contact First Name:
                  <input
                    placeholder={intake.contact_last_name}
                    onChange={(event) =>
                      this.handleChange(event, "contact_last_name")
                    }
                  />
                </p>
                <p>
                  Contact Phone:
                  <input
                    type="tel"
                    placeholder={intake.contact_phone}
                    onChange={(event) =>
                      this.handleChange(event, "contact_phone")
                    }
                  />
                </p>
                <p>
                  Contact Email:
                  <input
                    type="email"
                    placeholder={intake.contact_email}
                    onChange={(event) =>
                      this.handleChange(event, "contact_email")
                    }
                  />
                </p>
                <p>
                  Company Name:
                  <input
                    placeholder={intake.company_name}
                    onChange={(event) =>
                      this.handleChange(event, "company_name")
                    }
                  />
                </p>
                <p>
                  Company Website:
                  <input
                    placeholder={intake.company_website}
                    onChange={(event) =>
                      this.handleChange(event, "company_website")
                    }
                  />
                </p>
                <p>
                  Company Street:
                  <input
                    placeholder={intake.company_street}
                    onChange={(event) =>
                      this.handleChange(event, "company_street")
                    }
                  />
                </p>
                <p>
                  Company City:
                  <input
                    placeholder={intake.company_city}
                    onChange={(event) =>
                      this.handleChange(event, "company_city")
                    }
                  />
                </p>
                <p>
                  Company State:
                  <input
                    placeholder={intake.company_state}
                    onChange={(event) =>
                      this.handleChange(event, "company_state")
                    }
                  />
                </p>
                <p>
                  Company Zip Code:
                  <input
                    type="number"
                    placeholder={intake.company_zip}
                    onChange={(event) =>
                      this.handleChange(event, "company_zip")
                    }
                  />
                </p>
                <p>
                  Event Name:
                  <input
                    placeholder={intake.event_name}
                    onChange={(event) => this.handleChange(event, "event_name")}
                  />
                </p>
                <p>
                  Event Website:
                  <input
                    type="url"
                    placeholder={intake.event_website}
                    onChange={(event) =>
                      this.handleChange(event, "event_website")
                    }
                  />
                </p>
                <p>
                  Event Date:
                  <input
                    type="date"
                    placeholder={intake.event_date}
                    onChange={(event) => this.handleChange(event, "event_date")}
                  />
                </p>
                <p>
                  Event Time:
                  <input
                    placeholder={intake.event_time}
                    onChange={(event) => this.handleChange(event, "event_time")}
                  />
                </p>
                <p>
                  Event Location Name:
                  <input
                    placeholder={intake.event_location_name}
                    onChange={(event) =>
                      this.handleChange(event, "event_location_name")
                    }
                  />
                </p>
                <p>
                  Event Location Street:
                  <input
                    placeholder={intake.event_location_street}
                    onChange={(event) =>
                      this.handleChange(event, "event_location_street")
                    }
                  />
                </p>
                <p>
                  Event Location City:
                  <input
                    placeholder={intake.event_location_city}
                    onChange={(event) =>
                      this.handleChange(event, "event_location_city")
                    }
                  />
                </p>
                <p>
                  Event Location State:
                  <input
                    placeholder={intake.event_location_state}
                    onChange={(event) =>
                      this.handleChange(event, "event_location_state")
                    }
                  />
                </p>
                <p>
                  Event Location Zip Code:
                  <input
                    type="number"
                    placeholder={intake.event_location_zip}
                    onChange={(event) =>
                      this.handleChange(event, "event_location_zip")
                    }
                  />
                </p>
                <p>
                  Event Type:{" "}
                  <select
                    id="Event Type"
                    name="Event Type"
                    onChange={(event) => this.handleChange(event, "event_type")}
                  >
                    <option id="Event Type">Event Type</option>
                    <option id="Shopping Night">Shopping Night</option>
                    <option id="Sport/Pink Out Nights">
                      Sport/Pink Out Nights
                    </option>
                    <option id="Gas and Auto Incentive">
                      Gas and Auto Incentive
                    </option>
                    <option id="Taproom Night">Taproom Night</option>
                    <option id="Grocery Promotion">Grocery Promotion</option>
                    <option id="Birthday Event">Birthday Event</option>
                    <option id="Bakery and Food Promotion">
                      Bakery and Food Promotion
                    </option>
                    <option id="Floral Promotion">Floral Promotion</option>
                    <option id="Other">Other</option>
                  </select>
                  <br />
                  {this.state.eventType === "Other" ? (
                    <>
                      <label>
                        Other Event Type:
                        <input
                          type="text"
                          placeholder="Other"
                          onChange={(event) =>
                            this.handleChange(event, "Other")
                          }
                        />
                      </label>
                    </>
                  ) : (
                    <></>
                  )}
                </p>
                <p>
                  Event Description:
                  <input
                    placeholder={intake.event_description}
                    onChange={(event) =>
                      this.handleChange(event, "event_description")
                    }
                  />
                </p>
                <p>
                  First Time Event:{" "}
                  <select
                    onChange={(event) =>
                      this.handleChange(event, "event_first_time")
                    }
                  >
                    <option id="Is this a First Time event?">
                      Is this a First Time event?
                    </option>
                    <option id="true" value="true">
                      Yes
                    </option>
                    <option id="false" value="false">
                      No
                    </option>
                  </select>
                </p>
                <p>
                  Fund Collection Method:
                  <input
                    placeholder={intake.funds_description}
                    onChange={(event) =>
                      this.handleChange(event, "funds_description")
                    }
                  />
                </p>
                <p>
                  Contribution Amount:
                  <input
                    type="number"
                    step="0.01"
                    min=".01"
                    placeholder={intake.contribution_amount}
                    onChange={(event) =>
                      this.handleChange(event, "contribution_amount")
                    }
                  />
                </p>
                <p>
                  Contribution Submission Method:{" "}
                  <select
                    onChange={(event) =>
                      this.handleChange(event, "contribution_submission")
                    }
                  >
                    <option value="0">Please select method</option>
                    <option value="Electronic payment">
                      Electronic payment
                    </option>
                    <option value="Check">Check</option>
                    <option value="Cash">Cash</option>
                  </select>
                </p>
                <p>
                  Promotion:
                  <input
                    placeholder={intake.promotion}
                    onChange={(event) => this.handleChange(event, "promotion")}
                  />
                </p>
                <p>
                  Other Comments:
                  <input
                    placeholder={intake.other_comment}
                    onChange={(event) =>
                      this.handleChange(event, "other_comment")
                    }
                  />
                </p>
              </center>
            ))}
          </>
        ) : (
          <>
            {this.props.reduxState.review.map((intake) => (
              <center>
                <p>Contact First Name: {intake.contact_first_name}</p>
                <p>Contact First Name: {intake.contact_last_name}</p>
                <p>Contact Phone: {intake.contact_phone}</p>
                <p>Contact Email: {intake.contact_email}</p>
                <p>Company Name: {intake.company_name}</p>
                <p>Company Website: {intake.company_website}</p>
                <p>Company Street: {intake.company_street}</p>
                <p>Company City: {intake.company_city}</p>
                <p>Company State: {intake.company_state}</p>
                <p>Company Zip Code: {intake.company_zip}</p>

                <p>Event Name: {intake.event_name}</p>
                <p>Event Website: {intake.event_website}</p>
                <p>Event Date: {intake.event_date}</p>
                <p>Event Time: {intake.event_time}</p>
                <p>Event Location Name: {intake.event_location_name}</p>
                <p>Event Location Street: {intake.event_location_street}</p>
                <p>Event Location City: {intake.event_location_city}</p>
                <p>Event Location State:{intake.event_location_state}</p>
                <p>Event Location Zip Code:{intake.event_location_zip}</p>
                <p>Event Type:{intake.event_type}</p>
                <p>Event Description: {intake.event_description}</p>
                <p>First Time Event:{intake.event_first_time}</p>

                <p>Fund Collection Method: {intake.funds_description}</p>
                <p>Contribution Amount: {intake.contribution_amount}</p>
                <p>
                  Contribution Submission Method{intake.contribution_submission}
                </p>
                <p>Promotion: {intake.promotion}</p>
                <p>Other Comments: {intake.other_comment}</p>
              </center>
            ))}
          </>
        )}
        <center>
          {this.props.reduxState.newReducer.edit ? (
            <>
              <button className="back" onClick={() => this.cancel()}>
                Cancel
              </button>
              <button className="updateBtn" onClick={() => this.updateForm()}>
                Update
              </button>
            </>
          ) : (
            <>
              <button className="back" onClick={() => this.edit()}>
                Edit
              </button>
              <button className="submit" onClick={() => this.goHome()}>
                Submit
              </button>
            </>
          )}
        </center>
      </div>
    );
  }
}
//connects to redux store
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(ReviewForm);
