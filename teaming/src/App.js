import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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
import {
  loginState,
  memberIdState,
  nickNameState,
  tokenState,
} from "./components/atom";
import axios from "axios";
import { Calendar } from "./pages/Calendar/Calendar";
import { Schedulecalendar } from "./pages/Schedulecalendar/Schedulecalendar";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { getCookie, removeCookie } from "./components/Cookie";

axios.interceptors.request.use(
  function (config) {
    //const token = localStorage.getItem("token");
    const token = getCookie("token");
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer ${token}`;
    //setIsLogin(true);
    return config;
  },
  function (error) {
    //setIsLogin(false);
    //navigate("/");
    console.log(error, "dkfklns");
    return Promise.reject(error);
  }
);

function App() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  //const isLogin = localStorage.getItem("isLogin");

  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [nickName, setNickName] = useRecoilState(nickNameState);
  const localMemebrId = localStorage.getItem("memberId");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/member/${getCookie(
          "memberId"
        )}/mypage`
      )
      .then((res) => {
        //console.log(res);
        setIsLogin(true);
        setMemberId(getCookie("memberId"));
        setNickName(localStorage.getItem("nickName"));
      })
      .catch((err) => {
        removeCookie("token");
        setIsLogin(false);
        alert("로그인 후 이용해주세요!");
        navigate("/");
      });
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default App;
