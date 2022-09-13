import PropTypes from "prop-types";
import { FilterField, FilterData } from './Filter.styled.js';

const Filter = ({ filter, onInput }) => {

    return (
        <>
            <FilterField>
                Find contacts by name
                <FilterData
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={onInput}
                />
            </FilterField>
        </>
    )
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
};

export default Filter; 