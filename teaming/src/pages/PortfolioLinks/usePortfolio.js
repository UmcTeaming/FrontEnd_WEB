// usePortfolio.js
import axios from "axios";

export async function fetchPortfolioData(memberId) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/member/${memberId}/portfolio`);
    if (response.data && response.data.data && response.data.data.portfolio) {
      // 포트폴리오 데이터가 있는 경우 정렬
      return response.data.data.portfolio.sort((a, b) =>
        new Date(a.projectStartDate) - new Date(b.projectStartDate)
      );
    } else {
      return [];
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}

export async function fetchOngoingProjectData(memberId) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/member/${memberId}/progressProjects`);
    if (response.data && response.data.data && response.data.data.progressProjects) {
      // 진행중 데이터가 있는 경우 정렬
      return response.data.data.progressProjects.sort((a, b) =>
        new Date(a.projectStartDate) - new Date(b.projectStartDate)
      );
    } else {
      return [];
    }
  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error;
  }
}

