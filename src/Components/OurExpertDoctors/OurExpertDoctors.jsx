import React, { useEffect, useState } from 'react';

const OurExpertDoctors = () => {
    const [doctors,setDoctors] = useState([])

    useEffect(()=>{
        fetch('/fakeDoctorData.json')
        .then(res => res.json())
        .then(data =>{
            const expert = data.filter(item => item.category === 'expert')
            console.log(expert)
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default OurExpertDoctors;