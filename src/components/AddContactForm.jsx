import React, { useState } from "react";
import { addNewContact } from "../slices/conatctsSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
function AddContactForm({ setS }) {
  const dispatch = useDispatch();
  const [contactsData, setContactsData] = useState({
    id: uuidv4(),
    phone: "",
    name: "",
  });

  const onChange = (e) => {
    setContactsData({ ...contactsData, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    const { phone, name } = contactsData;
    if (!phone || !name) return alert("Invalid data");
    dispatch(addNewContact(contactsData));
    setContactsData({ phone: "", name: "", id: Date.now() });
  };

  return (
    <div className="container mt-4"style={{ maxWidth: "600px" }}>
      <div className="mb-3">
        <label className="form-label">Nom</label>
      <input
        type="text"
        name="name"
        value={contactsData.name}
        onChange={onChange}
        className="form-control"
      />
      </div>
      <div className="mb-3">
        <label  className="form-label ">Téléphone</label>
      <input
        type="text"
        name="phone"
        value={contactsData.phone}
        onChange={onChange}
        class="form-control"
      />
      </div>
      <button onClick={onClick} className="btn btn-primary w-30 ">Ajouter</button>
    </div>
  );
}

export default AddContactForm;
