import styled from "styled-components";

const Container = styled.div`
    background-color: #13131E;
    padding: 117px 100px 0px 100px;
    color: #D4CFFF;
    font-family: "Raleway";
    font-weight: bold;
    margin: 0 0 30px 0;

    h2 {
        font-weight: bold;
        font-size: 55px;
    }
    h3 {
        font-size: 30px;
        font-weight: 400;
    }
    p {
        font-size: 20px;
        font-weight: 300;
        line-height: 27px;
    }

    @media (max-width: 576px) {
        padding: 15vw !important;
        padding-inline: 5vw !important;

        p {
            font-size: 4vw;
            line-height: 5vw;
        }
    }

`;

const LogoText = styled.div`
    display: flex;
    align-items: end;
    gap: 75px;

    img {
        width: 275px;
    }

    h1 {
        font-weight: bold;
        font-size: 150px;
        margin: 0;
        height: 145px;
    }

    @media (max-width: 1100px) {
        align-items: start;
        gap: 4vw;
        height: 15vw;

        h1 {
            font-size: 13vw;
        }

        img {
            width: 20vw;
        }

    }

`;

const DivTitles = styled.div`
    margin: 125px 0px 50px 0px;

    @media (max-width: 576px) {
        margin: 60px 0px 20px 0px;

        h2 {
            font-size: 9vw;
        }
        h3 {
            font-size: 7vw;
        }
    }

`;

const LogoBackground = styled.div`
    img {
        top: 0;
        right: 0;
        position: absolute;
        z-index: 0;
    }  
`;

const PlanosButton = styled.button`
    width: 150px;
    height: 50px;
    color: white;
    background-color: #6A3EF2;
    font-family: "Raleway";
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    margin-top: 30px;

    @media (max-width: 576px) {
        width: 45vw;
        height: auto;
        padding: 5%;
        font-size: 4vw;
    }
`;

function Hero() {

    const scrollToPlanos = () => {
        const section = document.getElementById('planosSection');
        if(section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <Container className="row col-12 col-xl-8 d-flex flex-column justify-content-start align-items-start no-padding-sm">
                
                <LogoBackground>
                    <img src="LogoBackground.png" alt="Logo WPORT"/>
                </LogoBackground>

                <LogoText data-aos="fade-right" data-aos-duration="800">
                    <img src="Logo.png" alt="WPORT Logo"/>
                    <h1>WPORT</h1>
                </LogoText>

                <DivTitles className="d-flex flex-column" data-aos="fade-right" data-aos-duration="1000">
                    <h2>Seu portfólio, sua vitrine para o mundo.</h2>
                    <h3>Websites e portfólios personalizados que refletem quem você é!</h3>
                </DivTitles>

                <p className="col-12 col-xl-10" data-aos="fade-right" data-aos-duration="1000">
                    Na era digital, sua identidade online é seu cartão de visita.<br/>
                    Criamos sites únicos, funcionais e sob medida para você, sua marca ou seu negócio. Do design à entrega final, combinamos criatividade e tecnologia para transformar sua visão em uma experiência digital profissional e memorável.
                </p>

                <PlanosButton 
                    className="col-10 ms-2" 
                    data-aos="fade-right" 
                    data-aos-duration="1000" 
                    onClick={scrollToPlanos}
                >
                    Veja os Planos
                </PlanosButton>

        </Container>
    );
};

export default Hero;