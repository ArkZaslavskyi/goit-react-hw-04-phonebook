import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import Box from "components/Box";

// utils
import getFilteredContacts from "utils/getFilteredContacts";

// import initialContacts from 'contacts.json'; <--- get them from localStorage in componentDidMount()

import { PhonebookTitle, PhonebookSubtitle } from "./App.styled";

const App = () => {
  const [contacts, setContacts] = useState(() => 
    window.localStorage.getItem('contacts')
      ? JSON.parse(window.localStorage.getItem('contacts'))
      : []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(
      'contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`"${name}" is already in contacts.`)
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {    
    setContacts(prevContacts => prevContacts.filter(contact =>
        contact.id !== contactId));
  };

  // for Filter
  const handleInput = ({ target: { value } }) => {
      setFilter(value);
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <Box
      width={350} ml='auto' mr='auto' p='20px'
      border='1px solid' borderColor='gray'
    >

      <PhonebookTitle>Phonebook</PhonebookTitle>

      {/* Form component */}
      <ContactForm
        onAddContact={addContact}
      />

      <PhonebookSubtitle>Contacts</PhonebookSubtitle>

      {/* Filter component */}
      <Filter
        filter={filter}
        onInput={handleInput}
      />
      
      {/* Contacts list Component */}
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContact}
      />

    </Box>
  );
};

export default App;