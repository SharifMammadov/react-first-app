import React from "react";
import Contacts from "./Contacts/Contacts";
import Experience from "./Experience/Experience";
import Personalinfo from "./PersanalInfo/Personalinfo";

export default function UserCv() {
  return (
    <div className="container">
     <Personalinfo/>
      <Experience />
      <Contacts />
    </div>
  );
}
