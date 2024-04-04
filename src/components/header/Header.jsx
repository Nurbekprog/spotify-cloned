import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
function Header({ login }) {
  const navegate = useNavigate();
  if (login) {
    return (
      <>
        <header>
          <div className="container">
            <div className="header">
              <Link to={"/"}>
                <h1>Students</h1>
              </Link>
              <div className="header_div">
                <button onClick={() => navegate("/add")}>Add</button>
                <Link to={"/profile"} style={{ color: "#fff" }}>
                  Profile
                </Link>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  } else {
    return;
  }
}

export default Header;
