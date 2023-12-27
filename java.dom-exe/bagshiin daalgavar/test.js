const profiles = [
  {
    id: 1,
    name: "khosoo",
    age: 22,
  },
  {
    id: 2,
    name: "temka",
    age: 30,
  },
  {
    id: 3,
    name: "dashka",
    age: 40,
  },
  {
    id: 4,
    name: "munkhbat",
    age: 50,
  },
];
function removeProfile(a) {
  products.filter((x) => {
    return x.id == a;
  });
}
removeProfile(2);
