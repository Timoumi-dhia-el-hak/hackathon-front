import React from 'react';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import AppRoot from './root';

const client = new ApolloClient({
	link: new HttpLink({
		uri: 'http://localhost:4000/'
	}),
	cache: new InMemoryCache()
	// for SSR, use:
	// cache: new Cache().restore(window.__APOLLO_STATE__ || {})
});

function App (){
	return (
		<ApolloProvider client={client}>
			<AppRoot />
		</ApolloProvider>
	);
}

export default App;
