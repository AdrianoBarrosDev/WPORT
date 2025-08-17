import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    background-color: #13131E;
    padding: 55px 100px 150px 144px;
    color: #D4CFFF;
    font-family: "Raleway";

    h2 {
        font-weight: bold;
        font-size: 55px;
        margin-bottom: 60px;
    }

    img {
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 576px) {
        padding-top: 15vw !important;
        padding-inline: 5vw !important;
        text-align: center;
        align-items: center;

        h2 {
            font-size: 10vw;
        }
    }

`;

const Painel = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    background-color: #1E1E2B;
    border: 1px solid #D4CFFF;
    border-radius: 15px;
    font-family: "Poppins";
    margin-bottom: 25px;
    outline: 10px solid #1E1E2B;
    padding: 40px;

    h3 {
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: bold;
    }

    p {
        font-size: 15px;
        margin-bottom: 20px;
        color: rgba(212, 207, 255, 0.7);
    }

    @media (max-width: 576px) {
        text-align: center;
        padding: 30px 20px;

        h3 {
            font-size: 7vw;
        }
        p {
            font-size: 4vw;
        }
    }
    
`;

export function Sobre() {
    return (
        <Container data-aos="fade-right" data-aos-duration="1200">
            <h2>Sobre a Empresa</h2>

            <Painel>
                <h3>Transformamos ideias em presença digital</h3>
                <p>
                    A WPORT nasceu com um objetivo simples: ajudar estudantes, profissionais e pequenos negócios a conquistarem um site bonito, funcional e acessível, sem complicação e sem gastar uma fortuna.
                </p>
                <p>
                Somos uma empresa jovem, criada por quem entende que ter um bom site hoje é essencial, mesmo para quem está começando. Nosso foco é oferecer soluções rápidas, personalizadas e com qualidade profissional, tudo isso por um preço justo.
                </p>
                <p>
                    Aqui, cada projeto é tratado com atenção de verdade. Desde o primeiro contato até a entrega final, você acompanha tudo de forma clara e simples.
                </p>
                <p>
                    Mais do que criar sites, queremos ajudar pessoas a se apresentarem ao mundo com confiança.
                </p>
            </Painel>
            
        </Container>
    );
}