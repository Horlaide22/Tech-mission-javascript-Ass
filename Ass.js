// Step 1: Create a function to create a contact
function createContact(firstName, lastName, phoneNumber, emailAddress) {
  return {
    fullName: `${firstName} ${lastName}`,
    phoneNumber,
    emailAddress,
  };
}

// Step 2: Write a function to generate a Contact List
function createContactList() {
  const contactList = [];

  // Step 3: Add at least two instances of contacts
  const contact1 = createContact(
    "John",
    "Doe",
    "555-123-4567",
    "johndoe@example.com"
  );
  const contact2 = createContact(
    "Alice",
    "Smith",
    "555-987-6543",
    "alicesmith@example.com"
  );

  // Step 4: Add the created contacts to the array
  contactList.push(contact1, contact2);

  // Step 5: Return the Contact List
  return contactList;
}

// Step 6: Test your function
const myContactList = createContactList();

// Step 7: Console log the result
console.log("Contact List:", myContactList);
