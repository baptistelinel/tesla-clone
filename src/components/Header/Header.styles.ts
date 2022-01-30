import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

interface Props {
  status: boolean;
}

export const Container = styled.div`
  z-index: 2;
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
`;

export const MenuGroup = styled.div`
  display: flex;
  column-gap: 10px;

  div {
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  column-gap: 10px;

  a {
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const MenuIconContainer = styled.div`
  cursor: pointer;
`;

export const BurgerNav = styled.div<Props>`
  position: fixed;
  width: 300px;
  background-color: white;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  transform: ${props => (props.status ? 'translateX(0%)' : 'translateX(100%)')};

  li {
    padding: 15px 0;
    cursor: pointer;
  }
`;

export const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseIcon = styled(MdClose)`
  cursor: pointer;
`;
