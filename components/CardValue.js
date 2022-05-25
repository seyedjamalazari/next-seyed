import CardCol from "./CardCol";

const items = [
  { name: "benz", image: "/1.png", webAddress: "www.benz.com" },
  { name: "toyota", image: "/2.png", webAddress: "www.toyota.com" },
  { name: "bmw", image: "/3.png", webAddress: "www.bmw.com" },
];

const CardValue = () => {
  return <>
  <CardCol items={items}/>

 
  </>;
};

export default CardValue;
