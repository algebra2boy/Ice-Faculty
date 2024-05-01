import { Route, Routes } from "react-router-dom";
import Page from "./pages";
import { UserProvider } from "./components/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Page.NavBar />}>
          <Route index={true} element={<Page.LoginPage />} />
          <Route path="signup" element={<Page.SignupPage />} />
          <Route path="home" element={<Page.HomePage />} />
          <Route path="upload" element={<Page.UploadPage />} />
          <Route path="edit/:id" element={<Page.EditPage />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
