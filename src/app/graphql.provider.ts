import {Apollo, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {ApplicationConfig, inject} from '@angular/core';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from "@apollo/client/core";
import {setContext} from "@apollo/client/link/context";

// Note:
// In localstorage:
// = SET the url of the backend 'host', eg http://localhost:8888
// = SET the JWT security 'token'
const host = localStorage.getItem('host');
const token = localStorage.getItem('token');

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const uri =  host + '/graphql';
  const httpLink = inject(HttpLink);

  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));

  const auth = setContext((operation, context) => {
    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  });

  return {
    link: ApolloLink.from([basic, auth, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
