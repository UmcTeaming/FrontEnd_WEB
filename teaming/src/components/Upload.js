import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "GmarketSans";
  width: 752px;
  height: 141px;
  background-color: #e6e6e6;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    text-align: center;
    font-size: 12px;
    svg {
      margin-bottom: 11.44px;
    }
  }
`;

const Input = styled.input`
  display: none;
`;

const Upload = () => {
  return (
    <Wrapper>
      <Form>
        <label for="upload">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            width="25.56px"
            height="25.56px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <br />
          <span>프로젝트에 업로드할 파일을 선택해주세요</span>
          <Input type="file" accept="" id="upload" />
        </label>
      </Form>
    </Wrapper>
  );
};
export default Upload;
