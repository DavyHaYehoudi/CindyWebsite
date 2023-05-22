import { signOut } from "@firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthAdminContext } from "../context/AuthAdminProvider";
import { auth } from "../firebase/config";

const Admin = () => {
  const { isAuthenticated, setAuthenticated } = useContext(AuthAdminContext);
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      setAuthenticated(false);
      navigate("/auth");
    } catch (err) {
      console.log("erreur de logout :", err);
    }
  };
  return (
    <div className="bandeau ">
      <h1 className="display-1">PAGE ADMIN !</h1>
      <button onClick={logOut}>LOGOUT</button>
    </div>
  );
};

export default Admin;
