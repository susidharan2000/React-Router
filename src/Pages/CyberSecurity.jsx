import React from 'react';
import Card from '../Components/Card';

const CyberSecurity = ({data}) => {
    let cybersecurity = data.filter((val)=>(val.catagory === "Cyber Security"));
    return (
        <div>
            <Card data={cybersecurity}/>
        </div>
    );
};

export default CyberSecurity;