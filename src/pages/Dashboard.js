import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const { user_nicename } = JSON.parse(localStorage.getItem("wordpress-user"));

  useEffect(() => {
    if (!localStorage.getItem("wordpress-user")) {
      navigate("/login");
    }
    //eslint-disable-next-line
  }, [localStorage.getItem("wordpress-user")]);

  return <div>{user_nicename}</div>;
}
