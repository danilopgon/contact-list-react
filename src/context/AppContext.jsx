import { createContext, useContext, useState } from "react";
import useContactList from "../hooks/useContactList";
import sendNewContact from "../services/sendNewContact";
import deleteContact from "../services/deleteContact";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [promptOpen, setPromptOpen] = useState(false);

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendNewContact(userInput);
    setUserInput({
      full_name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  const handleDeleteButton = (id) => {
    deleteContact(id);
  };

  const actions = {
    handleUserInput,
    handleSubmit,
    handleDeleteButton,
  };

  const store = {
    userInput,
    promptOpen,
  };

  return (
    <AppContext.Provider value={{ actions, store }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
