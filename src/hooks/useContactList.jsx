import { useEffect, useState } from "react";
import getContactList from "../services/getContactLIst";
import useAppContext from "../context/AppContext";

const useContactList = () => {
  const [loading, setLoading] = useState(true);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await getContactList();
      setContactList(list);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { loading, contactList };
};

export default useContactList;
