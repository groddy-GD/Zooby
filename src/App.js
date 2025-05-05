import { Route, Routes} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Signin from "./pages/Auth/SignIn/Signin.jsx";
import Onboarding from "./pages/Onboarding/Onboarding.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Signup from "./pages/Auth/SignUp/SignUp.jsx";

function App() {

  return (
    <div>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* protected route */}
      </Routes>
    </div>
  );
}

export default App;
