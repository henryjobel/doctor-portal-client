import servicePhoto from '../../assets/Rectangle 20078.png'
import serviceimage2 from '../../assets/Rectangle 10.png'

const OurService = () => {
    return (
        <div>
            <div className="min-h-screen hero">
                <div className="flex-col hero-content lg:flex-row">
                    <img src={servicePhoto} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Our Service</h1>
                        <p className="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/* tab section */}
                        <div className='ml-9'>
                            <div role="tablist" className="tabs tabs-bordered">
                                <input type="radio" name="my_tabs_1" role="tab" className="bg-orange-300 btn hover:bg-orange-500 tab" aria-label="CosmeticDentisty"  />
                                <div role="tabpanel" className="p-10 tab-content">
                                    <img src={serviceimage2} alt="" />
                                    <h1 className="text-3xl font-bold">Our Service</h1>
                                    <p className="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                        Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                </div>
                                <input type="radio" name="my_tabs_1" role="tab" className="bg-orange-300 btn hover:bg-orange-500 tab" aria-label="CavityProtection" />
                                <div role="tabpanel" className="p-10 tab-content">
                                    <img src={serviceimage2} alt="" />
                                    <h1 className="text-3xl font-bold">Our Service</h1>
                                    <p className="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                        Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                </div>
                                <input type="radio" name="my_tabs_1" role="tab" className="bg-orange-300 btn hover:bg-orange-500 tab" aria-label="OralSurgery" />
                                <div role="tabpanel" className="p-10 tab-content">
                                    <img src={serviceimage2} alt="" />
                                    <h1 className="text-3xl font-bold">Electro  Gastrology Therapy</h1>
                                    <p className="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. <br />
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* image section */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;