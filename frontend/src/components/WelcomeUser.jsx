import PropTypes from 'prop-types'

function WelcomeUser(props) {
  return (
    <h1>Välkommen {props.userName}</h1>
  )
}

WelcomeUser.propTypes = {
  userName: PropTypes.string
}

export default WelcomeUser