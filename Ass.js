
function createContact(firstName, lastName, phoneNumber, emailAddress) {
  return {
    fullName: `${firstName} ${lastName}`,
    phoneNumber,
    emailAddress,
  };
}


function createContactList() {
  const contactList = [];

  const contact1 = createContact(
    "Ade",
    "ola",
    "09030437904",
    "Adeola@gmail.com"
  );
  const contact2 = createContact(
    "ade",
    "nike",
    "08029895347",
    "adenike@gmail.com"
  );

  contactList.push(contact1, contact2);


  return contactList;
}


const myContactList = createContactList();


console.log("Contact List:", myContactList);
