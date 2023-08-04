import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/LoginLinks/Login";
import Bar from "./components/Bar";
import Signup from "./pages/LoginLinks/Signup";
import NewProject from "./pages/NewProject";
import Mypage from "./pages/MypageLinks/Mypage";
import ChangePw from "./pages/MypageLinks/ChangePw";
import PortfolioList from "./pages/PortfolioLinks/portfolioList";
import Project from "./pages/ProjectLinks/Project";
import FileDetail from "./pages/FileLinks/FileDetail";
import End from "./pages/EndLinks/End";
import { Calendar } from "./pages/Calendar";
import {Home}  from "./pages/Home/Home.js";
import { OngoingProject } from "./pages/OngoingProject";
import FindPW from "./pages/LoginLinks/FindPW";

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
          <Route path="/home" element={<Home />} />{" "}
          {/* 원래 경로는 / 이지만 확인을 위해 임의로 /home으로 작성했습니다  */}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/ongoingProject" element={<OngoingProject />} />
          {/* 포트폴리오 */}
          <Route path="/portfolio" element={<PortfolioList />} />
          <Route path="/:id/project-files" element={<Project />} />
          <Route path="/:id/final-files" element={<Project />} />
          <Route path="/:id/files/:fileId" element={<FileDetail />} />
          <Route path="/:id/End" element={<End />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
