import React, { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi'
import { IoIdCardOutline } from 'react-icons/io5'
import { PiChartLineUpThin } from 'react-icons/pi'
import { PiDeviceTabletLight } from 'react-icons/pi'
import { FaWpforms } from 'react-icons/fa'
import { TbApps } from 'react-icons/tb'
import { PiPersonLight } from 'react-icons/pi'

function Nav(props) {
    const [active, IsActive] =useState(1);


    return (
        <div>
            <div className=' d-flex'>
                <div className='d-flex col  ' onClick={()=>IsActive(1)} style={active===1?{backgroundColor:'white'}:{color:'black'}} >
                    <IoHomeOutline className=' n2 nav7 ' />
                    <p className='nav2  mt-2'>Home</p>
                </div>
                <div className='nav1 d-flex col'  onClick={()=>IsActive(2)} style={active===2?{backgroundColor:'white'}:{color:'black'}}>
                    <TfiEmail className=' n5 nav7' />
                    <p className='nav3 mt-2'>Email</p>
                </div>
                <div className='nav1 d-flex col'  onClick={()=>IsActive(3)} style={active===3?{backgroundColor:'white'}:{color:'black'}}>
                    <IoIdCardOutline className=' n55 nav7' />
                    <p className='mt-2'>Interface</p>
                </div>
                <div className='nav1 d-flex col'  onClick={()=>IsActive(4)} style={active===4?{backgroundColor:'white'}:{color:'black'}}>
                    <PiChartLineUpThin className=' n22 mt-2 nav7' />
                    <p className='mt-2'>Charts</p>
                </div>
                <div className='nav1 d-flex col'  onClick={()=>IsActive(5)} style={active===5?{backgroundColor:'white'}:{color:'black'}}>
                    <PiDeviceTabletLight className=' n7  nav7' />
                    <p className='mt-2'>Tables</p>
                </div>
                <div className='nav1 d-flex col' onClick={()=>IsActive(6)} style={active===6?{backgroundColor:'white'}:{color:'black'}}>
                    <FaWpforms className=' n7 mt-2 nav7' />
                    <p className='nav2 mt-2'>Forms</p>
                </div>
                <div className='nav1 d-flex col'  onClick={()=>IsActive(7)} style={active===7?{backgroundColor:'white'}:{color:'black'}}>
                    <TbApps className='nn2 nav7' />
                    <p className='mt-2'>Appviews</p>
                </div>
                <div className='nav1 d-flex col'  onClick={()=>IsActive(8)} style={active===8?{backgroundColor:'white'}:{color:'black'}}>
                    <PiPersonLight className=' n7 mt-2 nav7' />
                    <p className='mt-2'>Pages</p>
                </div>
            </div>
            
            <div className='container d-flex nav5 '>
            {
                active == 1 && <>
              
                <p className='mt-2' >Dashboard One</p>
                <p className='nav4 mt-2 '>Dashboard Two</p>
                <p className='nav4 mt-2 '>Dashboard Three</p>
                <p className='nav4 mt-2 '>Dashboard Four</p>
                <p className='nav4 mt-2 '> Analytics</p>
                <p className='nav4 mt-2 '>Widgets</p>
                   
                
                </>
            }

            {
                active == 2 && <>
                <p className='mt-2 ' >Inbox</p>
                <p className='nav4 mt-2 '>View Email</p>
                <p className='nav4 mt-2 '>Compose Email</p>
                </>
            }
            {
                active == 3 && <>
                       <p className='mt-2'>Animations </p>
                       <p className='nav4 mt-2'>Google Maps </p>
                       <p className='nav4 mt-2'>Data Maps</p>
                       <p className='nav4 mt-2'>Code Editor</p>
                       <p className='nav4 mt-2'> Wizard</p>
                </>
            }
             {
                active == 4 && <>
                       <p className='mt-2'>Flot Charts </p>
                       <p className='nav4 mt-2 '>Bar Charts </p>
                       <p className='nav4 mt-2'>Line Charts</p>
                       <p className='nav4 mt-2'>Area Charts</p>
                       
                </>
            }
             {
                active == 5 && <>
                      
                       <p className='mt-2' >Normal Table</p>
                       <p className='nav4 mt-2'>Data Table</p>
                    
                </>
            }
             {
                active == 6 && <>
                      <p className='mt-2'>Form Element</p>
                       <p className='nav4 mt-2'>Form Components </p>
                       <p className='nav4 mt-2'>Form Examples</p>
                </>
            }
             {
                active == 7 && <>
                  <p className='mt-2'>Notification </p>
                       <p className='nav4 mt-2'>Alerts</p>
                       <p className='nav4 mt-2'>Modals</p>
                       <p className='nav4 mt-2'>Buttons</p>
                       <p className='nav4 mt-2'>Tabs</p>
                       <p className='nav4 mt-2'>Accordian</p>
                       <p className='nav4 mt-2'>Dailoge</p>
                       <p className='nav4 mt-2'>Popover</p>
                       <p className='nav4 mt-2'>Tooltips</p>
                       <p className='nav4 mt-2'>Dropdown</p>
                      
                     
                </>
            }
             {
                active == 8 && <>
                 <p className='mt-2'>Contact </p>
                       <p className='nav4 mt-2'>Invoice</p>
                       <p className='nav4 mt-2'>Typography</p>
                       <p className='nav4 mt-2'>Color</p>
                       <p className='nav4 mt-2'>Login Register</p>
                       <p className='nav4 mt-2'>404 Page</p>
                     
                </>
            }
              


            </div>

        </div>

    );
}

export default Nav;