import css from './ContactList.module.css';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem key={id} name={name} number={number} />
    ))}
  </ul>
);

export default ContactList;
