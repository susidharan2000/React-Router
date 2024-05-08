import React from 'react';
import Card from '../Components/Card';

const Career = ({data}) => {
    let career = data.filter((val)=> val.catagory === "Career");
    return (
        <div>
            <Card data={career}/>
        </div>
    );
};

export default Career;