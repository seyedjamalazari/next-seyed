import { Collapse } from "antd";
import ProductCarCard from "../Cards/ProductCarCard";
import { ProductCarCollappseStyle } from "./ProductCarCollapse.style";

const products = [
  {
    name: "benz",
    id: 1,
    image: "images/products/benz.jpg",
    description: "www.benz.com",
  },
  {
    name: "bmw",
    id: 2,
    image: "images/products/bmw.jpeg",
    description: "www.bmw.com",
  },
  {
    name: "chevrolet",
    id: 3,
    image: "images/products/chevrolet.jpeg",
    description: "www.chevrolet.com",
  },
  {
    name: "ferrari",
    id: 4,
    image: "images/products/ferrari.jpeg",
    description: "www.ferrari.com",
  },
  {
    name: "porche",
    id: 5,
    image: "images/products/porche.jpeg",
    description: "www.porche.com",
  },
  {
    name: "toyota",
    id: 5,
    image: "images/products/toyota.jpeg",
    description: "www.toyota.com",
  },
];

const ProductCarCollappse = ({ children }) => {
  const { Panel } = Collapse;
  return (
    <>
    
      <ProductCarCollappseStyle>
        <Collapse>
          <Panel header="Produt-Car" key="1">
            {children}
            <div className="ProductWrapper">
            {products.map((product) => (
              <ProductCarCard product={product} key={product.id} />
            ))}</div>
          </Panel>
        </Collapse>
      </ProductCarCollappseStyle>
    </>
  );
};

export default ProductCarCollappse;
