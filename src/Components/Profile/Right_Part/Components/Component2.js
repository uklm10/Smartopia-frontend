import React,{useState} from "react";
import "./Right.css"



  const Component2 = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };


    return(
<div>

<div className="dropdown">

      <button className="Drop" onClick={handleOpen}>Bard</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Chat gpt like tool</button>
          </li>
          <li className="menu-item">
            <button>generate text</button>
          </li>
        </ul>
      ) : null}
     
    </div>


    </div>

    )
}


export default Component2;