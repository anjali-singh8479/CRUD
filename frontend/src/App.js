import {BrowserRouter,Route,Routes} from "react-router-dom"
import Allbooks from "./Pages/Allbooks";
import Add from "./Pages/Add";
import Update from "./Pages/Update";
import "./style.css"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/allbooks" element={<Allbooks/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/update/:id" element={<Update />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}


export default App;
