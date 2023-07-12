import { createContext, useContext, useState, useEffect } from "react";
import useContactList from "../hooks/useContactList";
import sendNewContact from "../services/sendNewContact";
import deleteContact from "../services/deleteContact";
import editContact from "../services/editContact";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [idToModify, setIdToModify] = useState(0);
  const [userName, setUserName] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [contactToEdit, setContactToEdit] = useState();

  const { contactList, loading, setLoading, fetchData } =
    useContactList(userName);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserName = localStorage.getItem("username");
    setUserName(storedUserName);
    setLoading(true);
  }, []);

  const handleUserNameSubmit = (e) => {
    e.preventDefault();
    setUserName(userNameInput);
    localStorage.setItem("username", userNameInput);
    setUserNameInput("");
    setLoading(true);
  };

  const changeUsername = () => {
    localStorage.removeItem("username");
    setUserName("");
    navigate("/");
    setLoading(true);
  };

  const handleSubmit = async (info) => {
    setLoading(true);
    await sendNewContact(info, userName);
    fetchData();
    navigate("/");
  };

  const handleDeleteButton = async (id) => {
    setLoading(true);
    await deleteContact(id);
    setAlertOpen(false);
    fetchData();
  };

  const handleEdit = async (info) => {
    setLoading(true);
    await editContact(info, idToModify, userName);
    fetchData();
    setPromptOpen(false);
  };

  const getContactToEdit = async (contactID) => {
    setLoading(true);
    const contactInfo = contactList.find((contact) => {
      return contact.id === contactID;
    });

    setContactToEdit(contactInfo);
  };

  useEffect(() => {
    getContactToEdit(idToModify);
  }, [idToModify]);

  const actions = {
    handleSubmit,
    handleDeleteButton,
    handleEdit,
    handleUserNameSubmit,
    setAlertOpen,
    setPromptOpen,
    setIdToModify,
    setUserName,
    setUserNameInput,
    setContactToEdit,
    getContactToEdit,
    changeUsername,
  };

  const store = {
    promptOpen,
    alertOpen,
    idToModify,
    contactList,
    loading,
    userName,
    userNameInput,
    contactToEdit,
  };

  return (
    <AppContext.Provider value={{ actions, store }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
