// Write your code here
import {Component} from 'react'
import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="appointment-ui-container">
          <div className="appointment-card-container">
            <form>
              <h1 className="main-heading">Add Appointment</h1>
              <label className="input-label" For="input">
                TITLE
              </label>
              <br />
              <input
                placeholder="Title"
                className="title-input"
                id="input"
                type="input"
              />
              <br />
              <label className="title-label" For="date">
                DATE
              </label>
              <br />
              <input className="input-date" id="date" type="Date" />
              <div className="btn-area">
                <button className="add-btn" type="button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-icon"
            />
           
          </div>
           <hr />
        </div>
        
      </div>
    )
  }
}

export default Appointments
