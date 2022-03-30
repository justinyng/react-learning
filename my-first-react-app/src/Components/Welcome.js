import PropTypes from 'prop-types';

const Welcome = ({ name }) => <h1>Hello, {name}</h1>;

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

Welcome.defaultProps = {
  name: "my default name"
}

export default Welcome;
