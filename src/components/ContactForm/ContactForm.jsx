import React, { Component } from "react";
import PropTypes from "prop-types";

import { AddForm, FormField, FormData, FormBtn } from './ContactForm.styled';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }
    
    handleSubmit = e => {
        e.preventDefault();

        this.props.onAddContact(this.state);
        this.resetContactForm();
    };

    resetContactForm = () => {
        this.setState({
            name: '',
            number: '',
        })
    };

    handleChangeInput = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { name, number } = this.state;

        return (
            <>
                <AddForm onSubmit={this.handleSubmit}>
                    <FormField>
                        Name
                        <FormData
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleChangeInput}
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
                            onChange={this.handleChangeInput}
                        />
                    </FormField>

                    <FormBtn type="submit">Add contact</FormBtn>
                    
                </AddForm>
            </>
        );
    };
};

ContactForm.propTypes = {
    onInput: PropTypes.func.isRequired,
    onAddContact: PropTypes.func.isRequired,
}

export default ContactForm;