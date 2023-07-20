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
import Project from "./pages/Project";
import FileDetail from "./pages/FileDetail";
import End from "./pages/End";
import {Home} from "./pages/Home";
import {Calendar} from "./pages/Calendar";


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

          <Route path='/home' element={<Home />} />   {/* 원래 경로는 / 이지만 확인을 위해 임의로 /home으로 작성했습니다  */}
          <Route path="/calendar" element={<Calendar/>}/>

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
