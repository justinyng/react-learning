import PropTypes from 'prop-types';

const Welcome = (props) => <h1>Hello, {props.name}</h1>;

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Welcome;
