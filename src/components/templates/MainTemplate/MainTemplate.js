import { Wrapper } from './MainTemplate.style';
import Navigation from '../../organisms/Navigation/Navigation';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    {children}
  </Wrapper>
);

export default MainTemplate;
