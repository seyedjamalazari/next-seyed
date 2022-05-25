import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { ProductCarCardStyle } from "./ProductCarCardStyle";

const ProductCarCard = ({ product }) => {
  return (
    <>
      <ProductCarCardStyle>
        <div className="CardWrapper">
          <Card cover={<img name={product.name} src={product.image} />}>
            <Meta title={product.name} description={product.description} />
          </Card>
        </div>
      </ProductCarCardStyle>
    </>
  );
};

export default ProductCarCard;
