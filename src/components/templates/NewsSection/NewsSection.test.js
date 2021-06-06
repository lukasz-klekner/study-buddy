import axios from 'axios';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import NewsSection from './NewsSection';
import { renderWithProviders } from '../../../helpers/renderWithThemeProvider';

const query = `
{
  allArticles
  {
    title,
    category,
    content,
    image {
      url
    }
  }
}
`;

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the article are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [{ title: 'Test', category: 'Test', content: 'Test' }],
      },
    });
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
