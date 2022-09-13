const getFilteredContacts = (contacts, filter) => {
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts
            .filter(({ name }) =>
                name
                .toLowerCase()
                .includes(normalizeFilter));
};

export default getFilteredContacts;