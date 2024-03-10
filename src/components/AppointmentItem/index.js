// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleisStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleisStarred(id)
  }

  return (
    <li className="appointment-list">
      <div className="title-star-container">
        <p className="title">{title}</p>
        <button
          type="button"
          className="star-btn"
          data-testid="star"
          onClick={onClickStar}
        >
          <img className="star-img" src={starImgUrl} alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
