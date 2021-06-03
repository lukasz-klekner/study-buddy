import { Wrapper, Logo, StyledLink } from './Navigation.style';

const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>
        Study
        <br />
        Buddy
      </h1>
    </Logo>
    <StyledLink exact to="/">
      Dashboard
    </StyledLink>
    <StyledLink to="/add-user">Add user</StyledLink>
    {/* <StyledLink to="/">
      Settings
    </StyledLink>
    <StyledLink to="/">
      Logout
    </StyledLink> */}
  </Wrapper>
);

export default Navigation;
