import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Helmet } from 'react-helmet';


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});
  
class Index extends React.Component {
  render() {
      return (
        <ApolloProvider client={client}>   
          <Helmet>
            <title>ALBO Examen</title>
          </Helmet>
          <App />          
        </ApolloProvider>
      );
  }
}
const rootElement = document.getElementById('root');
ReactDOM.render(<Index />, rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
