import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Bar from "./components/Bar";
import Signup from "./pages/Signup";
import FindPW from "./pages/FindPW";
import NewProject from "./pages/NewProject";
import Mypage from "./pages/Mypage";
import ChangePw from "./pages/ChangePw";
import PortfolioList from "./pages/portfolioList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Bar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/findPW" element={<FindPW />} />
          <Route path="/newProject" element={<NewProject />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/*" element={<ChangePw />} />
          {/* 포트폴리오 */}
          <Route path="/portfolio" element={<PortfolioList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
