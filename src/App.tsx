import { Route, Routes } from "react-router-dom"
import Page from "./pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page.NavBar />}>
        <Route index={true} element={<Page.LoginPage />} />
        <Route path="signup" element={<Page.SignupPage />} />
        <Route path="home" element={<Page.HomePage />} />
        <Route path="upload" element={<Page.UploadPage />} />
        <Route path="officeHour/:id" element={<Page.OfficeHourDetailPage />}/>
        <Route path="edit/:id" element={<Page.EditPage />} />
      </Route>
    </Routes>
  );
}

export default App
