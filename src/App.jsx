import React, { useEffect, useState } from "react";
import AddContactForm from "./components/AddContactForm";
import ContactsController from "./components/ContactsController";
import Contact from "./components/Contact";
import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const { isSortedAsc, search } = useSelector((state) => state.control);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <h1>Gestionnaire des contacts</h1>
      <p>
        Ajouter un contact,Cherche par nom,trie la liste, et sauvgarde
        automatique automatique
      </p>
      <AddContactForm />
      <ContactsController />
      <div>
        Contacts :{" "}
        {
          contacts.filter((c) => {
            if (!search) return true;
            return c.name.toLowerCase().includes(search.toLowerCase());
          }).length
        }
      </div>
      <ul>
        {[...contacts]
          .sort((a, b) =>
            isSortedAsc
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name)
          )
          .filter((c) => {
            if (!search) return true;
            return c.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((contact) => {
            return (
              <Contact
                key={contact.id}
                /* id={contact.id}
              name={contact.name}
              phone={contact.phone} */
                {...contact}
              />
            );
          })}
      </ul>
    </>
  );
}

export default App;
