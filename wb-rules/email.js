var email = require("email");

email.start({
  id: "email",
  title: "Email Manager",

  clients_title: "Smart house",
  clients: [
    "mail_1@gmail.com",
    "mail_2@gmail.com",
  ],

  support_title: "Smart house (Project name)",
  support: [
    "mail_3@gmail.com",
    "mail_4@gmail.com",
  ],
});
