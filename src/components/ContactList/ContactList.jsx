import PropTypes from 'prop-types'; 
import Contact from "components/Contact";
import {Contacts}  from './ContactList.styled.js'

const ContactList = ({ contacts, onDelete }) => {
    return (
        <>
            {contacts.length !== 0 &&
                <Contacts>
                    {contacts.map(({ id, name, number }) => (
                        <Contact key={id}
                            id={id}
                            name={name}
                            number={number}
                            onDelete={onDelete}
                        />))}
                </Contacts>}
    </>
)};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;
