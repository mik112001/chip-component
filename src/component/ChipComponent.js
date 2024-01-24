import React from "react";
import './css/chipComponent.css';

const ChipComponent = ({name}) => {
   console.log("ChipComponent");
   return (
      <div className="chip-component">
            <img src = "https://xsgames.co/randomusers/avatar.php?g=pixel" 
                className="image"
            />
            <p>{name}</p>
      </div>
   );
};

export default ChipComponent;