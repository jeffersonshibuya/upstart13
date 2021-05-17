import Routes from "./routes";
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './styles/global'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
