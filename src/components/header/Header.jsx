import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { Button } from "antd";
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
                <Button type="primary" size="large" onClick={() => navegate("/add")}>Add</Button>
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
