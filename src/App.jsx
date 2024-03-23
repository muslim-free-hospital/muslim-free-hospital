import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BlogPage from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";

function App() {
  return (
    <>
      <Loading />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<BlogPage />} />
        <Route path="/articles/:id" element={<BlogDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
