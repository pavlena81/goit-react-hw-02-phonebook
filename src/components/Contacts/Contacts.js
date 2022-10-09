 import PropTypes from 'prop-types';

import { ListContacts, ItemContacts, Btn } from './Contacts.styled';

export const FormContacts = ({ contacts, onDelete }) => {
  console.log(contacts)
  return (
    < ListContacts >
    
      {contacts.map(({ id, name, number }) => {
        
        return (
          <ItemContacts key={id}>
            {name}: {number}
            <Btn type="button" onClick={() => onDelete(id)}>
              Delete
            </Btn>
          </ItemContacts>
        );
      })}
    </ListContacts>
  );
};



FormContacts.propTypes = {
     contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      onDelete: PropTypes.number.isRequired,
    })
  ).isRequired     
};