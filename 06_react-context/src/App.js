import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import CrudApi from "./components/CrudApi";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <div>
      <h1>React context</h1>
      <a href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
