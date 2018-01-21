import React from 'react';


const RepInfo = (props) => {
    return (
     <div>
         <h1>Type</h1>
         <div>
         <p>{props.selectedInfo.firstName}</p>
         <p>{props.selectedInfo.lastName}</p>
         <p>{props.selectedInfo.district}</p>
         <p>{props.selectedInfo.phone}</p>
         <p>{props.selectedInfo.office}</p>
         </div>
      </div>
    );
}

export default RepInfo;