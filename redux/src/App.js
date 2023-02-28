// import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./container/Header";
import ProductDetail from "./container/ProductDetail";
import ProductListing from "./container/ProductListing";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Header /> */}
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
