const Card = ({ data }) => {
  console.log("inside card component: ", data);
  return (
    <div>
      <p>{data.title}</p>
      <img src={data.img} alt="" />
    </div>
  );
};
export default Card;
