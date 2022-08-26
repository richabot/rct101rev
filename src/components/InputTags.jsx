import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
const InputTags=()=>{
    const [form, setForm] = useState({});
    const [data, setData] = useState([]);
    const   [show, setShow] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/data", form).then((res) => {
          setData([...data, res.data]);
          console.log(res.data,"data");
        });
      };
      const onChange = (e) => {
        let {  name, value } = e.target;
    
       
          setForm({ ...form, [name]: value });
        
      };
    
      useEffect(() => {
       
      }, []);


      const handleshow=(e)=>{

        axios.get("http://localhost:8080/data").then((res)=>{
            setShow(res.data)
        console.log(show,"show")

        })
      }

      const handleMax=()=>{


        // data.sort(function (a, b) {
        //     return a.power - b.power
        // })
        
        // var min =data[0],
//            var max = data[data.length - 1]
// console.log(max,"max")
        axios
        .get(
          `http://localhost:8080/data?_sort=power&_order=desc`)
        
        .then((res) => {
          setShow(res.data.splice(0,1));
         ;
        });
    }
      

    return(
        <>
        <form onSubmit={onsubmit}>
            <input data-testid="input-name" name="name"type="text" 
             value={form.name}
              onChange={onChange}/>
            <input data-testid="input-height" type="text" name="height"  value={form.height}
              onChange={onChange}/>
            <input data-testid="input-weight" name="weight" type="text"  value={form.weight}
              onChange={onChange}/>
            <input data-testid="input-power" name="power" type="text"  value={form.power}
              onChange={onChange}/> 
            <button data-testid="add-button"  onClick={handleSubmit}>Add SuperHero</button>
        </form>
        <button data-testid="most-powerfull" onClick={handleMax}>Most Powerful Superhero</button>
        <button data-testid="all-superheroes" onClick={handleshow} >Show All</button>
        <Card show={show}/>
        </>
    )
}

export default InputTags;
