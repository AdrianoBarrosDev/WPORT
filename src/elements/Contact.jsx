import PropTypes from "prop-types";
import styled from "styled-components";
import { ContactForm } from "../components/ContactForm.jsx";

const ContactDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 1400px) {
        width: 100%;
        margin-bottom: 100px;
        justify-content: center;
    }

    @media (max-width: 576px) {
        width: 100%;
    }

`;

export function Contact(props) {

    return (
        <ContactDiv id={props.id}>
            {/* Contact form component that allows user to send a messagge via email */}
            <ContactForm/>
        </ContactDiv>
    );
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
}