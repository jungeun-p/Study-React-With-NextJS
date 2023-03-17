import Nav from "./components/Navigation/Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Mypage from "./components/Mypage";
import Header from "./components/Navigation/Header";
import "./App.css";

function App() {
  const Layout = () => {
    return (
      <div>
        <Header />
        <div className="mainContainer">
          <Outlet />
        </div>
        <Nav />
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="mypage" element={<Mypage />} />
      </Route>
    </Routes>
  );
}

export default App;
