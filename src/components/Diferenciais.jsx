import styled from "styled-components";

const Container = styled.div`
    background-color: #13131E;
    padding: 117px 100px 0px 100px;
    color: #D4CFFF;
    font-family: "Raleway";
    font-weight: bold;
    margin: 0 0 150px 0;
    
    h2 {
        font-weight: bold;
        font-size: 55px;
    }

    @media (max-width: 576px) {
        padding-top: 15vw !important;
        padding-inline: 5vw !important;

        h2 {
            font-size: 25px;
            text-align: center;
        }
    }

`;

const VantagensCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1E1E2B;
    border: none;
    border-radius: 24px;
    padding: 15px;
    z-index: 1;

    @media (max-width: 576px) {
        margin-bottom: 30px;
    }
`;

const BoxVantagens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #1E1E2B;
    border: 1px solid #D4CFFF;
    border-radius: 14px;
    text-align: center;
    max-width: 270px;
    min-height: 220px;
    padding: 22px;
    gap: 29px;

    h3 {
        font-weight: bold;
        font-size: 20px;
    }

    img {
        max-width: 100px;
        max-height: 100px;
    }

    @media (max-width: 576px) {
        h3 {
            font-size: 14px;
        }
    }

`;

function Diferenciais() {

    const vantagens = ["Seu site no ar em menos de 1 mês!", "Designs profissionais e personalizáveis", "Perfeito em celular, tablet ou desktop", "Segurança e hospedagem incluídas", "Qualidade profissional por um preço acessível"];
    const imagensVantagens = ["Foguete.png", "Cores.png", "Responsividade.png", "Seguranca.png", "Coin.png"];

    return (
        <Container className="row d-flex flex-column justify-content-start align-items-start" data-aos="fade-up" data-aos-duration="1000">
                
                <h2 style={{marginBottom: "50px"}}>Por que escolher a WPORT?</h2>
                <div className="col-12 d-flex justify-content-around aling-items-center flex-wrap">
                    {vantagens.map((vantagem, index) => (
                        <VantagensCard data-aos="zoom-in" data-aos-duration="1200" key={index}>
                            <BoxVantagens>
                                <img src={imagensVantagens[index]} alt={imagensVantagens[index].split(".")[0]} />
                                <h3>{vantagem}</h3>
                            </BoxVantagens>
                        </VantagensCard>
                    ))}
                </div>
                
        </Container>
    );
};

export default Diferenciais;