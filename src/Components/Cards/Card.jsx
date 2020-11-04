import React from "react";
import styled from "styled-components";

const BodyCard = styled.div`
    display: flex;
    width: 1570px;
    height: auto;
    border-radius: 10px;
    background: linear-gradient(70deg, #ff1e26 45%, #04b7ce);
`;

const ImageEvent = styled.img`
    width: auto;
    height: 40vh;
`;

const InfoEvent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2vh;
  width: auto;
  height: 20vh;
`;

const Title = styled.h1`
  font-size: 5vh;
  padding: 1.5vh;
`;

const Span = styled.span`
  font-size: 2.5vh;
  padding: 1vh;
`;

const Paragraph = styled.p`
  font-size: 2.95vh;
  padding: 1.5vh;
  color: #ffffff;
  text-shadow: 0.22vh 0.22vh #000000;
`;

const Event = styled.div`
  height: 40vh;
`;

const ResponseEvent = styled.div`
  height: max-content;
  padding: 3vh;
`;

const SecondSpan = styled.span`
  display: flex;
  justify-content: center;
  font-size: 2.5vh;
  text-shadow: 0.22vh 0.22vh #ff6600;
  color: #04b6cd;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vh;
`;

const Buttons = styled.button`
  margin-left: 2vw;
  margin-right: 2vw;
  border-radius: 15px;
  border-color: #22a5ba;
  padding: 0vw 2vw;

  &:hover {
    background-color: #22a5ba;
    border-color: #ff6600;
    color: white;
  }
`;

// Desktop/////////////////////////////////////////////////////////

const Card = () => {
  return (
    <BodyCard>
      <ImageEvent
        src="https://as2.ftcdn.net/jpg/02/91/91/09/500_F_291910998_IWcN55ggjod9LHwJeJrIp1Clyon4MrdV.jpg"
        alt="event"
      />
      <Event>
        <InfoEvent>
          <Title>Grande fête de la saucisse</Title>
          <Span>
            09 / 10 / 11 Novembre 2020 - De 7h à 21h sur la place du marché
          </Span>
          <Paragraph>
            Vous aimez les saucisses ? Vous souhaitez faire voyager vos papilles
            ? Alors n'hésitez plus et venez nous rejoindre au plus vite pour
            célébrer la grande fête de la saucisse ! Promis, il y en aura pour
            tous les goûts !
          </Paragraph>
        </InfoEvent>
        <ResponseEvent>
          <SecondSpan>Serez-vous de la partie ?</SecondSpan>
          <ButtonsContainer>
            <Buttons>Oh ouais !</Buttons>
            <Buttons>Euuuh</Buttons>
            <Buttons>That's a ... Nope</Buttons>
          </ButtonsContainer>
        </ResponseEvent>
      </Event>
    </BodyCard>
  );
};

export default Card;
