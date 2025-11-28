const radheRadheBBUsers = [
  {
    id: 1,
    code: "RR",
    name: "balaram balaram",
    product: ["vegetables", "juice", "sweets"],
  },
  {
    id: 2,
    code: "rr",
    name: "radhika radhika",
    product: ["dairy", "snacks", "fastfood"],
  },
];
const koteshworBBUsers = [
  {
    id: 3,
    name: "gopal gopal",
    code: "KOT",
    product: ["milk", "Choclates", "KFC"],
  },
  {
    id: 4,
    name: "krishna krishna",
    code: "KOT",
    product: ["bread", "cookies", "fruits"],
  },
];
const abc = () => {
  const allUsers = [...radheRadheBBUsers, ...koteshworBBUsers];
  const result = allUsers
    .filter((User) => User.name === "gopal gopal")
    .map((User) => {
      if (User.name === "gopal gopal") {
        return User.product;
      }
    });
  return result;
};
//console.log(abc());
const findEvenUserFromKOT = () => {
  const allUsers = [...radheRadheBBUsers, ...koteshworBBUsers];
  const result = allUsers
    .filter((User) => User.id % 2 === 0 && User.code == "KOT")
    .map((User) => User.product);
  return result.flat()
}
console.log(findEvenUserFromKOT());
