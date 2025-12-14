import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch, updateIsSorted } from "../slices/controlConatctsSlice";
import { removeAll } from "../slices/conatctsSlice";

function ContactsController() {
  const dispatch = useDispatch();
  const { search, isSortedAsc } = useSelector((state) => state.control);
  return (
    <div className="container mt-4"style={{ maxWidth: "600px" }}>
      <label className="form-label"> Search :</label>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          dispatch(updateSearch(e.target.value));
        }}
        className="form-control mb-3"
        placeholder="Search..."
      />

      <button onClick={() => dispatch(updateIsSorted())} className="btn btn-primary">
        Trier {isSortedAsc ? "A->Z" : "Z->A"}
      </button> &nbsp;&nbsp;&nbsp;
    
      <button
        onClick={() => {
          dispatch(removeAll());
        }}
        className="btn btn-danger"
      >
        Tout effacer
      </button>
    </div>
  );
}

export default ContactsController;
