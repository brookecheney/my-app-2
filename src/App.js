import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route exact path="/" component={Home} >
            <Home />
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
