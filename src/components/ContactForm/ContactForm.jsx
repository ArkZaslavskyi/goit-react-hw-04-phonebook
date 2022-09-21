import React, { useState } from "react";
import PropTypes from "prop-types";

import { AddForm, FormField, FormData, FormBtn } from './ContactForm.styled';

const ContactForm = (onAddContact) => {
    const[name, setName] = useState('');
    const[number, setNumber] = useState('');

    const resetContactForm = () => {
        setName('');
        setNumber('');
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        onAddContact({ name, number });
        resetContactForm();
    };

    const handleChangeInput = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    return (
        <>
            <AddForm onSubmit={handleSubmit}>
                <FormField>
                    Name
                    <FormData
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChangeInput}
                    />
                </FormField>

                <FormField>
                    Number
                    <FormData
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChangeInput}
                    />
                </FormField>

                <FormBtn type="submit">Add contact</FormBtn>
                
            </AddForm>
        </>
    );
};
    
// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     };
    
//     resetContactForm = () => {
//         this.setState({
//             name: '',
//             number: '',
//         })
//     };
    
//     handleSubmit = e => {
//         e.preventDefault();

//         this.props.onAddContact(this.state);
//         this.resetContactForm();
//     };

    
//     handleChangeInput = ({ target: { name, value } }) => {
//         this.setState({
//             [name]: value,
//         });
//     };

//     render() {
//         const { name, number } = this.state;

//         return (
//             <>
//                 <AddForm onSubmit={this.handleSubmit}>
//                     <FormField>
//                         Name
//                         <FormData
//                             type="text"
//                             name="name"
//                             value={name}
//                             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                             required
//                             onChange={this.handleChangeInput}
//                         />
//                     </FormField>

//                     <FormField>
//                         Number
//                         <FormData
//                             type="tel"
//                             name="number"
//                             value={number}
//                             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                             required
//                             onChange={this.handleChangeInput}
//                         />
//                     </FormField>

//                     <FormBtn type="submit">Add contact</FormBtn>
                    
//                 </AddForm>
//             </>
//         );
//     };
// };

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
}

export default ContactForm;