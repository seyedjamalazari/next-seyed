const rendeImageCartProduct = (array) =>
  array.map((item) => (
    <>
      <img src={item.image} />
      <h3>{item.name}</h3>
    </>
  ));

const ImageCartProduct = ({ items }) => {
  return (
    <>
      <div>{rendeImageCartProduct(items)}</div>
    </>
  );
};

export default ImageCartProduct;
