import { Card } from "antd";

const{Meat}=Card;

const renderCardCol=(array)=>
    array.map(item =>
        <>
<Card hoverable 
cover={<img src={item.image}/>}>
    <Meta title={item.name}/>

</Card>
        </>
)

{/* <img src={item.image}/>
<h3>{item.name}</h3> */}



const {Meta}=Card;


const CardCol = ({items}) => {
    return (
        <>
     <div>
{renderCardCol(items)}
     </div>

       
        </>
    );
};

export default CardCol;

{/* <Card
hoverable

cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
>
<Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>  */}