import styled from "styled-components";

const Container = styled.div`
    background-color: #13131E;
    padding: 117px 100px 0px 100px;
    color: #D4CFFF;
    background-color: #1E1E2B;
    font-family: "Raleway";
    margin: 0;
    padding: 60px 100px;
    
    h2 {
        font-weight: bold;
        font-size: 55px;
        margin-bottom: 15px;
    }
    p {
        font-weight: 400;
        font-size: 20px;
    }

    @media (max-width: 576px) {
        padding-top: 15vw !important;
        padding-inline: 5vw !important;

        h2 {
            font-size: 30px;
        }
        p {
            font-size: 15px;
        }
    }

`;

const ProjetosCard = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    background-color: #13131E;
    max-width: 450px;
    border: none;
    border-radius: 20px;
    padding: 10px;
    font-family: "Raleway";
    margin-top: 44px;

    img {
        width: 100%;
        height: auto;
    }

    h3 {
        margin-block: 20px 15px;
        font-weight: bold;
        font-size: 20px;
    }

    p {
        font-weight: 600;
        font-size: 12px;
        color: rgba(212, 207, 255, 0.6);
        margin-bottom: 20px;
    }
`;

const AcesseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 35px;
    background-color: #6A3EF2;
    color: white;
    border: none;
    border-radius: 5px;
    gap: 10px;
    font-weight: bold;
    font-size: 15px;

    img {
        width: 21px;
        height: 21px;
    }
`;

function Projetos() {

    const projetosEmpresa = ["Site da WPORT", "Portfólio Desenvolvedor Software", "Portfólio Desenvolvedor Web"];
    const descricao = ["Um site moderno e responsivo, criado para apresentar nossos serviços de forma clara e acessível. Desenvolvido para ser o cartão de visitas digital da empresa, com design profissional que funciona perfeitamente em qualquer dispositivo.",
        "Este portfólio reflete as habilidades e o estilo em design que orientam todo o nosso trabalho. Leve, funcional e responsivo, inclui modelos 3D inovadores e uma seção de contato eficiente, tudo pensado para destacar projetos e facilitar o contato com empresas.",
        "Este portfólio reflete as habilidades e o estilo em design que orientam todo o nosso trabalho. Leve, funcional e responsivo, inclui modelos 3D inovadores e uma seção de contato eficiente, tudo pensado para destacar projetos e facilitar o contato com empresas."
    ];
    const imagensProjetos = ["ProjetoWport.png", "PortfolioA.png", "PortfolioB.png"];
    const links = ["https://wportbr.netlify.app/", "https://adrianobarrosdev.com/", "https://brunopuzzuoli.netlify.app/"];

    return (
        <Container className="row d-flex flex-column justify-content-start align-items-start" data-aos="fade-up" data-aos-duration="1000">
                
            <h2>Nossos Projetos</h2>
            <p>Confira alguns dos primeiros sites que criamos com cuidado e dedicação. Esses projetos refletem o padrão que oferecemos a cada cliente.</p>

            <div className="col-12 d-flex justify-content-around     aling-items-center flex-wrap">
                {projetosEmpresa.map((titleProjeto, index) => (
                    <ProjetosCard data-aos="slide-up" data-aos-duration="1200" key={index}>
                        <img src={imagensProjetos[index]} alt={imagensProjetos[index].split(".")[0]} />
                        <div style={{padding: "10px"}}>
                            <h3>{titleProjeto}</h3>
                            <p>{descricao[index]}</p>
                            <AcesseButton onClick={() => window.open(links[index])}>
                                Acesse Aqui
                                <img src="External.png" alt="External Icon"/>
                            </AcesseButton>
                        </div>
                        
                    </ProjetosCard>
                ))}
            </div>
                
        </Container>
    );
};

export default Projetos;