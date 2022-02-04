import React,{useEffect,useState} from 'react'
import './Header.css'
function Header() {

const[show,setShow]=useState(false)
useEffect(() => {
  window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
      setShow(true)
    }else setShow(false)
  });
  return()=>{
    window.removeEventListener("scroll")
  };
  
}, [])
   
    return (
        <div className={`nav ${show && "nav_black"}`}>
      <img src ="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      className="nav_logo"
      alt="Netflix logo/"/>
        </div>
    )
}

export default Header
