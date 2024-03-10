import {Component} from 'react'
import './index.css'
import {format} from 'date-fns'
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentList: [],
    isFilterd: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const formatdate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''
    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: formatdate,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  toggleisStarred = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  renderAppointmentList = () => {
    const getFilterdAppointmentsList = this.getFilterdAppointmentsList()
    return getFilterdAppointmentsList.map(eachAppointment => (
      <AppointmentItem
        key={eachAppointment.id}
        appointmentDetails={eachAppointment}
        toggleisStarred={this.toggleisStarred}
      />
    ))
  }

  onFilter = () => {
    const {isFilterd} = this.state

    this.setState({isFilterd: !isFilterd})
  }

  getFilterdAppointmentsList = () => {
    const {appointmentList, isFilterd} = this.state
    if (isFilterd) {
      return appointmentList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return appointmentList
  }

  render() {
    const {titleInput, dateInput, isFilterd} = this.state

    const filteredStarredBtn = isFilterd
      ? 'filter-active-bg'
      : 'filter-inactive-bg'

    return (
      <div className="bg-container">
        <div className="appointment-ui-container">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="appointment-card-container">
            <form onSubmit={this.onAddAppointment}>
              <label className="input-label" htmlFor="input">
                TITLE
              </label>
              <br />
              <input
                placeholder="Title"
                className="title-input"
                id="input"
                type="text"
                value={titleInput}
                onChange={this.onChangeTitleInput}
              />
              <br />
              <label className="title-label" htmlFor="date">
                DATE
              </label>
              <br />
              <input
                value={dateInput}
                className="input-date"
                id="date"
                type="date"
                placeholder="dd/mm/yyyy"
                onChange={this.onChangeDateInput}
              />
              <div className="btn-area">
                <button className="add-btn" data-testid="star" type="submit">
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
          <hr className="horizonal-line" />
          <div className="header-filter-container">
            <h1 className="appointment-heading">Appointments</h1>
            <button
              className={`starred-btn ${filteredStarredBtn}`}
              onClick={this.onFilter}
              type="button"
            >
              Starred
            </button>
          </div>
          <ul className="appointment-list">{this.renderAppointmentList()}</ul>
        </div>
      </div>
    )
  }
}

export default Appointments

