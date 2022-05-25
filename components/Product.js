import ImageCartProduct from "./Cards/ImageCartProduct";


const items = [
  { name: "benz", image: "/images/products/benz.jpg" },
  { name: "bmw", image: "/images/products/bmw.jpeg" },
  { name: "chevrolet", image: "/images/products/chevrolet.jpeg" },
  { name: "ferrari", image: "/images/products/ferrari.jpeg" },
  { name: "porche", image: "/images/products/porche.jpeg" },
  { name: "toyota", image: "/images/products/toyota.jpeg" },
];

const Product = () => {
  return (
    <>
      <ImageCartProduct items={items} />
    </>
  );
};

export default Product;
