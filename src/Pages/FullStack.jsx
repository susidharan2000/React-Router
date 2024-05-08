import React from 'react';
import Card from '../Components/Card';

const FullStack = ({data}) => {
    let fullstack = data.filter((val)=>(val.catagory ==="Full Stack Development"));
    return (
        <div>
           <Card data={fullstack}/>
        </div>
    );
};

export default FullStack;