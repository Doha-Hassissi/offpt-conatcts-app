import React from "react";
import { removeContact } from "../slices/conatctsSlice";
import { useDispatch } from "react-redux";
function Contact({ id, name, phone }) {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item container mt-4"style={{ maxWidth: "700px" }}>
      <div>
        <h3 className="mb-1">{name}</h3>
        <p className="mb-0 text-muted">{phone}</p>
      </div>
      <div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(phone);
            alert("Copied " + phone);
          }}
          className="btn btn-secondary btn-sm me-2"
        >
          Copier
        </button> &nbsp;&nbsp;
        <button
          onClick={() => {
            dispatch(removeContact(id));
          }}
          className="btn btn-danger btn-sm"
        >
          Supprimer
        </button>
      </div>
    </li>
  );
}

export default Contact;
