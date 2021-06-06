import { Wrapper } from './MainTemplate.style';
import Navigation from '../../organisms/Navigation/Navigation';
import SearchBar from '../../organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <SearchBar />
    {children}
    <NewsSection />
  </Wrapper>
);

export default MainTemplate;
