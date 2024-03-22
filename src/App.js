//importing components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

//importing require React router dom component
import { BrowserRouter,Route,Routes } from "react-router-dom";

//importing form data
import {userInputs} from './formSource'
import { productInputs } from "./formSource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route element={<Home></Home>} path="/"></Route>
           <Route element={<Login></Login>} path="login"></Route>
           <Route path="users">
             <Route index element={<List></List>}></Route>
             <Route path=":userId" element={<Single></Single>}></Route>
             <Route path="new" element={<New inputs={userInputs} title='Add New Users'></New>}></Route>
           </Route>
           <Route path="products">
             <Route index element={<List></List>}></Route>
             <Route path=":userId" element={<Single></Single>}></Route>
             <Route path="new" element={<New inputs={productInputs} title='Add New Products'></New>}></Route>
           </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
