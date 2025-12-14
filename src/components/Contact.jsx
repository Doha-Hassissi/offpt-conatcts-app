import React from "react";
import { removeContact } from "../slices/conatctsSlice";
import { useDispatch } from "react-redux";
function Contact({ id, name, phone }) {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
      </div>
      <div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(phone);
            alert("Copied " + phone);
          }}
        >
          Copier
        </button>
        <button
          onClick={() => {
            dispatch(removeContact(id));
          }}
        >
          Supprimer
        </button>
      </div>
    </li>
  );
}

export default Contact;
