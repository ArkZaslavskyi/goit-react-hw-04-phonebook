import PropTypes from 'prop-types'; 
import { ListItem, ContactName, ContactPhone, DeleteBtn } from './Contact.styled.js';

const Contact = ({ id, name, number, onDelete }) => (
    <ListItem>
        <ContactName>{name}</ContactName>
        <ContactPhone>{number}</ContactPhone>
        <DeleteBtn
            type="button"
            onClick={() => onDelete(id)}>Delete</DeleteBtn>
    </ListItem>
);

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Contact;
