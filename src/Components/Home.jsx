import React from 'react';
import Charts from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";


function Home() {



    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const data = {
        labels: labels,
        datasets: [
            {

                backgroundColor: ["rgb(0,194,146)"],
                data: [22, 30, 7, 27, 20, 30, 40, 18, 45, 12],
            },
        ],

    };

    const daataas = {
        labels: labels,
        datasets: [
            {

                backgroundColor: ["rgb(1,192,200)"],
                data: [22, 30, 7, 27, 20, 30, 40, 18, 45, 12],
            },
        ],

    };

    const labelss = ["January", "February", "March", "April", "May", "June", "july"];
    const dataa = {
        labels: labels,
        datasets: [
            {

                backgroundColor: "rgb(5,195,148)",
                borderColor: "rgb(5,195,148)",
                data: [0, 50, 15, 20, 30, 48, 13, 30, 55, 63],
                fill: true,

            },
            {
                backgroundColor: "rgb(228,228,228)",
                borderColor: "rgb(228,228,228)",
                data: [40, 26, 10, 16, 14, 20, 55, 66, 70, 75],
                fill: true,
            },

        ],
        
    };

    const labeless = ["January", "February", "March", "April", "May", "June", "july"];
    const dataas = {
        labels: labels,
        datasets: [
            {

                backgroundColor: "rgb(5,195,148)",
                borderColor: "rgb(5,195,148)",
                data: [0, 50, 15, 20, 30, 48, 13, 30, 55, 63],
                fill: true,

            },

        ],
    };

    const daata = {
        labels: labels,
        datasets: [
            {

                backgroundColor: "rgb(251,150,120)",
                borderColor: "rgb(251,150,120)",
                data: [0, 50, 15, 20, 30, 48, 13, 30, 55, 63],
                fill: true,

            },
        ],
       
          
        
      
    };

    return (
        <div className=''>
            <div className='row'>
                {/* 
                <div className='col-lg-3 home1  d-flex'>
                    <div className='row d-flex'>
                        <div className='col-lg-6 mt-2'>
                            <h4 className='home4'> 50,000</h4>
                            <p className='home5'> Total Website Traffics</p>
                        </div>
                        <div className='col-lg-6 home9 '>
                            <Bar data={data} />
                        </div>

                    </div>
                </div> */}


                <div className='col-lg-3 home2  d-flex'>
                    <div className='home3 mt-2'>
                        <h4 className='home4'> 50,000</h4>
                        <p className='home5'> Total Website Traffics</p>
                    </div>
                    <div className=' '>
                        {/* <Bar data={data}     /> */}
                    </div>

                </div>
                <div className='col-lg-3 home1 d-flex'>
                    <div className=' home3 mt-2'>
                        <h4 className='home4'> 90,000K</h4>
                        <p className='home5'>Website Impressions </p>
                    </div>

                </div>
                <div className='col-lg-3 home1 d-flex'>
                    <div className=' home3 mt-2'>
                        <h4 className='home4'> $40,000</h4>
                        <p className='home5'> Total Online Sales</p>
                    </div>

                </div>
                <div className='col-lg-3 home1 d-flex'>
                    <div className=' home3 mt-2'>
                        <h4 className='home4'> 1,000</h4>
                        <p className='home5'> Total Support Tickets</p>
                    </div>

                </div>

            </div>
            <br />



            <div className='row'>
                <div className='col-lg-9 home6 '>
                    <h5 className='mt-2 home7'>Sales Statistics</h5>
                    <p>Vestibulum purus quam scelerisque, mollis nonummy metus.</p>
                    <Line data={dataa} className='hm1' />
                </div>

                <div className='col-lg-3 home8'>
                    <h5 className='text-center mt-2'>For The Past 30 Days</h5>
                    <p className='text-center'>Fusce eget dolor id justo luctus the commodo vel pharetra nisi. Donec velit of libero.</p>
                    <Line data={dataas} height={200}  />
                    <div className='mt-3 d-flex'>
                        <div className=''>
                            <h6>320,000</h6>
                            <p>Page Views</p>
                        </div>

                        <div className='home10'>
                            <Bar data={data} width={100} className='home11' />
                        </div>

                    </div>
                    <div className=' d-flex'>
                        <div className=''>
                            <h6>320,000</h6>
                            <p>Page Views</p>
                        </div>

                        <div className='home10'>
                        <Line data={daata}  width={100} className='home11'  />
                        </div>

                    </div>
                    <div className=' d-flex'>
                        <div className=''>
                            <h6>320,000</h6>
                            <p>Page Views</p>
                        </div>

                        <div className='home10'>
                            <Bar data={daataas} width={100} className='home11' />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;