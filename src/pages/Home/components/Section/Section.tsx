import { MdKeyboardArrowDown } from 'react-icons/md';

import {
  Container,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
} from './Section.styles';

interface Props {
  title: string;
  description: string;
  backgroundImage: string;
}

const Section: React.FC<Props> = ({ title, description, backgroundImage }) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Customer Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
      <DownArrow>
        <MdKeyboardArrowDown />
      </DownArrow>
    </Container>
  );
};

export default Section;
