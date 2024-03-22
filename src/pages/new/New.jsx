import React, { useState } from 'react'

//importing sass
import './new.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'

//importing images
import NOIMG from '../../assets/noimg.jpg'


//importing icons
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export default function New({inputs,title}) {

  const [file,setFile]=useState("")
  console.log(file)
  return (
    <div className='new'>
      <SideBar></SideBar>

      <div className='newContainer'>
         <Navbar></Navbar>
         <div className='top'>
           <h1>{title}</h1>
         </div>
         <div className='bottom'>
            <div className='left'>
                 <img src={file?URL.createObjectURL(file):NOIMG} alt=''></img>
            </div>
            <div className='right'>
               <form>
                  <div className='formInput'>
                    <label htmlFor='file' >Image: <DriveFolderUploadIcon className='icon'></DriveFolderUploadIcon></label>
                    <input type='file' id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}></input>
                  </div>
                 
                  {
                    inputs.map((input)=>(
                      <div className='formInput' key={input.id}>
                       <label>{input.label}</label>
                       <input type={input.type} placeholder={input.placeholder}></input>
                      </div>
                    ))
                  }
                  <button className='formBtn'>Send</button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}
