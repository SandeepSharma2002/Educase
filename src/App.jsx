import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { LoginPage } from "./components/LoginPage";
import { SignUppage } from "./components/SignUpPage";
import { ProfilePage } from "./components/ProfilePage";

function App() {
  return (
    <div className="bg-main-colour">
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/signUp" Component={SignUppage} />
        <Route path="/profile" Component={ProfilePage} />
      </Routes>
    </div>
  );
}

export default App;
