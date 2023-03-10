import PropTypes from 'prop-types'

const ContactListItem = ({ name, number }) => (
  <li>
    {name}: {number}
    <button>Delete</button>
  </li>
);

export default ContactListItem;

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}