import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="context">
          <h1 className="title">My Versatile Portfolio</h1>
          <p>
          I'm a passionate professional with expertise in both cybersecurity and software development, bringing a unique blend of technical skills to the table.
          </p>
          <Link to="/projects">
            <button type="button">View My Work</button>
          </Link>
        </div>
        <div className="image">
            <img src="../../images/profile.jpg" alt="Profile Image" className="profileImg" />
        </div>
      </div>
    </div>
  );
};
export default Home;
