import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider
} from '@apollo/client';

import ReactDOM from 'react-dom';

import Pages from './pages/index';
import { cache } from './cache';
import { AppStateProvider } from './store/pageCountStore';
import injectStyles from './styles';

injectStyles();

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
});


ReactDOM.render(

  <ApolloProvider client={client}>
    <AppStateProvider>
      <Pages />
    </AppStateProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

