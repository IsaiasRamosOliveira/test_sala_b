const users = [
  {
    name: "paulo",
    email: "paulo@gmail.com",
    bank: {
      cpf: "999999999-99",
      balance: 6000,
    },
  },
  {
    couple: [
      {
        name: "ana",
        email: "ana@gmail.com",
        bank: {
          cpf: "999999999-99",
          balance: 6000,
        },
      },
      {
        name: "pedro",
        email: "pedro@gmail.com",
        bank: {
          cpf: "999999999-99",
          balance: 6000,
        },
      },
    ],
  },
  {
    name: "beatriz",
    email: "beatriz@gmail.com",
    bank: {
      cpf: "999999999-99",
      balance: 6000,
    },
  },
];

users[0].bank.balance = 8000;
users[1].couple[1].bank.balance = 10000;
users[1].couple[0].email = "anajulia@gmail.com";

console.log(users[1].couple[0].email);
