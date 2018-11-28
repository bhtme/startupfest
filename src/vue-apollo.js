import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client';

Vue.use(VueApollo);

const AUTH_TOKEN = 'apollo-token';

const defaultOptions = {
  httpEndpoint: 'https://startups-project-mytvsxrgeb.now.sh/',
  wsEndpoint: null,
  tokenName: AUTH_TOKEN,
  persisting: false,
  websocketsOnly: false,
  ssr: false,
};

export default function createProvider(options = {}) {
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options,
  });
  apolloClient.wsClient = wsClient;

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        fetchPolicy: 'cache-and-network',
      },
    },
    errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; font-weight: bold;', error.message);
    },
  });

  return apolloProvider;
}

// Manually call this when user log in
export async function onLogin(apolloClient, token) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
  try {
    await apolloClient.resetStore();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message);
  }
}

// Manually call this when user log out
export async function onLogout(apolloClient) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN);
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
  try {
    await apolloClient.resetStore();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
  }
}
