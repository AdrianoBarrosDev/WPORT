import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import styled from "styled-components";

/* Box to Contact Informations */
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: start;
    min-width: 520px;
    padding: 50px 60px 42px 60px;
    font-weight: bold;
    background-color: #1E1E2B;
    border-radius: 20px;
    overflow: hidden;
    margin-left: 1vw;

    .title {
        font-size: 50px;
        font-weight: bold;
        font-family: "Raleway", serif;
        margin-bottom: 30px;
    }
    p {
        font-family: "Poppins", serif;
        font-size: 25px;
        font-weight: bold;
    }
    h2 {
        margin-left: -2px;
    }
    h3 {
        font-size: 25px;
    }

    label {
        margin-left: 10px;
        font-size: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        width: 100%;
    }
    input,
    textarea {
        width: 100%;
        height: 44px;
        background-color: #292938;
        border: none;
        border-radius: 10px;
        margin: 12px 0px 25px 0px;
        padding: 10px;
        color: #9696A6;
        font-weight: bold;
    }
    input {
        height: 44px;
    }
    textarea {
        height: 127px;
        resize: none;
    }
    input::placeholder,
    textarea::placeholder {
        color: rgb(150, 150, 166, 0.2);
        vertical-align: top;
        font-weight: 400;
    }
    input:focus,
    textarea:focus {
        outline: 3px solid #696BB3;
    }

    .waveColor {
        background: linear-gradient(90deg, #2D2E4D, #2D2E4D, #FFFFFF, #2D2E4D, #2D2E4D); /* Color gradient */
        background-size: 200% 100%; /* Adjust the size of the gradient */
        color: transparent;
        background-clip: text;
        animation: wave 4s linear infinite; /* Apply the wave animation */
    }

    @keyframes wave {
        0% {
            background-position: -100%;
        }
        100% {
            background-position: 100%;
        }
    }
    
    @media (max-width: 576px) {
        padding-inline: 30px;
        width: 100%;
        height: auto;
        min-width: 0;
        padding: 50px 20px 42px 20px;
    }

`;

/* Submit Button */
const SubmitButton = styled.button`
    height: 45px;
    min-width: 150px;
    color: white;
    font-family: "Raleway", serif;
    font-weight: bold;
    font-size: 18px;
    background-color: #6A3EF2;
    border: none;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    transition: border 0.2s ease;
    align-self: center;

    img {
        width: 18px;
        height: 18px;
    }

    &::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #2D2E4D, #696BB3);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
        border-radius: 5px;
    }

    &:hover::before,
    &:focus::before {
        transform: scaleX(1);
    }
`;


const Line = styled.div`
    width: 40%;
    height: 1px;
    background-color: #D4CFFF;
`;


const WhatsappButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 40px;
    background-color: #13131E;
    color: #C4C4C4;
    font-family: "Raleway";
    font-size: 15px;
    border: none;
    border-radius: 30px;
    align-self: center;
    position: relative;
    transition: 0.35s ease;
    overflow: hidden;

    &:hover {
        padding-right: 40px;
        color: white;
        background-color: #64A664;
    }
    
    .whatsappLogo {
        position: absolute;
        width: 24px;
        left: -50px;
        transition: 0.35s ease;
    }

    &:hover .whatsappLogo {
        left: 10px;
    }

    .container {
        position: absolute;
        left: -100px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: 0.35s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f1f4f7;
        opacity: 0;
        background-color: #64A664;
    }

    &:hover .container {
        left: calc(100% - 55px);
        color: white;
        opacity: 1;
    }

`;


export function ContactForm() {

    // Reference for the form element to be used in the component
    const formRef = useRef();

    // State to manage the loading status (e.g., while the form is being submitted)
    const [loading, setLoading] = useState(false);

    // State to store the form data (name, phone, and message)
    const [form, setForm] = useState({
        name: '',
        phone: '',
        message: '',
    });

    // Handler for form input changes
    // Updates the corresponding field in the form state when a user types in an input
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prevForm) => ({
            ...prevForm, // Preserve the previous form state
            [name]: value, // Update the field that changed
        }));
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior (page reload)
        setLoading(true); // Set loading to true while the form is being processed

        let hasErrors = false; // Flag to track if there are any validation errors

        // Validate the form fields and show an alert if there are any errors
        if(form.name.trim() === "") {
            alert("O campo nome não pode estar vazio!"); // Show an alert if the name is empty
            hasErrors = true;
        } else if(form.phone.trim() === "") {
            alert("O telefone deve ser válido!"); // Show an alert if the phone is empty
            hasErrors = true;
        } else if(form.message.trim() === "") {
            alert("Escreva o assunto na mensagem!"); // Show an alert if the message is empty
            hasErrors = true;
        }

        // If there are validation errors, stop and hide loading spinner
        if(hasErrors) {
            setLoading(false);
            return; // Exit the function to prevent further action
        }

        // If no errors, send the form data via email using emailjs service
        emailjs.send(
            import.meta.env.VITE_SERVICE,
            import.meta.env.VITE_TEMPLATE,
            {
                from_name: form.name, // The sender's name
                from_phone: form.phone, // The sender's phone
                message: form.message, // The message content
            },
            import.meta.env.VITE_KEY
        )
        .then(() => {
            setLoading(false); // Hide loading spinner after successful email sending
            alert("Obrigado. Entrarei em contato com você o mais rápido possível."); // Show success message

            // Reset the form to empty values
            setForm({
                name: '',
                phone: '',
                message: '',
            });
        }, (error) => {
            setLoading(false); // Hide loading spinner if an error occurs
            console.log(error); // Log the error to the console
            alert("Algo deu errado."); // Show error message
        });
    }

    const urlBasica = import.meta.env.VITE_API_URL;

    return (
        <InfoBox
            
            // Animations
            data-aos="fade-right" 
            data-aos-duration="800"
        >

            <h3>Entre em contato</h3>
            <h2 className="title">Contato</h2>

            {/* Form to send a message via email using emailjs */}
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                autoComplete="on"
            >
                <label htmlFor="name">Nome</label>
                <input 
                    type="text"
                    id="name"
                    name="name" 
                    value={form.name} 
                    placeholder="Qual o seu nome?"
                    onChange={handleChange}
                    autoComplete="name"
                />

                <label htmlFor="phone">Telefone</label>
                <input 
                    type="text"
                    id="phone"
                    name="phone" 
                    value={form.phone} 
                    placeholder="Qual o seu telefone?" 
                    onChange={handleChange}
                    autoComplete="tel"
                />

                <label htmlFor="message">Mensagem</label>
                <textarea 
                    type="text"
                    id="message" 
                    name="message" 
                    value={form.message} 
                    placeholder="O que você quer dizer?" 
                    onChange={handleChange}
                    autoComplete="off"
                />

                <SubmitButton
                    type="submit"
                    className="submitButton"
                >
                    {loading ? "Enviando..." : "Enviar"}
                </SubmitButton>
            </form>
            
            <div className="d-flex w-100 justify-content-between align-items-center align-self-center" style={{marginBlock: "25px"}}>
                <Line />
                    <p className="m-0" style={{fontSize: "18px"}}>ou</p>
                <Line />
            </div>

            <WhatsappButton onClick={() => window.open(urlBasica, "_blank")}>
                <img className="whatsappLogo" src="/WhatsApp.svg" alt="WhatsApp" />
                Continuar no Whatsapp
                <span className="container">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                </span> 
            </WhatsappButton>

        </InfoBox>
    );

}