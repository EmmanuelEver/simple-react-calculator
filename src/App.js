import { Provider } from "react-redux";
import Calculator from "./components/Calculator";
import MainWrapper from "./components/MainWrapper";
import Theme from "./components/Theme";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <MainWrapper>
          <Calculator />
        </MainWrapper>
      </Theme>
    </Provider>
  );
}

export default App;
