import React, { useEffect, useState } from 'react';
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import image from '../flag1.webp'
import img2 from '../flag2.webp'
import img3 from '../flag3.webp'
import img22 from '../1.jpg.jpg'



function Comp3(props) {
    const [Data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [updateTask, setupdateTask] = useState("")
    const [Task, setTask] = useState([]);
    const [Val, setVal] = useState([]);
    const [checked, setChecked] = useState(false);
    const [selectedItems, setSelectedItems] = useState([])
    const [isChecked, setisChecked]= useState([]);
    

   console.log(isChecked)





    const obj = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(isChecked),
    };


    useEffect(() => {
        GetallData()
    }, [])


    const GetallData = async () => {
        try {
            const response = await fetch('http://localhost:3000/Tasks')
            if (!response.ok) {
                console.log(` Error! Status: ${response.status}`);
            }
            const data = await response.json();
            setData(data);
        }
        catch (err) {
            console.log(err)
        };
    }

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchText(value);
    }
    const onAddTask = (e) => {
        e.preventDefault();
        setupdateTask(searchText)
    }


    const handleSearchh = () => {
        const new_array= [];
       if(Data.length == new_array.length)
       setChecked(false)
        GetallData(Data);
    }





    const DeleteTask = async () => {
        try {
            const response = await fetch(`http://localhost:3000/Tasks/${Val}`, { method: 'DELETE' },obj)
            console.log(response)
            if (response.ok) {
                console.log("success")
            }
            else {
                console.log("failed")
            }

        } catch (error) {

        }

    }
    // const  checkboxHandler =(e)=>{
    //     let isSelected = e.target.checked;
    //     let value = parseInt(e.target.value);
    //     setVal(value)
    //     if( isSelected ){
	// 		setSelectedItems( [...selectedItems, value ] )
	// 	}
        
    //     else{
	// 		setSelectedItems((prevData)=>{
	// 			return prevData.filter((id)=>{
	// 				return id!==value
	// 			})
	// 		})
	// 	}
    // }
    const handlecheckbox = (e)=>{
        const {value, checked}= e.target;
       
        if(checked)
        {
          setisChecked([...isChecked, value]);
        } else{
          setisChecked(isChecked.filter( (e)=>e!== value));
        }

      }

      const alldelete= async()=>{
       // console.log(isChecked);
       try {
        const response = await fetch(`http://localhost:3000/Tasks/${isChecked}`,obj)
       console.log(response)
      
        
       } catch (error) {
        console.log(error)
       }

      }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 cmp1'>
                    <div className='container'>
                        <h4 className='comp1 mt-3'>Realtime Visitors</h4>
                        <div className='d-flex mt-3'>
                            <div >
                                <h6 className='cmp3'>435,456</h6>
                                <p>Visitors last 24h</p>
                            </div>
                            <div className='cmp2'>
                                <h6 className='cmp3'>4,566</h6>
                                <p>Visitors last 30m</p>
                            </div>
                        </div>
                        <div className='cmp4' >
                            <VectorMap
                                map={worldMill}
                                containerStyle={{
                                    width: "800px",
                                    height: "1000px",
                                }}
                                backgroundColor="white"
                                series={{
                                    regions: [
                                        {
                                            values: {
                                                IN: "#19C89C",
                                                FR: "#19C89C",
                                                IT: "#19C89C",
                                                RU: "#19C89C",
                                                BR: "#19C89C",
                                                MY: "#191919",
                                                GB: "#191919",
                                                FK: "#191919",
                                                AR: "#191919",
                                                VE: "#191919",
                                                AF: "#191919",
                                                AL: "#191919",
                                                DZ: "#191919",
                                                AO: "#191919",
                                                AG: "#19C89C",
                                                AR: "#19C89C",
                                                AM: "#19C89C",
                                                AU: "#19C89C",
                                                AT: "#19C89C",
                                                AZ: "#19C89C",
                                                GR: "#19C89C",
                                                GD: "#19C89C",
                                                GT: "#19C89C",
                                                GN: "#19C89C",
                                                GW: "#19C89C",
                                                GY: "#19C89C",
                                                HT: "#19C89C",
                                                HN: "#19C89C",
                                                HK: "#19C89C",
                                                HU: "#19C89C",
                                                IS: "#19C89C",
                                                IN: "#19C89C",
                                                ID: "#19C89C",
                                                IR: "#19C89C",
                                                IQ: "#19C89C",
                                                RS: "#19C89C",
                                                KN: "#19C89C",
                                                LC: "#19C89C",
                                                VC: "#19C89C",
                                                SD: "#19C89C",
                                                CN: "#19C89C",
                                                IN: "#19C89C",
                                                SA: "#19C89C",
                                                EG: "#19C89C",
                                                SE: "#19C89C",
                                                FI: "#19C89C",
                                                FR: "#19C89C",
                                                US: "#19C89C",
                                            }
                                        }
                                    ]
                                }}
                            />


                        </div>
                        <p className='cmp5 mt-4'>September 4, 21:44:02 (2 Mins 56 Seconds)</p>
                        <div className='d-flex cmp10 '>
                            <div className='d-flex cmp8 text-center'>
                                <img src={image} alt='' className='cmp6' />
                                <p className='cmp7'>United States</p>
                            </div>
                            <div className='cmp9 text-center'>Firefox</div>
                            <div className='cmp9 text-center'>Mac OSX</div>
                        </div>
                        <p className='cmp5 mt-2'>September 7, 20:44:02 (5 Mins 56 Seconds)</p>
                        <div className='d-flex cmp10 '>
                            <div className='d-flex cmp8 '>
                                <img src={img2} alt='' className='cmp6' />
                                <p className='cmp77 text-center'>Australia</p>
                            </div>
                            <div className='cmp9 text-center'>Firefox</div>
                            <div className='cmp9 text-center'>Mac OSX</div>
                        </div>
                        <p className='cmp5 mt-2'>September 9, 19:44:02 (10 Min 56 Seconds)</p>
                        <div className='d-flex cmp10 '>
                            <div className='d-flex cmp8'>
                                <img src={img3} alt='' className='cmp6' />
                                <p className='cmp77'>Brazil</p>
                            </div>
                            <div className='cmp9 text-center'>Firefox</div>
                            <div className='cmp9 text-center'>Mac OSX</div>
                        </div>


                    </div>

                </div>


                <div className='col-lg-4 cmp '>
                    <div className='container'>
                        <h4 className='comp1 mt-3'>Add Todo</h4>
                        <button type="button" className="btn btn todo1 text-white"  onClick={ alldelete}  >Archieve</button>
                        <div className='table scrollbar scrollbar-primary mt-3'>

                         

                           <tr>
                                <th></th>
                            </tr> 
                            {
                                Data.map((item) => {
                                    return <tr key={item.id}>
                                        {/* <td className=''>
                                            <label className="form-check-label todo3 " htmlFor={item.texts}
                                                // onChange={(e)=> handleSearchh(e.target.value)}
                                                onChange={checkboxHandler}
                                               
                                            >
                                                <input className="form-check-input " type="checkbox" id={item.text} value={item.id} checked={ selectedItems.includes( item.id )}/>
                                                {item.text}
                                            </label>
                                        </td> */}
                                           <td className=''>
                                            <label className="form-check-label todo3 " htmlFor={item.texts}
                                                // onChange={(e)=> handleSearchh(e.target.value)}
                                                onChange={(e)=>handlecheckbox(e)}
                                               
                                            >
                                                <input className="form-check-input " type="checkbox" id={item.text} value={item.id}  checked={ item.isChecked}/>
                                                {item.text}
                                            </label>
                                        </td>

                                    </tr>

                                })
                            } 
                            <tr>
                                <td className='todo2'>
                                    <input className="form-check-input todo4" type="checkbox" value="" />
                                    <label className="form-check-label todo3" >
                                        {updateTask}
                                    </label>
                                </td>
                            </tr>

                        </div>
                        <div className='row' >
                            <div className='container'>
                                <input type="text" className="todo6 " id="exampleInputEmail1" placeholder="Add new todo" onChange={handleSearch} />
                                <button type="button" className="btn btn todo5  text-white text-center" onClick={onAddTask}>Add</button>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>

                {/* <div className='col-lg-4 cmp '>
                    <div className='container'>
                        <h4 className='comp1 mt-3'>Add Todo</h4>
                        <button type="button" className="btn btn todo1 text-white">Archieve</button>
                        <div className='table tod mt-3'>
                            <tr>
                                <th></th>
                            </tr>

                            {
                                Data.map((item) => {
                                    return <tr key={item.id}>
                                        <td className='todo2'>
                                            <input className="form-check-input todo4" type="checkbox" value="" />
                                            <label className="form-check-label todo3" >
                                                {item.text}
                                            </label>
                                        </td>


                                    </tr>

                                })
                            }
                            <tr>
                                <td className='todo2'>
                                    <input className="form-check-input todo4" type="checkbox" value="" />
                                    <label className="form-check-label todo3" >
                                        {updateTask}
                                    </label>
                                </td>
                            </tr>

                        </div>
                        <div className='row' >
                            <div className='container'>
                                <input type="text" className="todo6 " id="exampleInputEmail1" placeholder="Add new todo" onChange={handleSearch} />
                                <button type="button" className="btn btn todo5  text-white text-center" onClick={onAddTask}>Add</button>

                            </div>

                        </div>


                    </div>
                    <br/>


                </div> */}

                <div className='col-lg-4 cmp'>
                    <div className='container  '>
                        <h4 className='comp1 mt-3'>Chat Box</h4>

                        <div className='scrollbar scrollbar-primary  mt-5'>
                            <div className=' d-flex mt-4'>
                                <div>
                                    <img src={img22} alt='' className='chat1' />
                                    <p>10:00</p>
                                </div>
                                <div className='chat2'>
                                    <h6 className='chat3 mt-1'>John Deo</h6>
                                    <p className='chat4'>Hello!</p>
                                </div>
                            </div>

                            <div className='chat7 d-flex mt-1'>
                                <div className='chat55'>
                                    <h6 className='chat33 mt-1 text-white text-end'>Smith</h6>
                                    <p className='chat4 text-white'>Hi, How are you? What about our next meeting?</p>
                                </div>
                                <div>
                                    <img src={img22} alt='' className='chat1' />
                                    <p>10:01</p>
                                </div>
                            </div>

                            <div className=' d-flex mt-4'>
                                <div>
                                    <img src={img22} alt='' className='chat1' />
                                    <p>10:01</p>
                                </div>
                                <div className='chat6'>
                                    <h6 className='chat3 mt-1'>John Deo</h6>
                                    <p className='chat4'>Yeah everything fine!</p>
                                </div>
                            </div>

                            <div className='chat7 d-flex mt-2'>
                                <div className='chat55'>
                                    <h6 className='chat33 mt-1 text-white text-end'>Smith</h6>
                                    <p className='chat4 text-white'>Wow, Its great that's..!!</p>
                                </div>
                                <div>
                                    <img src={img22} alt='' className='chat1' />
                                    <p>10:02</p>
                                </div>
                            </div>

                            <div className=' d-flex mt-4'>
                                <div>
                                    <img src={img22} alt='' className='chat1' />
                                    <p>10:02</p>
                                </div>
                                <div className='chat8'>
                                    <h6 className='chat3 mt-1'>John Deo</h6>
                                    <p className='chat4'>Doing Better now i am thinking about that..</p>
                                </div>
                            </div>

                            <div className='chat7 d-flex mt-4'>
                                <div className='chat55'>
                                    <h6 className='chat33 mt-1 text-white text-end'>Smith</h6>
                                    <p className='chat4 text-white'>Ohk! Bro that's good!!</p>
                                </div>
                                <div>
                                    <img src={img22} alt='' className='chat1' />
                                    <p>10:02</p>
                                </div>
                            </div>

                            <div className=' d-flex mt-4'>
                                <div>
                                    <img src={img22} alt='' className='chat1' />
                                    <p>10:03</p>
                                </div>
                                <div className='chat6'>
                                    <h6 className='chat3 mt-1'>John Deo</h6>
                                    <p className='chat4'>Yeah Bruh!!</p>
                                </div>
                            </div>


                        </div>
                        <div className='row mt-4' >
                            <div className=''>
                                <input type="text" className="todo6 " id="exampleInputEmail1" placeholder="Enter Your Text" onChange={handleSearch} />
                                <button type="button" className="btn btn todo5  text-white text-center" >Send</button>

                            </div>

                        </div>







                    </div>
                </div>

            </div>

        </div>
    );
}

export default Comp3;