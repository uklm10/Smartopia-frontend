import React,{useState} from "react";
import "./Right.css"



  const Component3 = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };


    return(
<div>

<div className="dropdown">

      <button className="Drop" onClick={handleOpen}>smatify</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>smatify is a nice tool</button>
          </li>
          <li className="menu-item">
            <button>smartify is too good</button>
          </li>
        </ul>
      ) : null}
     
    </div>


    </div>

    )
}


export default Component3;