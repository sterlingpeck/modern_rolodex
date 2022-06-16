let contactFirstName = document.querySelector("#contact-fname");
let contactLastName = document.querySelector("#contact-lname");
let contactEmail = document.querySelector("#contact-email");
let contactPhone = document.querySelector("#contact-phone");
let contactAddress = document.querySelector("#contact-adress");

let saveContactBtn = document.querySelector("#save-contact");

const handleContactSave = () => {
  const newContact = {
    firstname: contactFirstName.value,
    lastname: contactLastName.value,
    email: contactEmail.value,
    phone: contactPhone.value,
    // address: contactAddress.value,
  };
  console.log(newContact);
  fetch("./api/contacts/api/contactpost", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newContact)
  }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  // saveContact(newContact).then(() => {
  //   getAndRenderContact();
  //   renderActiveContact();
  // });
};

// activeNote is used to keep track of the note in the textarea
// let activeNote = {};

// const getContacts = () =>
//   fetch("/api", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

// const saveContacts = (contact) =>
//   fetch("/api/notes", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(contact),
//   });

// const deleteContact = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

// const renderActiveContact = () => {
//   hide(saveContactBtn);

//   if (activeContact.id) {
//     contactFirstName.setAttribute("readonly", true);
//     contactLastName.setAttribute("readonly", true);
//     contactFirstName.value = activeContact.title;
//     contactLastName.value = activeContact.text;
//   } else {
//     contactFirstName.removeAttribute("readonly");
//     contactLastName.removeAttribute("readonly");
//     contactFirstName.value = "";
//     contactLastName.value = "";
//   }
// };

saveContactBtn.addEventListener("click", handleContactSave);


// router.get('/', (req, res) => {
//   res.render('homepage', {
//     id: 1,
//     post_url: 'https://handlebarsjs.com/guide/',
//     title: 'Handlebars Docs',
//     created_at: new Date(),
//     vote_count: 10,
//     comments: [{}, {}],
//     user: {
//       username: 'test_user'
//     }
//   });
// });