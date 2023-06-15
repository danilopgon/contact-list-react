import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const actions = {
    handleUserInput,
    handleSubmit,
  };

  const store = {
    userInput,
  };

  return (
    <AppContext.Provider value={{ actions, store }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
