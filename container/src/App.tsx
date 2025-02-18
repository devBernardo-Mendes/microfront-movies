import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import GlobalStyled from "./index";

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyled />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
