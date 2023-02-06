import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from "@apollo/client"
import { createUploadLink } from 'apollo-upload-client'

const httpLink = createUploadLink({
  uri: 'http://127.0.0.1:8080/graphql',
}) as unknown as ApolloLink

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
