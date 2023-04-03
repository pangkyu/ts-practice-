import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" Component={Add} />
        <Route path="/book/:id" Component={Detail} />
        <Route path="/edit/:id" Component={Edit} />
        <Route path="/signin" Component={Signin} />
        <Route path="/" Component={Home} />
        <Route Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
