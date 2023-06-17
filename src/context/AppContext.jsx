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
  const [userName, setUserName] = useState("");
  const [userNameInput, setUserNameInput] = useState("");

  const { contactList, loading, setLoading, fetchData } =
    useContactList(userName);

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
    await sendNewContact(userInput, userName);
    setUserInput({
      full_name: "",
      email: "",
      phone: "",
      address: "",
    });
    fetchData();
  };

  const handleUserNameSubmit = (e) => {
    e.preventDefault();
    setUserName(userNameInput);
    setUserNameInput("");
    setLoading(true);
  };

  const handleDeleteButton = async (id) => {
    setLoading(true);
    await deleteContact(id);
    setAlertOpen(false);
    fetchData();
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await editContact(userInput, idToModify, userName);
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
    handleUserNameSubmit,
    setAlertOpen,
    setPromptOpen,
    setIdToModify,
    setUserName,
    setUserNameInput,
  };

  const store = {
    userInput,
    promptOpen,
    alertOpen,
    idToModify,
    contactList,
    loading,
    userName,
    userNameInput,
  };

  return (
    <AppContext.Provider value={{ actions, store }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
