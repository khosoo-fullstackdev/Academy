const root = document.getElementById("root");
const news = [
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    shareCount: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313587-18122023-1702893490-159251535-oniiontslohhumuus1.jpg",
    title: "2023 ОНЫ ОНЦЛОХ ХҮМҮҮС",
    description: "2023 оны онцлох хүмүүс, хамт олныг танилцуулж байна",
    share: "fas fa-share color-light-gray text-15",
    shareCount: "300",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
    title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
    description:
      "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
    share: "",
    comment: "",
    time: "",
  },
];
// {
//     img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/12/313969-20122023-1703030810-1258602447-2.jpg",
//     title: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч чанга хэвээр байна",
//     description: "Өнөө маргаашдаа ихэнх нутгаар хүйтний эрч хэвээр хадгалагдана.",
//     share: "",
//     comment: "",
//     time: "",
// },
function createNews(addNews) {
  const cardDiv = document.createElement("div");
  const cardRight = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("p");
  const cardDesc = document.createElement("p");
  const cardInter = document.createElement("div");
  const cardShare = document.createElement("i");
  const cardComment = document.createElement("i");
  const cardTime = document.createElement("i");
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardRight);
  cardRight.appendChild(cardTitle);
  cardRight.appendChild(cardDesc);
  cardRight.appendChild(cardInter);
  cardInter.appendChild(cardShare);
  cardInter.appendChild(cardComment);
  cardInter.appendChild(cardTime);
  cardTitle.innerText = addNews.title;
  cardDesc.innerText = addNews.description;
  cardComment.innerText = addNews.comment;
  cardTime.innerText = addNews.time;
  cardShare.innerText = addNews.shareCount;
  cardRight.setAttribute("class", "cardRight");
  cardDiv.setAttribute("class", "newsCard");
  cardImg.setAttribute("src", addNews.img);
  cardImg.setAttribute("id", "image");
  cardTitle.setAttribute("class", "title");
  cardDesc.setAttribute("class", "descrip");
  cardShare.setAttribute("class", addNews.share);
  cardComment.setAttribute("class", "comment");
  cardTime.setAttribute("class", "time");
  return cardDiv;
}
news.map((a) => {
  root.appendChild(createNews(a));
});
