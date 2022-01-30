import { MdMenu } from 'react-icons/md';
import {
  Container,
  MenuGroup,
  RightMenu,
  MenuIconContainer,
  BurgerNav,
  CloseIcon,
  CloseIconContainer,
} from './Header.styles';
import logo from 'assets/images/logo.svg';
import { useState } from 'react';

const Header: React.FunctionComponent = () => {
  const [burgerMenuStatus, setBurgerMenustatus] = useState(true);

  return (
    <Container>
      <span>
        <img src={logo} alt="tesla logo" />
      </span>
      <MenuGroup>
        <div>Model S</div>
        <div>Model X</div>
        <div>Model Y</div>
      </MenuGroup>
      <RightMenu>
        <span>Shop</span>
        <span>Tesla Account</span>
        <MenuIconContainer onClick={() => setBurgerMenustatus(true)}>
          <MdMenu />
        </MenuIconContainer>
      </RightMenu>
      <BurgerNav status={burgerMenuStatus}>
        <CloseIconContainer onClick={() => setBurgerMenustatus(false)}>
          <CloseIcon />
        </CloseIconContainer>
        <ul>
          <li>Existing Inventory</li>
          <li>Used Inventory</li>
          <li>Trade-In</li>
          <li>Test Drive</li>
          <li>Cybertruck</li>
          <li>Roadster</li>
          <li>Semi</li>
          <li>Charging</li>
          <li>Powerwall</li>
          <li>Commercial Energy</li>
          <li>Utilities</li>
          <li>Find Us</li>
          <li>Support</li>
          <li>Investor Relations</li>
        </ul>
      </BurgerNav>
    </Container>
  );
};

export default Header;
