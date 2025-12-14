import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch, updateIsSorted } from "../slices/controlConatctsSlice";
import { removeAll } from "../slices/conatctsSlice";

function ContactsController() {
  const dispatch = useDispatch();
  const { search, isSortedAsc } = useSelector((state) => state.control);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          dispatch(updateSearch(e.target.value));
        }}
      />
      <button onClick={() => dispatch(updateIsSorted())}>
        Trier {isSortedAsc ? "A->Z" : "Z->A"}
      </button>
      <button
        onClick={() => {
          dispatch(removeAll());
        }}
      >
        Tout effacer
      </button>
    </div>
  );
}

export default ContactsController;
