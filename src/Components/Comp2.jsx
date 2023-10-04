import React, { useState } from 'react';
import img2 from '../1.jpg.jpg'
import { CircleSlider } from "react-circle-slider";


function Comp2(props) {
    const [value, changeValue] = useState(55);
    const [values, changeValues] = useState(75);
    const [valuees, changeValuees] = useState(35);
    const [valueess, changeValueess] = useState(45);
    const handle = (q) => {
        if (q === value) return;
        changeValue(q);
    };
    const handles = (p) => {
        if (p === values) return;
        changeValues(p);
    };
    const handlees = (q) => {
        if (q === valuees) return;
        changeValuees(q);
    };
    const handless = (q) => {
        if (q === valueess) return;
        changeValueess(q);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 cc11'>
                    <div className='container'>
                        <h4 className='comp1 mt-3'>Email Statistics</h4>
                        <div className='comp4'>
                            <CircleSlider
                                value={value}
                                stepSize={1}
                                onChange={(value) => handle(value)}
                                size={150}
                                max={100}
                                gradientColorFrom="rgb(0,194,146)"
                                gradientColorTo="rgb(0,194,146)"
                                knobRadius={-30}
                                circleWidth={8}
                                progressWidth={8}
                                showTooltip={true}
                                showPercentage={true}
                                tooltipColor="rgb(0,194,146)"

                            />
                            <p className='comp5'> Total Emails Sent</p>
                        </div>

                        <div className='d-flex mt-4'>
                            <div>
                                <CircleSlider
                                    value={values}
                                    stepSize={1}
                                    onChange={(value) => handles(value)}
                                    size={90}
                                    max={100}
                                    gradientColorFrom="rgb(0,194,146)"
                                    gradientColorTo="rgb(0,194,146)"
                                    knobRadius={-30}
                                    circleWidth={7}
                                    progressWidth={7}
                                    showTooltip={true}
                                    showPercentage={true}
                                    tooltipColor="rgb(0,194,146)"
                                />
                                <p className='comp2'>Bounce Rate</p>
                            </div>

                            <div className='comp6'>
                                <CircleSlider
                                    value={valuees}
                                    stepSize={1}
                                    onChange={(value) => handlees(value)}
                                    size={90}
                                    max={100}
                                    gradientColorFrom="rgb(0,194,146)"
                                    gradientColorTo="rgb(0,194,146)"
                                    knobRadius={-30}
                                    circleWidth={7}
                                    progressWidth={7}
                                    showTooltip={true}
                                    showPercentage={true}
                                    tooltipColor="rgb(0,194,146)"
                                />
                                <p className='comp2'> Total Opened</p>
                            </div>
                            <div className='comp6'>
                                <CircleSlider
                                    value={valueess}
                                    stepSize={1}
                                    onChange={(value) => handless(value)}
                                    size={90}
                                    max={100}
                                    gradientColorFrom="rgb(0,194,146)"
                                    gradientColorTo="rgb(0,194,146)"
                                    knobRadius={-30}
                                    circleWidth={7}
                                    progressWidth={7}
                                    showTooltip={true}
                                    showPercentage={true}
                                    tooltipColor="rgb(0,194,146)"
                                />
                                <p className='comp2'> Total Ignored</p>
                            </div>

                        </div>

                    </div>

                </div>





                <div className='col-lg-4 c11'>
                    <div className='container'>
                        <h4 className='comp1 mt-3'>Recent Posts</h4>

                        <div className='d-flex mt-3 '>
                            <div>
                                <img src={img2} alt='' className='a4' />
                            </div>
                            <div className='a7 mt-1'>
                                <h6 className='a6 comp3'>David Belle</h6>
                                <p className='a5'>Cum sociis natoque sociis penatibus..</p>
                            </div>
                        </div>
                        <div className='d-flex  '>
                            <div>
                                <img src={img2} alt='' className='a4' />
                            </div>
                            <div className='a7 mt-1'>
                                <h6 className='a6 comp3'>David Belle</h6>
                                <p className='a5'>Cum sociis natoque sociis penatibus..</p>
                            </div>
                        </div>
                        <div className='d-flex  '>
                            <div>
                                <img src={img2} alt='' className='a4' />
                            </div>
                            <div className='a7 mt-1'>
                                <h6 className='a6 comp3'>David Belle</h6>
                                <p className='a5'>Cum sociis natoque sociis penatibus..</p>
                            </div>
                        </div>
                        <div className='d-flex  '>
                            <div>
                                <img src={img2} alt='' className='a4' />
                            </div>
                            <div className='a7 mt-1'>
                                <h6 className='a6 comp3'>David Belle</h6>
                                <p className='a5'>Cum sociis natoque sociis penatibus..</p>
                            </div>
                        </div>
                        <div className='d-flex  '>
                            <div>
                                <img src={img2} alt='' className='a4' />
                            </div>
                            <div className='a7 mt-1'>
                                <h6 className='a6 comp3'>David Belle</h6>
                                <p className='a5'>Cum sociis natoque sociis penatibus..</p>
                            </div>
                        </div>
                        <p className=' text-center a8 mt-2'>View All</p>

                    </div>

                </div>


                <div className='col-lg-4 c11'>
                    <div className='container'>
                    <h4 className='comp1 mt-3'>Recent Items</h4>
                    <table class="table mt-2">
                        <thead>
                            <tr>

                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>5455</td>
                                <td>Samsung Galaxy Mega</td>
                                <td>$546</td>
                            </tr>
                            <tr>

                                <td>7656</td>
                                <td>Huawei Ascend P6</td>
                                <td>$756</td>
                            </tr>
                            <tr>

                                <td>5455</td>
                                <td>HTC One M8</td>
                                <td>$987</td>
                            </tr>
                            <tr>

                                <td>5455</td>
                                <td>	Samsung Galaxy Alpha</td>
                                <td>$287</td>
                            </tr>
                            <tr>

                                <td>5455</td>
                                <td>LG G3</td>
                                <td>$654</td>
                            </tr>
                            <tr>

                                <td>5455</td>
                                <td>	Samsung Galaxy Alpha</td>
                                <td>$143</td>
                            </tr>
                        </tbody>
                    </table>

                    </div>
                   
                </div>

            </div>

        </div>
    );
}

export default Comp2;