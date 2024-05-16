import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maincomponent from "./Pages/Maincomponent/Maincomponent";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Maincomponent} />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
