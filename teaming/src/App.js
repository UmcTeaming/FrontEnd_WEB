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
import { Home } from "./pages/Home/Home.js";
import FindPW from "./pages/LoginLinks/FindPW";
import CleanHome from "./pages/CleanHome/CleanHome";
import { OngoingProject } from "./pages/OngoingProject/OngoingProject";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState, tokenState } from "./components/atom";
import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const token = useRecoilValue(tokenState);
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
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/*" element={<ChangePw />} />
<<<<<<< HEAD

          <Route path="/cleanhome" element={<CleanHome />} />
=======
          <Route path="/home" element={<Home />} />{" "}
          {/* 원래 경로는 / 이지만 확인을 위해 임의로 /home으로 작성했습니다  */}
>>>>>>> 78ed7a9a712493cca8b974dff6c4c20e9648bc22
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/ongoingProject" element={<OngoingProject />} />
          {/* 포트폴리오 */}
          <Route path="/portfolio" element={<PortfolioList />} />
          <Route path="/:id/project-files" element={<Project />} />
          <Route path="/:id/final-files" element={<Project />} />
          <Route path="/:id/project-files/:fileId" element={<FileDetail />} />
          <Route path="/:id/final-files/:fileId" element={<FileDetail />} />
          <Route path="/:id/End" element={<End />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
