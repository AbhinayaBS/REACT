// import Login from "./Component/Digix/Login"
//import Signin from "./Component/Digix/Signinimport

//import ComponentLifeCycle from "./Component/Day8/ComponentLifeCycle";
//import TryCatch from "./Component/Day8/TryCatch";
//import { ErrorBoundry } from "./Component/Day8/Car";
//import ErrorBoundry1 from "./Component/Day8/ErrorBoundry1";

//import BasicButtons from "./Component/Day6/demo";

//import List from "./Component/Day6/List"
//import List2 from "./Component/Day6/List2"

 //export default function App(){
    // return(
        // <div>
           {/* <ErrorBoundry> 
            <Hero heroName="Abhinaya"></Hero>
           </ErrorBoundry>
           <ErrorBoundry1>
            <Hero heroName="Joker"></Hero>
           </ErrorBoundry1>
           */}
           {/* <TryCatch fruit="Onion"></TryCatch> */}

        //    <ComponentLifeCycle></ComponentLifeCycle>


        // </div>
    // )
// }

import logo from './logo.svg';
import './App.css';
import Main from "./components/Context/Main";
import Purity from "./components/Purity";
import StateHook from "./components/StateHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  return <Main />;
}

export default App;