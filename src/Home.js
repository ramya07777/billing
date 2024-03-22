import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const shortcutMap = {
      "Alt+P": () => navigate("/dash"),
      "Alt+Q": () => navigate("/bus"),
      "Alt+A": () => navigate("/arrival"),
      "Alt+S": () => navigate("/sales"),
      "Alt+B": () => navigate("/supplier"),
      "Alt+I": () => navigate("/place"),
      "Alt+O": () => navigate("/order"),
      "Alt+R": () => navigate("/redeem"),
    };

    const handleKeyDown = (event) => {
      const shortcutKey = `${
        event.altKey ? "Alt+" : ""
      }${event.key.toUpperCase()}`;
      const action = shortcutMap[shortcutKey];
      if (action) {
        action();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  const navbarStyle = "hover:bg-[#36955f]  py-[2rem] px-[1rem]";

  const navbarData = [
    { title: "Dashboard(Alt+p)", link: "/dash" },
    { title: "Bus Follow Up(Alt+Q)", link: "/bus" },
    { title: "Arrival(Alt+a)", link: "/arrival" },
    { title: "Sales Order(Alt+s)", link: "/sales" },
    { title: "Supplier Order(Alt+b)", link: "/supplier" },
    { title: "Place Order(Alt+I)", link: "/place" },
    { title: "Order Delivery(Alt+O)", link: "/order" },
    { title: "Redeem Advance(Alt+R)", link: "/redeem" },
  ];

  return (
    <div className="flex justify-between items-center bg-[#1EA65A] text-[#ffffff] text-[1.3rem]">
      {navbarData.map((item, index) => (
        <Link to={item.link} key={index}>
          <p className={navbarStyle}>{item.title}</p>
        </Link>
      ))}

      <p className="hover:bg-[#36955f]  py-[2rem] px-[1rem]">Reports</p>
      <p className="hover:bg-[#36955f]  py-[2rem] px-[1rem]">Masters</p>
      <p className="hover:bg-[#36955f]  py-[2rem] px-[1rem]">Logout</p>
    </div>
  );
}
