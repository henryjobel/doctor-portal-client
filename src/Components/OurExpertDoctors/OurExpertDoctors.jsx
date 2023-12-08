import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

const OurExpertDoctors = () => {
    const [doctors,setDoctors] = useState([])

    useEffect(()=>{
        fetch('/fakeDoctorData.json')
        .then(res => res.json())
        .then(data =>{
            const popular = data.filter(item => item.category === 'expert')
            setDoctors(popular)
          
        })
    },[])
    return (
        <div className='grid lg:grid-cols-2 gap-10'>
                {
                    doctors.map(item => <DoctorCard  item={item}></DoctorCard>)
                }
            </div>
    );
};

export default OurExpertDoctors;