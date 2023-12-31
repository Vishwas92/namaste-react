import { CON_URL } from "../utils/constants";
const ItemList = ({items}) => {
    console.log(items);
    return(
        <div>
               {items.map(item => (
               <div key={item.card.info.id} className="m-2 p-2 border-gray-200 border-b-2 text-left flex">
                <div className="w-9/12">
                <div className=" py-2 font-bold">
                    <span>{item.card.info.name}</span>
                    <span> - ₹{item.card.info.price/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
               <div className="w-3/12 p-4">
                <div className="absolute">
                    <button className="border mx-5 my-20 bg-white rounded-lg p-2 shadow-lg">Add+</button>
                </div>
                   <img src={CON_URL + item.card.info.imageId} className="w-40" />
               </div>
               </div>
               ))}
        </div>
    );
};

export default ItemList;