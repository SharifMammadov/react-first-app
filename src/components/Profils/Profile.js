import React from "react";
import Email from "../UserInfo/Email";
import Name from "../UserInfo/Name";
import Address from "../UserInfo/Address";
import PersonalInfo from "../UserInfo/PersonalInfo";
import "./profile.css"

export default function Profil() {
  return (
    <div className="container">
      E-mail: <Email/>
      Ad: <Name />
      Unvan: <Address />
      Statusu: <PersonalInfo />
    </div>
  );
}
