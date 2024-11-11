import "./Testimonials.css";
import useFetch from "../../CustomHooks/useFetch.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Testimonials = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:5000/testimonial"
  );
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [textReview, setTextReview]=useState("")
  const[anonym,setAnonym]=useState("");
  const navigate=useNavigate();
  const addReview=()=>{
    fetch("http://localhost:5000/testimonial",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, gender, textReview}),
    }).then(()=>{
      navigate("/");
    })
  }
  useEffect(()=>{
    console.log(anonym);  

  },[anonym])
  return (
    <div className="testimonial">
      <div className="review">
        {error && <div>{error}</div>}
        {data && (
            <ul className="item">
                {data.map((listData)=>(
                    <li className="list" key={listData.id}>
                        {listData.fullname && <p className="fullname">{listData.fullname}</p>}
                        <p className="gender">{listData.gender}</p>
                        <p className="textReview">{listData.textReview}</p>
                    </li>
                ))}
            </ul>)}
      </div>
      <div className="reviewAdd">
        <h1 className="title">Add your thoughts about me.</h1>
        <form className="formReview">
            <label htmlFor="anonym">Anonymous</label>
            <input type="checkbox" id="anonym" checked={anonym} onChange={(e)=>setAnonym(e.target.checked)}/>
            {!anonym && <input type="text" required value={fullname} onChange={(e)=>setFullname(e.target.value)}/>}
            <select name="gender" id="gender" onChange={(e)=>setGender(e.target.value)}>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="text" value={textReview} required onChange={(e)=>setTextReview(e.target.value)} />
            <button type="button" className="btn" onClick={addReview}>Send Review</button>
        </form>
      </div>
    </div>
  );
};
export default Testimonials;
