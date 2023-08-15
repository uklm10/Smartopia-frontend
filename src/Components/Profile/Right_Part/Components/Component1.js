import React,{useState} from "react";
import "./Right.css"



  const Component1 = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };


    return(
<div>

<div className="dropdown">

      <button className="Drop" onClick={handleOpen}>Artificil Inteligence</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Chat gpt</button>
          </li>
          <li className="menu-item">
            <button>Dialogflow</button>
          </li>
        </ul>
      ) : null}
     
    </div>


    </div>

    )
}


export default Component1;