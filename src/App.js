import "./App.css";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
      </Routes>      
    </div>
  );
}

export default App;
