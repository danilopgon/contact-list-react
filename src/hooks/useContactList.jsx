import { useEffect, useState } from "react";
import getContactList from "../services/getContactLIst";
import useAppContext from "../context/AppContext";

const useContactList = () => {
  const [loading, setLoading] = useState(true);
  const [contactList, setContactList] = useState([]);

  const { store } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      const list = await getContactList();
      setContactList(list);
      setLoading(false);
    };

    fetchData();
  }, [store.refetch]);

  return { loading, contactList };
};

export default useContactList;
