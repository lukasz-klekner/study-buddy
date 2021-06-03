import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import { Wrapper } from './Root.style';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { UsersProvider } from '../providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
