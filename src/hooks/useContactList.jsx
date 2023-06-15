import { useEffect, useState } from "react";
import getContactList from "../services/getContactLIst";
import useAppContext from "../context/AppContext";

const useContactList = () => {
  const [loading, setLoading] = useState(true);
  const [contactList, setContactList] = useState([]);

  const { store } = useAppContext();

  const fetchData = async () => {
    const list = await getContactList();
    setContactList(list);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [store.userInput]);

  return { loading, contactList };
};

export default useContactList;
