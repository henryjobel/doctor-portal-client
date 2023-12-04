import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* component 2 */}
            <div className="h-[800px] hero" style={{ backgroundImage: 'url(https://i.ibb.co/LZCwP79/Rectangle-1.png)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className=" text-neutral-content">
                    <div>
                        {/* Components 1 */}
                        <div className="hero">
                            <div className="flex-col hero-content lg:flex-row-reverse">
                                <img src="https://i.ibb.co/k3g3cym/Group-34991.png" className="rounded-lg shadow-2xl lg:ml-20" />
                                <div className='lg:mr-20'>
                                    <h1 className="text-5xl font-bold">Your Best Medical <br /> Help Center</h1>
                                    <p className="py-6">Lorem Ipsum is simply dummy text they are printing <br /> typesetting has been the industry’s stardard.</p>
                                    <button className="text-white bg-orange-300 btn hover:bg-orange-500">All Service</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;