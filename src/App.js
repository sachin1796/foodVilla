import './App.css';


import Header from "./components/Header"
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './utils/Store';

function App() {

  return (
    <div className="App">
      <Provider store={Store}>      
          <Header   
        // user={{
        //   name:"sachin",
        //   email:"s@v.com"
        // }}
        />
          <Outlet />
      </Provider>

    </div>
  );
}

export default App;
