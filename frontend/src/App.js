import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './views/Main';
import Product from './views/Product';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/product/:id" component={Product} />
      <Footer />
    </Router>
  );
}

export default App;
