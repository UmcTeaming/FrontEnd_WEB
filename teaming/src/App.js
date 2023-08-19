import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/LoginLinks/Login";
import Bar from "./components/Bar";
import Signup from "./pages/LoginLinks/Signup";
import NewProject from "./pages/NewProject";
import EditProject from "./pages/EditProject";
import Mypage from "./pages/MypageLinks/Mypage";
import ChangePw from "./pages/MypageLinks/ChangePw";
import PortfolioList from "./pages/PortfolioLinks/portfolioList";
import Project from "./pages/ProjectLinks/Project";
import FileDetail from "./pages/FileLinks/FileDetail";
import End from "./pages/EndLinks/End";
import { Home } from "./pages/Home/Home.js";
import FindPW from "./pages/LoginLinks/FindPW";
import CleanHome from "./pages/CleanHome/CleanHome";
import { OngoingProject } from "./pages/OngoingProject/OngoingProject";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState, tokenState } from "./components/atom";
import axios from "axios";
import { Calendar } from "./pages/Calendar/Calendar";
import { Schedulecalendar } from "./pages/Schedulecalendar/Schedulecalendar";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

function App() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  return (
    <div>
      <BrowserRouter>
        <Bar />

        <Routes>
          <Route path="/" element={isLogin ? <Home /> : <Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/findPW" element={<FindPW />} />
          <Route path="/newProject" element={<NewProject />} />
          {isLogin ? <Route path="/mypage" element={<Mypage />} /> : null}
          {isLogin ? <Route path="/mypage/*" element={<ChangePw />} /> : null}

          <Route path="/cleanhome" element={<CleanHome />} />

          <Route path="/:projectId/calendar" element={<Calendar />} />
          <Route path="/schedulecalendar" element={<Schedulecalendar />} />
          <Route path="/ongoingProject" element={<OngoingProject />} />
          {/* 포트폴리오 */}
          <Route path="/portfolio" element={<PortfolioList />} />
          <Route path="/:projectId/project-files" element={<Project />} />
          <Route path="/:projectId/final-files" element={<Project />} />
          <Route path="/:projectId/edit" element={<EditProject />} />
          <Route
            path="/:projectId/project-files/:fileId"
            element={<FileDetail />}
          />
          <Route
            path="/:projectId/final-files/:fileId"
            element={<FileDetail />}
          />
          <Route path="/:projectId/End" element={<End />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
