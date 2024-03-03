import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

const Sidebar = () => {
  const [search, setSearch] = useSearchParams();

  const initialShapes = search.getAll("shape");
  const initialSizes = search.getAll("size");
  const initialColors = search.getAll("color");
  const initialtext=search.get("text")

  const [shape, setShapes] = useState(initialShapes || []);
  const [size, setSizes] = useState(initialSizes || []);
  const [color, setColors] = useState(initialColors || []);
  const[text,setText]=useState(initialtext||"")

  const handleChange = (category, value) => {
    let newCategory = [...category];

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }

    if (category === shape) {
      setShapes(newCategory);
    } else if (category === size) {
      setSizes(newCategory);
    } else if (category === color) {
      setColors(newCategory);
    }
  };

  useEffect(() => {
    let params = {};

    shape.length > 0 && (params.shape = shape);
    size.length > 0 && (params.size = size);
    color.length > 0 && (params.color = color);
    text.length>0 &&(params.text=text)

    setSearch(params);
  }, [shape, size, color,text]);

  return (
   
    <DIV>
      <div style={{display:"flex",marginTop:"-38px",width:"100%",height:"40px",marginLeft:"20px"}} >
        <div ><input style={{height:"20px",outline:"none"}} placeholder="search....." value={text} className='om1' onChange={(e)=>setText(e.target.value)}  type='text'/></div>
       <div style={{backgroundColor:"blue",height:"24.5px", display:"flex",justifyContent:"center",alignContent:"center",color:"white"}} className='search'><IoIosSearch   />
       </div>
       
          
      </div>
     
     
      <h3>Filter by Color</h3>
      <div>
        <input
          type="checkbox"
          value="90f28316-7f0d-4cf2-828e-f0dbbcc110b9"
          onChange={() => handleChange(color, "90f28316-7f0d-4cf2-828e-f0dbbcc110b9")}
          checked={color.includes("90f28316-7f0d-4cf2-828e-f0dbbcc110b9")}
        />
        <label>Red</label>
        <br />
        <input
          type="checkbox"
          value="7526a44b-32d3-4644-b28d-8eb57e5fada6"
          onChange={() => handleChange(color, "7526a44b-32d3-4644-b28d-8eb57e5fada6")}
          checked={color.includes("7526a44b-32d3-4644-b28d-8eb57e5fada6")}
        />
        <label>Green</label>
        <br />
        <input
          type="checkbox"
          value="fe228419-f7df-49d2-a4cd-43e625b26075"
          onChange={() => handleChange(color, "fe228419-f7df-49d2-a4cd-43e625b26075")}
          checked={color.includes("fe228419-f7df-49d2-a4cd-43e625b26075")}
        />
        <label>Blue</label>
        <br />
      </div>
      <br />
      <h3>Filter by Size</h3>
      <div>
        <input
          type="checkbox"
          value="3cc158c7-eff6-4152-afa3-50d9487584c3"
          onChange={() => handleChange(size, "3cc158c7-eff6-4152-afa3-50d9487584c3")}
          checked={size.includes("3cc158c7-eff6-4152-afa3-50d9487584c3")}
        />
        <label>small</label>
        <br />
        <input
          type="checkbox"
          value="96d37388-6ca9-4aba-bc2a-dafeb082fbd9"
          onChange={() => handleChange(size, "96d37388-6ca9-4aba-bc2a-dafeb082fbd9")}
          checked={size.includes("96d37388-6ca9-4aba-bc2a-dafeb082fbd9")}
        />
        <label>Medium</label>
        <br />
        <input
          type="checkbox"
          value="65f33b82-48dc-4265-88cb-f4f467e5acba"
          onChange={() => handleChange(size, "65f33b82-48dc-4265-88cb-f4f467e5acba")}
          checked={size.includes("65f33b82-48dc-4265-88cb-f4f467e5acba")}
        />
        <label>Large</label>
        <br />
      </div>
      <h3>Filter by Shape</h3>
      <div>
        <input
          type="checkbox"
          value="4aaaf39b-eccb-46d6-b4be-2e72a911c724"
          onChange={() => handleChange(shape, "4aaaf39b-eccb-46d6-b4be-2e72a911c724")}
          checked={shape.includes("4aaaf39b-eccb-46d6-b4be-2e72a911c724")}
        />
        <label>Round</label>
        <br />
        <input
          type="checkbox"
          value="f77621c4-5ee4-4c0c-9db3-d791a87b85e2"
          onChange={() => handleChange(shape, "f77621c4-5ee4-4c0c-9db3-d791a87b85e2")}
          checked={shape.includes("f77621c4-5ee4-4c0c-9db3-d791a87b85e2")}
        />
        <label>Oval</label>
       <br />
      </div>
    </DIV>
   
  );
};

const DIV = styled.div`
  
  margin-left:25px
  
  
`;



export default Sidebar;
