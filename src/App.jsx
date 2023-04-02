import { useState, useEffect  } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogContainer from './Components/BlogContainer/BlogContainer'
import SideBar from './Components/SideBar/SideBar'
import QuestionAnswer from './Components/QuestionAnswer/QuestionAnswer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime, setWatchTime] = useState("")
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if(previousWatchTime){
     const sum = previousWatchTime + time;
     localStorage.setItem("watchTime", sum);
     setWatchTime(sum);
    //  console.log(sum);

    }
    else{
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };
//For book marked button
const [blogTitle, setBlogTitles] = useState([]);
const [titleCount, setTitleCount] = useState(0);
const handleBookMarked = (title) => {
  const previousTitles = localStorage.getItem("blogTitles");

  if (previousTitles) {
    const titlesArray = previousTitles.split(",");
    if (!titlesArray.includes(title)) {
      titlesArray.unshift(title);
      localStorage.setItem("blogTitles", titlesArray.join(","));
      setBlogTitles(titlesArray);
      setTitleCount(titlesArray.length);
    } else {
      toast.error("This blog post has already been bookmarked!");
    }
  } else {
    localStorage.setItem("blogTitles", title);
    setBlogTitles([title]);
    setTitleCount(1);
  }
};
useEffect(() => {
  // Delete bookmarked titles from local storage on page refresh
  localStorage.removeItem("blogTitles");
}, []);





// const [blogTitle, setBlogTitles] = useState([]);
// const [titleCount, setTitleCount] = useState(0);

// const handleBookMarked = (title) => {
//   const previousTitles = localStorage.getItem("blogTitles");

//   if (previousTitles) {
//     const titlesArray = previousTitles.split(",");
//     if (!titlesArray.includes(title)) {
//       titlesArray.unshift(title);
//       localStorage.setItem("blogTitles", titlesArray.join(","));
//       setBlogTitles(titlesArray);
//       setTitleCount(titlesArray.length);
//     }
//   } else {
//     localStorage.setItem("blogTitles", title);
//     setBlogTitles([title]);
//     setTitleCount(1);
//   }
// };

// useEffect(() => {
//   // Delete bookmarked titles from local storage on page refresh
//   localStorage.removeItem("blogTitles");
// }, []);

  return (
    <div className="App">

      <Header></Header>
      <hr />
      <div className="main-container row container m-auto mt-5 ">
        <div className="blog-container col-md-8">
          <BlogContainer 
          handleWatchTime={handleWatchTime}
          handleBookMarked={handleBookMarked}
          ></BlogContainer>
        </div>
        <div className="side-bar col-md-4 ">
          <SideBar 
          watchTime={watchTime}
          blogTitle={blogTitle}
          titleCount={titleCount}

          
          ></SideBar>
        </div>
      </div>
      <QuestionAnswer></QuestionAnswer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
