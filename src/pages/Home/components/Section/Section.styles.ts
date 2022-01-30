import styled from 'styled-components';

interface Props {
  backgroundImage: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  min-height: 100%;
  background-image: ${props => `url('images/${props.backgroundImage}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  flex-grow: 1;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  width: 250px;
  height: 40px;
  border-radius: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  margin: 8px;
  cursor: pointer;
`;

export const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

export const DownArrow = styled.div`
  font-size: 30px;
  cursor: pointer;
  * {
    color: white;
  }
`;
