import logo from './logo.svg';
import img1 from './download.webp'
import img2 from './1.jpg.jpg'

import { BiSearchAlt2 } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'
import { BsBell } from 'react-icons/bs'
import { CgMenuRound } from 'react-icons/cg'
import { BsChatLeftText } from 'react-icons/bs'
import { BsArrowLeft } from 'react-icons/bs'
import './App.css';
import { useState } from 'react';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Main from './Components/Main';

function App() {
  // const [width, setWidth] = useState(95);
  // const changeWidth = (event) => {
  //   setWidth(event.target.value);
  // };
  return (
    <>

      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Main/>}/> 
        </Routes>
      </BrowserRouter>
    </>
    // <div className="a1">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-white">
    //         <a href="#"><img src={img1} alt='' className='mt-2' /></a>
    //       </div>

    //       <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
    //         <div className='d-flex a3 mt-2'>
    //           <div className=" dropdown ">
    //             <a className="" data-bs-toggle="dropdown" data-toggle="dropdown" role="button" aria-expanded="false" >
    //               <BiSearchAlt2 className='a2' />
    //             </a>
    //             <div className="dropdown-menu ">

    //               <input type='text' placeholder='Search' className=''/>
    //             </div>
    //           </div>


    //           <div className=" dropdown  ">
    //             <a className="" data-bs-toggle="dropdown" data-toggle="dropdown" role="button" aria-expanded="false" >
    //               <TfiEmail className='a2' />
    //             </a>
    //             <div className="dropdown-menu ">
    //               <p className='text-center a9 mt-2'>Messages</p>
    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>David Belle</h6>
    //                   <p className='a5'>Cum sociis natoque penatibus..</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>Jonathan Morris</h6>
    //                   <p className='a5'>Cum sociis natoque penatibus..</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>Fredric Mitchell</h6>
    //                   <p className='a5'>Cum sociis natoque penatibus..</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>David Belle</h6>
    //                   <p className='a5'>Cum sociis natoque penatibus..</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>Glenn Jecobs</h6>
    //                   <p className='a5'>Cum sociis natoque penatibus..</p>
    //                 </div>
    //               </div>


    //               <p className='text-center a8'>View All</p>

    //             </div>
    //           </div>

    //           <div className=" dropdown ">
    //             <a className="" data-bs-toggle="dropdown" data-toggle="dropdown" role="button" aria-expanded="false" >
    //               <BsBell className='a2' />
    //             </a>
    //             <div className="dropdown-menu ">
    //               <p className='text-center a9 mt-2'>Notification</p>
    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>David Belle</h6>
    //                   <p className='a5'>Cum sociis natoque penatibus..</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>Jonathan Morris</h6>
    //                   <p className='a5'>Cum sociis natoque penatibus..</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>Fredric Mitchell</h6>
    //                   <p className='a5'>Cum sociis natoque penatibus..</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>David Belle</h6>
    //                   <p className='a5'>Cum sociis natoque penatibus..</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>Glenn Jecobs</h6>
    //                   <p className='a5'>Cum sociis natoque penatibus..</p>
    //                 </div>
    //               </div>


    //               <p className='text-center a8'>View All</p>

    //             </div>
    //           </div>

    //           <div className=" dropdown ">
    //             <a className="" data-bs-toggle="dropdown" data-toggle="dropdown" role="button" aria-expanded="false" >
    //               <CgMenuRound className='a2' />
    //             </a>
    //             <div className="dropdown-menu ">
    //               <p className='text-center a9 mt-2'>Tasks</p>
    //               <div className=' dropdown-item'>
    //                 <p>HTML5 Validation Report </p>

    //                 <input
    //                   type='range'
    //                   onChange={changeWidth}
    //                   min={1}
    //                   max={100}
    //                   step={1}
    //                   value={width}
    //                   className='dfd'
    //                 />

    //               </div>

    //             </div>
    //           </div>

    //           <div className=" dropdown ">
    //             <a className="" data-bs-toggle="dropdown" data-toggle="dropdown" role="button" aria-expanded="false" >
    //               <BsChatLeftText className='a2' />
    //             </a>
    //             <div className="dropdown-menu a13">
    //             <p className='text-center a9 mt-2'>Chat</p>
    //               <div className='dropdown-item d-flex a11 mt-2'>
    //                 <BsArrowLeft className='mt-1 a12' />
    //                 <input type='text' className='a10 ' placeholder='Search People' />
    //               </div>

    //               <div className='d-flex dropdown-item mt-3'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>David Belle</h6>
    //                   <p className='a5'>Available</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>David Belle</h6>
    //                   <p className='a5'>Last seen 2 minutes ago</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>David Belle</h6>
    //                   <p className='a5'>Available</p>
    //                 </div>
    //               </div>

    //               <div className='d-flex dropdown-item'>
    //                 <div>
    //                   <img src={img2} alt='' className='a4' />
    //                 </div>
    //                 <div className='a7 mt-1'>
    //                   <h6 className='a6'>David Belle</h6>
    //                   <p className='a5'>Last seen 3 hours ago</p>
    //                 </div>
    //               </div>

    //               <p className='text-center a8'>View All</p>

    //             </div>
    //           </div>


    //         </div>


    //       </div>


    //     </div>
    //     <br/> <br/>
    //     <Nav/>
    //     <br/> 
    //    <Home/>
    //    <br/>
    //    <Comp2/>
    //    <br/>
    //    <Comp3/>
    //    <br/> <br/>

    //   </div>
    //   <div className='a1'>
    //   <p className='text-center text-white mt-2'>Copyright © 2018 SRTtheme. All rights reserved. Template by Colorlib.</p>
    //   </div>

    // </div>
  );
}

export default App;
