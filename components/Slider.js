import { Carousel } from "antd";

const renderImages = (array) => array.map((item) => <img src={item} />);

const Slider = ({ images }) => {
  return (
    <>
      <Carousel autoplay>{renderImages(images)}</Carousel>
    </>
  );
};

export default Slider;
