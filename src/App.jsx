import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { useEffect } from "react";
import useAuthStore from "./store/authStore";

function App() {
  const [authUser] = useAuthState(auth);
  const setUser = useAuthStore((state) => state.setUser);
  const cachedUser = localStorage.getItem("user-info");

  useEffect(() => {
    if (cachedUser && authUser) {
      const userInfo = JSON.parse(cachedUser);
      setUser(userInfo);
    }
  }, [cachedUser, authUser, setUser]);

  console.log(authUser);

  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
