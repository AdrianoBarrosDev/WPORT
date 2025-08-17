import { useState } from "react";
import styled from "styled-components";
import { Contact } from "../elements/Contact";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    background-color: #13131E;
    padding: 150px 100px 230px 144px;
    color: #D4CFFF;
    font-family: "Raleway";
    gap: 140px;

    h5 {
        font-weight: bold;
        font-size: 50px;
        margin: 100px 0px 53px 15px;
    }

    h4 {
        font-weight: bold;
        font-size: 150px;
        margin: 0;
        height: 145px;
    }

    @media (max-width: 1400px) {
        padding: 15vw !important;
        padding-inline: 5vw !important;
    }

    @media (max-width: 768px) {
        gap: 4vw;

        h5 {
            font-size: 10vw;
        }
        h4 {
            font-size: 15vw;
            text-align: center;
            height: 15vw;
        }
        img {
            width: auto;
            height: 15vw;
        }
    }

`;

const Question = styled.div`
  padding: 20px;
  border-top: 1px solid #D4CFFF;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 40px;

  .numero {
    font-family: "Poppins";
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    color: rgba(212, 207, 255, 0.5);
  }

`;

const Answer = styled.div`
  background-color: #1E1E2B;
  color: #ccc;
  padding: 15px 20px;
  border-radius: 0 0 10px 10px;
  margin-top: -10px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  color: white;

  max-width: 100%;
  box-sizing: border-box;

  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  line-height: 1.6;
`;

const DivFaq = styled.div`
    max-width: 920px;
`;

export function FAQ() {

    const [openIndex, setOpenIndex] = useState(null);
    const faqData = [
        {
          question: "Em quanto tempo meu site fica pronto?",
          answer: "Nosso prazo é de aproximadamente duas semanas.",
        },
        {
          question: "E se eu quiser mudar algo depois?",
          answer:
            "Durante o período de desenvolvimento, você receberá os protótipos para dar feedbacks e ajustarmos o projeto do jeito que você deseja.",
        },
        {
          question: "Preciso pagar tudo de uma vez?",
          answer:
            "Não! Após a aprovação do design, você paga metade do valor para iniciarmos o desenvolvimento. A outra metade é paga no final, para colocarmos o site no ar.",
        },
        {
          question: "Não tenho logo nem texto pronto. Posso fazer mesmo assim?",
          answer:
            "Claro! Temos designers que vão te orientar na criação da sua identidade visual.",
        },
        {
          question: "Ainda estou com dúvidas...",
          answer: "Entre em contato com a gente pelo WhatsApp!",
        },
    ];

    const toggleAnswer = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
      };

    return (
        <Container>

            <Contact />
            <div className="d-flex justify-content-center justify-content-lg-start align-items-start flex-column" data-aos="fade-left" data-aos-duration="1000">

                <div className="w-100 d-flex justify-content-around align-items-center gap-lg-5">
                    <img src="FaqLogo.png" alt="Logo FAQ"/>
                    <h4>WPORT</h4>
                </div>

                <h5>FAQ</h5>

                <DivFaq className="d-flex justify-content-center align-items-center flex-column w-100">
                    {faqData.map((item, index) => (
                        <div className="w-100" key={index}>

                            {index < 4 && 
                                <Question onClick={() => toggleAnswer(index)}>
                                    <p className="numero">0{index + 1}.</p>
                                    {item.question}
                                </Question>
                            }
                            {index == 4 &&
                                <Question 
                                    style={{borderBottom: "1px solid #D4CFFF"}}
                                    onClick={() => toggleAnswer(index)}
                                >
                                    <p className="numero">0{index + 1}.</p>
                                    {item.question}
                                </Question>
                            }
                            {openIndex === index && <Answer>{item.answer}</Answer>}
                        </div>
                    ))}
                </DivFaq>

            </div>
            
        </Container>
    );
}