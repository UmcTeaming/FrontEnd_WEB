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
    console.error("Fetch Portfolio Data Error:", error);
    throw error;
  }
}
