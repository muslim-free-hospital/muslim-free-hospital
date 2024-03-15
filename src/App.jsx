import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import Slider from "./Components/Slider";
import About from "./Components/About";
import Department from "./Components/Department";
import Gallery from "./Components/Gallery";
import Startup from "./Components/Startup";
import Team from "./Components/Team";
import AppointmentForm from "./Components/AppointmentForm";
import Blog from "./Components/Blog";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "./store";

function App() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      dispatch(setArticles(res.data));
    }, [articles]);
  });

  return (<></>
  )
}

export default App;
