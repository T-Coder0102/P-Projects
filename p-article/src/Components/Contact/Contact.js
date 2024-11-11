import { useState } from "react";
import "./Contact.css";
import useFetch from "../../CustomHooks/useFetch.js";
import { useNavigate, Link } from "react-router-dom";
const Contact = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/requests");
  const [name, setName] = useState("");
  const navigate= useNavigate();
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitRequest = () => {
    fetch("http://localhost:8000/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, surname, email, phone, message }),
    }).then(()=>{
        navigate('/');     
        alert("Thank you for your message, I will get back to you ASAP!!") 
    })
  };
  return (
    <div className="contact">
      <div className="form">
        <p className="title">JT_CodeUp</p>
        <p className="subtitle">Contact or Hire me</p>
        <form className="formFill">
          <section className="nameList">
            <input
              type="text"
              className="name"
              placeholder="Your Name:"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              className="name"
              placeholder="Your Surname:"
              required
              value={surname}
              onChange={(e)=>{setSurname(e.target.value)}}
            />
          </section>
          <input
            type="email"
            className="email"
            placeholder="Your Email:"
            required
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            type="number"
            className="phoneNumber"
            placeholder="Your phone number:"
            required
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
          />
          <input
            type="text"
            className="message"
            placeholder="Your question or message for me:"
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
          />
          <button onClick={submitRequest} type="button" className="btn">
            Contact Me
          </button>
          <section className="socialmedia">
            <Link to="https://t.me/t1mur_25">
            <img src="../../images/telegram.png" alt="Telegram Logo" />
            </Link>
            <Link to="https://www.linkedin.com/in/timur-joldasbaev01?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B03TxB0b5QbS1bxs5MjT9qg%3D%3D">
            <img src="../../images/linkedin.png" alt="LinkedIn Logo" />
            </Link>
            <Link to="https://www.instagram.com/t1mur_2501/">
            <img src="../../images/social.png" alt="Instagram Logo" />
            </Link>
          </section>
        </form>
      </div>
    </div>
  );
};
export default Contact;
