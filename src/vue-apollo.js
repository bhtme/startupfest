import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client';
import clientState from './apollo-link-state';

Vue.use(VueApollo);

export default function createProvider() {
  const { apolloClient } = createApolloClient({
    httpEndpoint: 'https://startups-project-mytvsxrgeb.now.sh/',
    tokenName: 'startupfest-token',
    clientState,
    connectToDevTools: true,
  });

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {},
    errorHandler(error) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error(error.message);
      }
    },
  });

  return apolloProvider;
}
