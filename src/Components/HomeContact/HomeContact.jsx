import { FaHistory } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";



const HomeContact = () => {
    return (
        <div className="grid gap-2 lg:grid-cols-3">
            <div className="text-white shadow-xl card bg-green-950" data-aos="zoom-in-right">
                <div className="card-body" data-aos="zoom-in-right">
                    <div className="flex gap-3">
                        <div>
                            <FaHistory className="text-4xl"></FaHistory>
                        </div>
                        <div>
                            <h2 className="card-title">Opening Hours</h2>
                            <p>Open 9.00 am to 5.00pm Everyday</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white bg-orange-400 shadow-xl card" data-aos="zoom-in">
                <div className="card-body" data-aos="zoom-in">
                    <div className="flex gap-3">
                        <div>
                            <FaLocationDot className="text-4xl"></FaLocationDot>
                        </div>
                        <div>
                            <h2 className="card-title">Our Locations</h2>
                            <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white shadow-xl card bg-green-950" data-aos="zoom-in-left">
                <div className="card-body" data-aos="zoom-in-left">
                    <div className="flex gap-3">
                        <div>
                            <FaPhoneAlt className="text-4xl"></FaPhoneAlt>
                        </div>
                        <div>
                            <h2 className="card-title">Contact Us</h2>
                            <p>+88 01750 00 00 00 <br />
                                +88 01750 00 00 00</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomeContact;