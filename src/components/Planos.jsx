import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #13131E;
    padding: 117px 100px 0px 100px;
    color: #D4CFFF;
    font-family: "Raleway";
    margin: 33px 0 0 0;
    gap: 65px;

    h2 {
        font-weight: bold;
        font-size: 70px;
    }

    @media (max-width: 768px) {
        padding-top: 15vw !important;
        padding-inline: 5vw !important;
    }

`;

const CardPlanos = styled.div`
    background-image: url('/BackgroundPlanos.png');
    background-size: calc(100% - 28px);;
    background-position: center;
    background-repeat: no-repeat;
    height: 670px;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    background-color: #1E1E2B;
    border: none;
    border-radius: 20px;
    max-width: 500px;
    padding: 0;

    @media (max-width: 576px) {
        height: auto;
    }
`;

const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: row;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 100%;
    padding: 27px 40px;
    color: white;

    h3 {
        margin-top: 17px;
        font-family: "Raleway";
        font-size: 30px;
        font-weight: bold;
    }

    @media (max-width: 576px) {
        padding: 20px 20px;

        h3 {
            font-size: 7vw;
        }
    }

`;

const TitlePlano = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 25px;
    border: none;
    border-radius: 10px;
    color: white;
    font-family: "Raleway";
    font-size: 15px;
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    p {
        margin: 0;
    }

`;

const BalonPrice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 125px;
    height: 125px;
    min-height: 90px;
    min-width: 90px;
    border: none;
    border-radius: 50%;
    font-family: "Poppins";
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    p {
        margin: 0;
    }

    .originalPrice {
        margin-top: -9px;
        margin-left: 50%;
        font-size: 10px;
        font-weight: bold;
        color: rgba(250, 250, 250, 0.7);
        text-decoration: line-through;
    }

    .actualPrice {
        font-size: 30px;
        font-weight: bold;
    }

    @media (max-width: 576px) {
        width: 23vw;
        height: 23vw;

        .originalPrice {
            font-size: 2vw;
        }
        .actualPrice {
            font-size: 5vw;
        }
    }

`;

const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    padding: 35px 42px;
    flex-grow: 1;

    p {
        font-size: 18px;
        margin-bottom: 45px;
    }

    @media (max-width: 576px) {
        padding: 20px 20px;
    }
`;

const Vantagens = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    font-family: "Poppins";
    margin-bottom: 15px;
    gap: 11px;

    p {
        font-size: 13px;
        margin: 0;
    }

`;

const IconBola = styled.div`
    width: 15px;
    height: 15px;
    min-width: 15px;
    min-height: 15px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Indicacao = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: "Poppins";
    gap: 7px;
    margin-top: 35px;

    h4 {
        font-size: 15px;
        font-weight: 400;
        margin: 4px 0;
    }
    p {
        color: rgba(250, 250, 250, 0.5);
        font-weight: 200;
        font-size: 10px;
        opacity: 0.5;
        margin: 0;
    }

    @media (max-width: 576px) {
        margin-bottom: 30px;

        h4 {
            font-size: 2vw;
        }
        p {
            font-size: 2vw;
        }
    }

`;

const VerticalLine = styled.div`
    width: 5px;
    height: 100%;
    border-radius: 5px;
`;

const ContratarButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #13131E;
  color: white;
  border: none;
  border-radius: 10px;
  align-self: center;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle farthest-corner at 10% 20%, ${props => props.color} 17.8%, rgba(255,255,255,1) 100.2%);
    filter: blur(10px);
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 0.8s ease;
    z-index: -1;
    border-radius: 10px;
  }

  &:hover {
    background: radial-gradient(circle farthest-corner at 10% 20%, ${props => props.color} 17.8%, rgba(255,255,255,1) 100.2%);
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease;
  }
`;

export function Planos() {

    const urlBasico = `${import.meta.env.VITE_API_URL}?text=Ol%C3%A1%2C%20desejo%20saber%20mais%20sobre%20o%20Plano%20B%C3%A1sico%20da%20WPORT.`
    const urlProfissional = `${import.meta.env.VITE_API_URL}?text=Ol%C3%A1%2C%20desejo%20saber%20mais%20sobre%20o%20Plano%20Profissional%20da%20WPORT.`
    const urlPremium = `${import.meta.env.VITE_API_URL}?text=Ol%C3%A1%2C%20desejo%20saber%20mais%20sobre%20o%20Plano%20Premium%20da%20WPORT.`

    return (
        <Container data-aos="fade-up" data-aos-duration="1000" id="planosSection">
            <h2>Planos</h2>
            <div className="row w-100 d-flex justify-content-center align-items-center" style={{gap: "80px"}}>
                <CardPlanos data-aos="flip-left" data-aos-duration="1200">

                    <CardTop style={{background: "linear-gradient(to right, #224A8C, #D5D5D5)"}}>

                        <div>
                            <TitlePlano style={{backgroundColor: "#1B407C"}}>
                                <p>Básico</p>
                            </TitlePlano>
                            <h3>Plano Básico</h3>
                        </div>

                        <BalonPrice style={{background: "linear-gradient(to bottom, #224A8C, #D5D5D5)"}}>
                            <p className="originalPrice">R$ 450</p>
                            <p className="actualPrice">R$ 299</p>
                        </BalonPrice>

                    </CardTop>

                    <CardContent>

                        <div className="d-flex justify-content-start align-items-start flex-column p-0 m-0">
                            <p>
                                Comece com o essencial para apresentar sua marca ou portfólio. Um site de página única, elegante e funcional, ideal para dar os primeiros passos no digital com profissionalismo e estilo.
                            </p>

                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #224A8C, #D5D5D5)"}} />
                                <p>Design exclusivo e responsivo</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #224A8C, #D5D5D5)"}} />
                                <p>Estrutura simples e direta</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #224A8C, #D5D5D5)"}} />
                                <p>Apresentação visual refinada com animações leves</p>
                            </Vantagens>

                            <Indicacao>
                                <VerticalLine style={{backgroundColor: "#1B407C"}} />
                                <h4>Perfeito para:</h4>
                                <p>quem precisa de uma presença online rápida e elegante.</p>
                            </Indicacao>
                        </div>

                        <ContratarButton 
                            color='rgba(34, 74, 140, 1)'
                            onClick={() => window.open(urlBasico, "_blank")}
                        >
                            Contratar
                        </ContratarButton>

                    </CardContent>
                    
                </CardPlanos>

                <CardPlanos data-aos="flip-left" data-aos-duration="1200">

                    <CardTop style={{background: "linear-gradient(to right, #7F5AF0, #D5D5D5)"}}>

                        <div>
                            <TitlePlano style={{backgroundColor: "#6A3EF2"}}>
                                <p>PRO</p>
                            </TitlePlano>
                            <h3>Plano Profissional</h3>
                        </div>

                        <BalonPrice style={{background: "linear-gradient(to bottom, #7F5AF0, #D5D5D5)"}}>
                            <p className="originalPrice">R$ 650</p>
                            <p className="actualPrice">R$ 499</p>
                        </BalonPrice>

                    </CardTop>

                    <CardContent>

                        <div className="d-flex justify-content-start align-items-start flex-column p-0 m-0">
                            <p>
                                Destaque-se com um site completo e bem estruturado. Com múltiplas páginas, você poderá contar sua história, mostrar seus projetos e criar uma conexão mais forte com seu público.
                            </p>

                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #7F5AF0, #D5D5D5)"}} />
                                <p>Página inicial + 2 internas</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #7F5AF0, #D5D5D5)"}} />
                                <p>Melhor organização de conteúdo</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #7F5AF0, #D5D5D5)"}} />
                                <p>Design mais elaborado com identidade visual refinada</p>
                            </Vantagens>

                            <Indicacao>
                                <VerticalLine style={{backgroundColor: "#6A3EF2"}} />
                                <h4>Ideal para:</h4>
                                <p>quem apresenta seus projetos com mais estrutura e estilo.</p>
                            </Indicacao>
                        </div>

                        <ContratarButton 
                            color='rgba(127,90,240,1)'
                            onClick={() => window.open(urlProfissional, "_blank")}
                        >
                            Contratar
                        </ContratarButton>

                    </CardContent>
                    
                </CardPlanos>

                <CardPlanos data-aos="flip-left" data-aos-duration="1200">

                    <CardTop style={{background: "linear-gradient(to right, #D4AF37, #D5D5D5)"}}>

                        <div>
                            <TitlePlano style={{backgroundColor: "#CD9F09"}}>
                                <p>Premium</p>
                            </TitlePlano>
                            <h3>Plano Premium</h3>
                        </div>
                        
                        <BalonPrice style={{background: "linear-gradient(to bottom, #D4AF37, #D5D5D5)"}}>
                            <p className="originalPrice">R$ 1000</p>
                            <p className="actualPrice">R$ 799</p>
                        </BalonPrice>

                    </CardTop>

                    <CardContent>

                        <div className="d-flex justify-content-start align-items-start flex-column p-0 m-0">
                            <p>
                                Um site completo, estratégico e sofisticado, feito para destacar sua marca ou portfólio com estilo e autoridade. Cada detalhe é pensado para valorizar sua imagem e impressionar seus visitantes.
                            </p>

                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #D4AF37, #D5D5D5)"}} />
                                <p>Layout totalmente personalizado, com até 5 páginas</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #D4AF37, #D5D5D5)"}} />
                                <p>Pode incluir efeitos visuais mais avançados</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #D4AF37, #D5D5D5)"}} />
                                <p>SEO básico otimizado: melhora da visibilidade no Google</p>
                            </Vantagens>

                            <Indicacao>
                                <VerticalLine style={{backgroundColor: "#CD9F09"}} />
                                <h4>Feito para:</h4>
                                <p>buscar impacto, conteúdo completo e destaque profissional.</p>
                            </Indicacao>
                        </div>

                        <ContratarButton 
                            color='rgba(212, 175, 55, 1)'
                            onClick={() => window.open(urlPremium, "_blank")}
                        >
                            Contratar
                        </ContratarButton>

                    </CardContent>

                </CardPlanos>

            </div>
            
            <img src="DivisaoConteudo.png" alt="Line Divisão" data-aos="fade-up" data-aos-duration="1000"/>

        </Container>
    );

}