import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #D4CFFF;
    font-family: "Raleway";
    overflow-y: visible;
    padding-bottom: 70px;
    text-align: center;
    
    background: linear-gradient(270deg, #1B407C, #6A3EF2, #CD9F09, #1B407C);
    background-size: 200% 100%;  /* Mais suave e rápido */
    animation: waveAnimation 5s linear infinite;

    h3 {
        font-weight: bold;
        font-size: 50px;
        margin-block: 35px 35px;
    }

    p {
        font-size: 25px;
        font-weight: 400;
        margin: 0;
    }

    img {
        margin-top: -55px;
        object-fit: cover;
        z-index: 1;
    }

    @keyframes waveAnimation  {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 200% 50%;
        }
    }

    @media (max-width: 576px) {
        padding-inline: 20px;

        h3 {
            font-size: 10vw;
        }
        p {
            font-size: 6vw;
        }
    }

`;

export function Banner() {
    return (
        <Container data-aos="fade-up" data-aos-duration="1400">
            <img src="LogoWportSmall.png" alt="Logo WPORT" />
            <h3>Seu talento merece ser visto</h3>
            <p>Transforme seu trabalho em um portfólio profissional que atrai, impressiona e vende.</p>
            <p>Fale com a gente ou tire suas dúvidas agora mesmo.</p>
        </Container>
    );
}