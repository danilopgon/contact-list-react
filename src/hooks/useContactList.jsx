import { useEffect, useState } from "react";
import getContactList from "../services/getContactLIst";

const useContactList = (username) => {
  const [loading, setLoading] = useState(true);
  const [contactList, setContactList] = useState([]);

  const fetchData = async () => {
    const list = await getContactList(username);
    setContactList(list);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  return { loading, setLoading, contactList, fetchData };
};

export default useContactList;
