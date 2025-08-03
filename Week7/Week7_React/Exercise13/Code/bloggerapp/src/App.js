//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Blogs } from './Blogs';
import { Books } from './Books';
import { Courses } from './Courses';

function App() {
  
  const [view, SetView] = useState("blog")
  
  function Content(){
    if(view==="blog"){
      return <Blogs/>
    }
    else if(view==="book"){
      return <Books/>
    } 
    else if(view==="course"){
      return <Courses/>
    }
  }
  return (
    <div className="App">
      <h1>Blogger App</h1>
      <button onClick={()=>{SetView("blog")}}>Blogs</button>
      <button onClick={()=>{SetView("book")}}>Books</button>
      <button onClick={()=>{SetView("course")}}>Courses</button>
      {Content()}
    </div>
  );
}

export default App;
