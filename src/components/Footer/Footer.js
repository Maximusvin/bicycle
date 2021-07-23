import { Wrapper, DeveloperWrap, Developer, Name } from './Footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <DeveloperWrap>
        <Developer>DeveloperWrap:</Developer>
        <Name href="https://www.linkedin.com/in/maxim-kozlov/">
          Maksym Kozlov
        </Name>
      </DeveloperWrap>
    </Wrapper>
  );
};

export default Footer;
