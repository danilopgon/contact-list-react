const sendNewContact = async (contact) => {
  const { full_name, email, address, phone } = contact;

  const newContact = {
    full_name: full_name,
    email: email,
    agenda_slug: "danilopgon",
    address: address,
    phone: phone,
  };

  const stringContact = JSON.stringify(newContact);

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: stringContact,
  };

  fetch("https://assets.breatheco.de/apis/fake/contact/", options)
    .then((response) => response.json())
    .then((response) => {
      if (!response.ok) {
        throw Error();
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

export default sendNewContact;
