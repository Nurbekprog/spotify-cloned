import { NavLink } from "react-router-dom";
import { UsergroupAddOutlined } from "@ant-design/icons";
import "./SiteBar.scss";
const SiteBar = ({ login }) => {
  const menu = [
    {
      to: "/",
      icon: "",
      title: "",
    },
    {
      to: "/",
      icon: <UsergroupAddOutlined />,
      title: "Students",
    },
    {
      to: "/teachers",
      icon: "",
      title: "Teachers",
    },
  ];
  return (
    <>
      <div className="site_bar">
        <div className="site_bar_icon">
          <div className="site-bar-icon-item">
            {menu?.map((el, i) => (
              <NavLink
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={i}
                to={el?.to}
                onClick={el?.onClick}
              >
                {el?.icon}
                {el?.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteBar;
