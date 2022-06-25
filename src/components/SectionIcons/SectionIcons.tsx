import * as React from 'react';
import { BsBoxSeam, BsCheckCircle, BsLaptop, BsLayers } from 'react-icons/bs';
import styled from 'styled-components';
import ContainerIcon from '../ContainerIcon/ContainerIcon';

const SectionIconStyled = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const SectionIcons = () => {
  return (
    <SectionIconStyled>
      <ContainerIcon titulo='Somente para desktop' texto='Vamos aprender, como utilizar um framework.' icon={<BsLaptop />} />
      <ContainerIcon titulo='Criado com componentes' texto='Utilizamos o Styled Componentes.' icon={<BsLayers />} />
      <ContainerIcon
        titulo='Facil aproveitamento'
        texto='estamos no caminho.'
        icon={<BsCheckCircle />}
        
        
      />
    </SectionIconStyled>
  );
};

export default SectionIcons;
