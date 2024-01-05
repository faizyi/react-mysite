import React, { useState } from 'react'
import './website.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import img1 from './../assets/img1-removebg-preview.png'
import img2 from './../assets/img2-removebg-preview.png'
import img3 from './../assets/img3-removebg-preview.png'

function Website() {
    let [mystyle, setMyStyle] = useState({
        backgroundColor:'white',
        color : 'black'
    })
    let [myicon, setMyIcon] = useState(<DarkModeIcon/>)

    let [menuicon, setMenuIcon] = useState({
        text: 'icon',
        icon : <MenuIcon/>
    })
    let changeIcon =()=>{
        if(menuicon.text=='icon'){
            setMenuIcon({
                text : 'ico',
                icon : <CloseIcon/>
            })
        }else{
            setMenuIcon({
                text : 'icon',
                icon : <MenuIcon/>
            })
        }
    }
    let icon =()=>{
        if(mystyle.backgroundColor=='white'){
            setMyStyle({
                backgroundColor:'black',
                color:'white'
            })
            setMyIcon(<LightModeIcon/>)
        }else{
            setMyStyle({
                backgroundColor:'white',
                color:'black'
            })
            setMyIcon(<DarkModeIcon/>)
        }
    }
  return (
    <div>
      <header style={mystyle}>
        <div style={mystyle} className='logo'>
            <h1>My Site</h1>
        </div>
        <nav>
            <input type="checkbox" id="check" />
            <div className='icon'>
                <label onClick={changeIcon} for='check'>{menuicon.icon}</label>
            </div>
            <ul style={mystyle}>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>PRODUTCS</li>
                <li>ABOUT</li>
                <li>SIGN UP</li>
                <li onClick={icon}>{myicon}</li>
            </ul>
        </nav>
      </header>


      <div className='content-section'>
        <div className='section'>
            <h1>My Site</h1>
            <p>Dinosaurs are Cool</p>
            <button>Dinosaurs Tutorial - 5min</button>
        </div>
      </div>


      <div style={mystyle} className='img-section'>
        <label className='img1'>
            <img src={img1} alt="" />
            <h3>Easy to Use</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facilis ratione obcaecati nam id?</p>
        </label>
        <label className='img2'>
            <img src={img2} alt="" />
            <h3>Focus on What Matters</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facilis ratione obcaecati nam id?</p>
        </label>
        <label className='img3'>
            <img src={img3} alt="" />
            <h3>Powered by React</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facilis ratione obcaecati nam id?</p>
        </label>
      </div>





      </div>
  )
}

export default Website