import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Navbar from './Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import News from './News'
import About from './pages/About'
import Contacts from './pages/Contacts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Api() {
  const [item,setItem] = useState([]);
  const [newtask,setNewtask] = useState('');
  const [show,setShow] = useState(false);
  useEffect(() =>{
    axios.get('http://localhost:9900/gettask').then(
      arr => setItem(arr.data)
    )
  },[])
  const submitHandler = e =>{
    e.preventDefault();
    axios.post('http://localhost:9900/addtask',{todo:newtask}).then(
      arr => setItem(arr.data)
    )
  }
  const deleteHandler = id =>{
    axios.delete(`http://localhost:9900/delete/${id}`).then(
      arr => setItem(arr.data)
    )
  }
  return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/News' element={<News />} />
          <Route exact path='/pages/About' element={<About />} />
          <Route exact path='/pages/Contacts' element={<Contacts />} />
        </Routes>
        </BrowserRouter>
        <center><button style={{marginTop:'25px'}} className="btn btn-primary" onClick={() => setShow(!show)}>Show/Hide Data <i class="fa-brands fa-apple"></i> </button></center>
      {
        show?<center>
        <form onSubmit={submitHandler}>
        <input type="text" value={newtask} onChange={(e)=>setNewtask(e.target.value)}/>
        <input type="submit" className="btn btn-primary" value="submit" style={{marginLeft:'10px'}} />
        </form><br />
        {item.map(task => 
          <div className='dta' key={task._id}>
            <h3>{task.todo} </h3><button className="btn btn-primary" onClick={()=>deleteHandler(task._id)}>Delete</button>
          </div>)}
      </center>:null
      }
    </div>
  )
}