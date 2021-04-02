import { Header, Footer, Loader } from './component/Layout';
import Home from './component/Home';


const App = () => {
    return (
      <div className="App">
          <Header/>
          <Loader/>
          <Home/>
          <Footer/>
      </div>
    );
}

export default App;
