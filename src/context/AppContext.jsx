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
  const [alertOpen, setAlertOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);

  const { contactList, loading, fetchData } = useContactList();

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

  const handleDeleteButton = async (id) => {
    await deleteContact(id);
    await fetchData();
  };

  const actions = {
    handleUserInput,
    handleSubmit,
    handleDeleteButton,
    setAlertOpen,
    setIdToDelete,
  };

  const store = {
    userInput,
    promptOpen,
    alertOpen,
    idToDelete,
    contactList,
    loading,
  };

  return (
    <AppContext.Provider value={{ actions, store }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
