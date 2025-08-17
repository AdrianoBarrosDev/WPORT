import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #13131E;
    padding: 55px 100px 0px 100px;
    color: #D4CFFF;
    font-family: "Raleway";

    h2 {
        font-weight: bold;
        font-size: 70px;
        margin-bottom: 80px;
    }

    @media (max-width: 576px) {
        padding-top: 15vw !important;
        padding-inline: 5vw !important;

        h2 {
            font-size: 7vw;
        }
    }

`;

const Adicional = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 350px;
    height: 350px;
    background-color: rgba(30, 30, 43, 0.61);
    border: none;
    border-radius: 50%;
    font-family: "Poppins";
    padding-block: 60px 30px;
    margin-bottom: 100px;

    h3 {
        margin-top: 35px;
        font-weight: bold;
        font-size: 30px;
        color: #D4CFFF;
    }

    p {
        font-weight: bold;
        font-size: 25px;
        color: rgba(212, 207, 255, 0.7);
    }

    @media (max-width: 576px) {
        margin-bottom: 50px;
        width: 60vw;
        height: 60vw;

        img {
            width: 50%;
        }
        h3 {
            margin-top: 15px;
            font-size: 5vw;
        }
        p {
            font-size: 3vw;
        }
    }
    
`;

export function Adicionais() {
    return (
        <Container data-aos="fade-up" data-aos-duration="1000">
            <h2>Adicionais (Opcional)</h2>
            <div className="d-flex justify-content-center justify-content-sm-around align-items-center flex-wrap" style={{gap: "5vw"}}>
                <Adicional data-aos="zoom-in" data-aos-duration="2500">
                    <img src="AdicionalModelos.png" alt="Modelo 3D" />
                    <h3>Modelos 3D</h3>
                    <p>R$ 150</p>
                </Adicional>
                <Adicional data-aos="zoom-in" data-aos-duration="2500">
                    <img src="AdicionalIngles.png" alt="Versão Inglês" />
                    <h3>Versão Inglês</h3>
                    <p>R$ 200</p>
                </Adicional>
                <Adicional data-aos="zoom-in" data-aos-duration="2500">
                    <img src="AdicionalContato.png" alt="Contato" />
                    <h3>Seção Contato</h3>
                    <p>R$ 250</p>
                </Adicional>
                <Adicional data-aos="zoom-in" data-aos-duration="2500">
                    <img src="AdicionalUrl.png" alt="Foto URL" />
                    <h3>Domínio (URL)</h3>
                    <p>R$ 200</p>
                </Adicional>
            </div>
        </Container>
    );
}