import React from 'react';
import Card from '../Components/Card';

const DataScience = ({data}) => {
    let datascience = data.filter((val)=>(val.catagory === "Data Science"));
    return (
        <div>
            <Card data={datascience}/>
        </div>
    );
};

export default DataScience;