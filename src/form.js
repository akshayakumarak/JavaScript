import './form.css'
import{useState}from "react";


function Form(){
//using useState set the initial uname ,email and feedback as empty
 

const[f,setForm]=useState(
  {
    name:"",
    email:"",
    feedback:"",
  }
  
);
const a =(event)=>{
   event.preventDefault();
     console.log(f,"form");
   };
  

  const handleChange=(event,key)=>{
    let value=event.target.value;
    setForm(
      {
        ...f,
        [key]:value,
      }
    );
  };
  return(
    <div>
      <h1>A feedback form</h1>
     <div>
      <form onSubmit={a}>
        <input value={f.name} 
        onChange={(event)=>handleChange(event,"name")}
        placeholder="Enter your name"
        style={{
         backgroundColor : "white",
          width: "50%",
          backgroundSize: "25",
          display: "inline-block",
          padding: "12px 20px",
          margin: "8px 0",
          boxSizing: "border-box",
         margin:"auto"
        }
        }/> 
        <input value={f.email} 
        onChange={(event)=>handleChange(event,"email")}
        placeholder="Enter your email"
        style={{
          backgroundColor : "white",
           width: "50%",
           backgroundSize: "25",
           display: "inline-block",
           padding: "12px 20px",
           margin: "8px 0",
           boxSizing: "border-box",
           borderradius: "20"
         }
         }/>
        <textarea value={f.feedback} 
        onChange={(event=>handleChange(event,"feedback"))}
        placeholder="Enter your feedback">        </textarea>
        <button type="submit"style={{
          backgroundColor : 'aqua',
          textAlign:"center"
           width: "100%",
           display: "block",
           padding: "12px 20px",
           margin: "8px 0",
           boxSizing: "border-box"
         }
         }>Submit
        
        </button>


        

      </form>
      </div> 
    </div>
  )
}
  export default Form;
