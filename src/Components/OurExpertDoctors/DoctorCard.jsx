import React from 'react';

const DoctorCard = ({item}) => {
  const  {doctorName} = item
    return (
        <div>
            <h1>{doctorName}</h1>
        </div>
    );
};

export default DoctorCard;