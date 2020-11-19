import Navbar from './components/Navbar/Navbar';
import { Provider } from 'jotai';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import { Suspense, lazy } from 'react';
const Cart = lazy(() => import('./components/Cart/Cart'));
const Products = lazy(() => import('./components/Products/Products'));



function App() {
  return (
    <Provider>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/shop" />} />
            <Route path="/shop" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route render={() => <Redirect to="/shop" />} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
