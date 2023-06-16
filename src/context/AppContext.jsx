import { createContext, useContext, useState } from "react";
import useContactList from "../hooks/useContactList";
import sendNewContact from "../services/sendNewContact";
import deleteContact from "../services/deleteContact";
import editContact from "../services/editContact";

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
  const [idToModify, setIdToModify] = useState(0);

  const { contactList, loading, setLoading, fetchData } = useContactList();

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await sendNewContact(userInput);
    setUserInput({
      full_name: "",
      email: "",
      phone: "",
      address: "",
    });
    fetchData();
  };

  const handleDeleteButton = async (id) => {
    setLoading(true);
    await deleteContact(id);
    setAlertOpen(false);
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await editContact(userInput, idToModify);
    setUserInput({
      full_name: "",
      email: "",
      phone: "",
      address: "",
    });
    fetchData();
    setPromptOpen(false);
  };

  const actions = {
    handleUserInput,
    handleSubmit,
    handleDeleteButton,
    handleEdit,
    setAlertOpen,
    setPromptOpen,
    setIdToModify,
  };

  const store = {
    userInput,
    promptOpen,
    alertOpen,
    idToModify,
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
