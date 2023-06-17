const editContact = async (contact, id, username) => {
  const { full_name, email, address, phone } = contact;

  const newInfo = {
    full_name: full_name,
    email: email,
    agenda_slug: username,
    address: address,
    phone: phone,
  };

  const stringContact = JSON.stringify(newInfo);

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: stringContact,
  };

  fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, options)
    .then((response) => response.json())
    .then((response) => {
      if (!response.ok) {
        throw Error();
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

export default editContact;
