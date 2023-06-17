import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

function ContactList({ filteredContacts, onDeleteContact}) {
  return (
    <ul className={css.contact_List}>
      {filteredContacts.length ? (filteredContacts.map((contact) => (
        <li className={css.contact_item} key={contact.id}>
          {contact.name} - {contact.number}
          <button className={css.contact_button} onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))
      ) : (
      <p className={css.contact__message}>No such contact with that name</p>
      )}
    </ul>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;