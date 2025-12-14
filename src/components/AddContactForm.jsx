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
    <div>
      <input
        type="text"
        name="name"
        value={contactsData.name}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        value={contactsData.phone}
        onChange={onChange}
      />
      <button onClick={onClick}>Ajouter</button>
    </div>
  );
}

export default AddContactForm;
