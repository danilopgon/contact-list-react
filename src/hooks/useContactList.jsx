import { useEffect, useState } from "react";
import getContactList from "../services/getContactLIst";

const useContactList = () => {
  const [loading, setLoading] = useState(true);
  const [contactList, setContactList] = useState([]);

  const fetchData = async () => {
    const list = await getContactList();
    setContactList(list);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  return { loading, setLoading, contactList, fetchData };
};

export default useContactList;
