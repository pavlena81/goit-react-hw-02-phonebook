
import PropTypes from 'prop-types';
import { ListContacts, ItemContacts } from './Contacts.styled';

export const FormContacts = ({ contacts, onDelete }) => {
  return (
    <ListContacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ItemContacts key={id}>
            {name}: {number}
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </ItemContacts>
        );
      })}
    </ListContacts>
  );
};



ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};