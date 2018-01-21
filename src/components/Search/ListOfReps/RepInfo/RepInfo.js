import React from 'react';
import './RepInfo.css';


const RepInfo = (props) => {
    return (
        <div className='selectedRepContainer'>
            <h1>Type</h1>
            <div>
                <p>{!props.selectedInfo.firstName ? 'First Name' : props.selectedInfo.firstName}</p>
                <p>{!props.selectedInfo.lastName ? 'Last Name' : props.selectedInfo.lastName}</p>
                <p>{!props.selectedInfo.district ? 'District' : props.selectedInfo.district}</p>
                <p>{!props.selectedInfo.phone ? 'Phone' : props.selectedInfo.phone}</p>
                <p>{!props.selectedInfo.office ? 'Office' : props.selectedInfo.office}</p>
                <p>{!props.selectedInfo.link ? 'Website' : <a target='blank' href={props.selectedInfo.link}>Visit Website Here</a>}</p>
            </div>
        </div>
    );
}

export default RepInfo;