import PropTypes from "prop-types";
import { SectionTitle } from "./Section.styled";

const Section = ({ title, children }) => (
    <>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
    </>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default Section;