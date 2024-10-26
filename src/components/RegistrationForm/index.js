import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    firstNameError: false,
    lastNameError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({lastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target
    this.setState({lastNameInput: value})
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  renderLastNameField = () => {
    const {lastNameInput, lastNameError} = this.state
    const className = lastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label htmlFor="lastName" className="input-label">
          LAST NAME
        </label>
        <input
          value={lastNameInput}
          placeholder="Last name"
          id="lastName"
          type="text"
          onBlur={this.onBlurLastName}
          onChange={this.onChangeLastName}
          className={className}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({firstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target
    this.setState({firstNameInput: value})
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  renderFirstNameField = () => {
    const {firstNameInput, firstNameError} = this.state
    const className = firstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <input
          value={firstNameInput}
          placeholder="First name"
          id="firstName"
          type="text"
          onBlur={this.onBlurFirsttName}
          onChange={this.onChangeFirstName}
          className={className}
        />
      </div>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const validFirstName = this.validateFirstName()
    const validLastName = this.validateLastName()

    if (validFirstName && validLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameError: !validFirstName,
        lastNameError: !validLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {firstNameError, lastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {firstNameError && <p className="error-msg">Required</p>}
        {this.renderLastNameField()}
        {lastNameError && <p className="error-msg">Required</p>}
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmissionSuccessPage = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p>Submitted Successfully</p>
      <button
        className="submit-btn"
        type="submit"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="head">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessPage()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
