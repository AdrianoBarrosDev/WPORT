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
        margin-bottom: 80px;
    }

    img {
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 1670px) {
        display: none;
    }

`;

const Numeros = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 5%;
    font-family: "Poppins";
    margin-bottom: 25px;

    p {
        width: 150px;
        font-size: 200px;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }
`;

const Descricoes = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-block: 35px 25px;
`;

const Descricao = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #1E1E2B;
    border: none;
    border-radius: 30px;
    font-family: "Poppins";
    padding: 25px;

    h3 {
        font-size: 25px;
        font-weight: bold;
        color: #D4CFFF;
    }

    p {
        font-size: 15px;
        font-weight: 300;
        margin: 0;
        text-align: center;
        color: rgba(212, 207, 255, 0.6);
    }
`;

const MobileContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 55px 100px 150px 144px;
    color: #D4CFFF;
    padding-top: 15vw !important;
    padding-inline: 5vw !important;

    h2 {
        font-weight: bold;
        font-size: 7vw;
        margin-bottom: 50px;
    }

    .numeros {
        font-family: "Poppins";
        width: 150px;
        font-size: 200px;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    @media (max-width: 1670px) {
        display: flex;
    }

`;

const DescricaoMobile = styled.div`
    width: 350px;
    min-width: 150px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #1E1E2B;
    border: none;
    border-radius: 30px;
    font-family: "Poppins";
    padding: 25px;

    h3 {
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        color: #D4CFFF;
    }

    p {
        font-size: 15px;
        font-weight: 300;
        margin: 0;
        text-align: center;
        color: rgba(212, 207, 255, 0.6);
    }

    @media (max-width: 768px) {
        width: auto;
    }

    @media (max-width: 576px) {
        h3 {
            font-size: 5vw;
        }
        p {
            font-size: 3vw;
        }
    }
`;

const MobileContent = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 60px;
  min-height: 2000px;

  background-image: url("LineFuncionamentoVertical.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%; /* ou "auto 100%" se quiser cobrir toda a altura */

  img {
    margin-top: -50px;
    margin-bottom: 30px;
  }

`;

export function Funcionamento() {
    return (

        <div className="p-0">

            <Container>
                <h2 data-aos="fade-up" data-aos-duration="1000">Como funciona?</h2>
                <div className="d-flex w-100 justify-content-start align-items-center flex-wrap">

                    <Numeros>
                        <p data-aos="slide-up" data-aos-duration="1700" data-aos-offset="300">1</p>
                        <p data-aos="slide-up" data-aos-duration="2000" data-aos-offset="300">2</p>
                        <p data-aos="slide-up" data-aos-duration="2300" data-aos-offset="300">3</p>
                        <p data-aos="slide-up" data-aos-duration="2600" data-aos-offset="300">4</p>
                    </Numeros>

                    <img src="LineFuncionamento.png" alt="Linha Funcionamento" data-aos="fade-up" data-aos-duration="1000" />

                    <Descricoes>

                        <Descricao data-aos="slide-up" data-aos-duration="1700" data-aos-offset="300">
                            <h3>Fazer Pedido</h3>
                            <p>Você escolhe o pacote ideal e preenche um formulário inicial. Nele, você indica quais seções deseja (como Sobre, Serviços, Contato, Portfólio etc.) e envia as informações que quer incluir no site: textos, imagens, redes sociais, links e preferências de design. Quanto mais detalhes, melhor!</p>
                        </Descricao>
                        <Descricao data-aos="slide-up" data-aos-duration="2000" data-aos-offset="300">
                            <h3>Aprovar Design</h3>
                            <p>Com base no conteúdo enviado, montamos a primeira versão visual do seu site. Você analisa o layout, cores, organização e estilo. Se gostar, seguimos para a próxima etapa. Se quiser ajustes, é só pedir!</p>
                        </Descricao>
                        <Descricao data-aos="slide-up" data-aos-duration="2300" data-aos-offset="300">
                            <h3>Revisão</h3>
                            <p>Fazemos os ajustes finais conforme seu feedback: textos, imagens, ícones, links ou estrutura. Aqui garantimos que tudo esteja do seu jeito antes da publicação.</p>
                        </Descricao>
                        <Descricao data-aos="slide-up" data-aos-duration="2600" data-aos-offset="300">
                            <h3>Entrega Final</h3>
                            <p>Com tudo aprovado, seu site vai ao ar com domínio e hospedagem ativos. Enviamos os acessos e você já pode divulgar seu site por aí!</p>
                        </Descricao>

                    </Descricoes>

                </div>
            </Container>

            <MobileContainer>
                <h2 data-aos="fade-up" data-aos-duration="1000">Como funciona?</h2>

                <MobileContent>
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ zIndex: 1 }}>
                        <p className="numeros" data-aos="slide-up" data-aos-duration="1200">1</p>
                        <img src="EclipseHabilitado.png" alt="Eclipse" data-aos="slide-up" data-aos-duration="2000" />
                        <DescricaoMobile data-aos="slide-up" data-aos-duration="1200" data-aos-offset="300">
                            <h3>Fazer Pedido</h3>
                            <p>Você escolhe o pacote ideal e preenche um formulário inicial. Nele, você indica quais seções deseja (como Sobre, Serviços, Contato, Portfólio etc.) e envia as informações que quer incluir no site: textos, imagens, redes sociais, links e preferências de design. Quanto mais detalhes, melhor!</p>
                        </DescricaoMobile>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ zIndex: 1 }}>
                        <p className="numeros" data-aos="slide-up" data-aos-duration="1200">2</p>
                        <img src="EclipseDesabilitado.png" alt="Eclipse"  data-aos="slide-up" data-aos-duration="2000" />
                        <DescricaoMobile data-aos="slide-up" data-aos-duration="1200" data-aos-offset="300">
                            <h3>Aprovar Design</h3>
                            <p>Com base no conteúdo enviado, montamos a primeira versão visual do seu site. Você analisa o layout, cores, organização e estilo. Se gostar, seguimos para a próxima etapa. Se quiser ajustes, é só pedir!</p>
                        </DescricaoMobile>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ zIndex: 1 }}>
                        <p className="numeros" data-aos="slide-up" data-aos-duration="1200">3</p>
                        <img src="EclipseDesabilitado.png" alt="Eclipse" data-aos="slide-up" data-aos-duration="2000" />
                        <DescricaoMobile data-aos="slide-up" data-aos-duration="1200" data-aos-offset="300">
                            <h3>Revisão</h3>
                            <p>Fazemos os ajustes finais conforme seu feedback: textos, imagens, ícones, links ou estrutura. Aqui garantimos que tudo esteja do seu jeito antes da publicação.</p>
                        </DescricaoMobile>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ zIndex: 1 }}>
                        <p className="numeros" data-aos="slide-up" data-aos-duration="1200">4</p>
                        <img src="EclipseDesabilitado.png" alt="Eclipse" data-aos="slide-up" data-aos-duration="2000" />
                        <DescricaoMobile data-aos="slide-up" data-aos-duration="1200" data-aos-offset="300">
                            <h3>Entrega Final</h3>
                            <p>Com tudo aprovado, seu site vai ao ar com domínio e hospedagem ativos. Enviamos os acessos e você já pode divulgar seu site por aí!</p>
                        </DescricaoMobile>
                    </div>

                </MobileContent>
            </MobileContainer>
        </div>
        

        
    );
}