const getFilteredContacts = (contacts, filter) => {
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
        contact.name
            .toLowerCase()
            .includes(normalizeFilter));
};

export default getFilteredContacts;