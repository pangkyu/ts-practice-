import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/add" Component={Add} />
          <Route path="/book/:id" Component={Detail} />
          <Route path="/edit/:id" Component={Edit} />
          <Route path="/signin" Component={Signin} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
