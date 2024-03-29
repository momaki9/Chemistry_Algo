import Algo from "./pages/Algo";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Outline from "./components/Outline";
import Random from "./pages/Random";
import Topics from "./components/nomenclature/Topics";
import BinaryIonic from "./components/nomenclature/BinaryIonic";
import EandMFormula from "./components/formulas/EandMFormula";
import EmpiricalFormula from "./components/formulas/EmpiricalFormula";

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/molarity"
            element={<Algo />}
          />
          <Route
            path="/dev"
            element={<Random />}
          />
          <Route
            path="/topics"
            element={<Outline />}
          />
          <Route
            path="/nomenclature"
            element={<Topics />}
          />
          <Route
            path="/nomenclature/binaryionic"
            element={<BinaryIonic />}
          />
            <Route
            path="/formula"
            element={<EandMFormula />}
          />
          <Route
            path="/formula/empirical"
            element={<EmpiricalFormula />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
