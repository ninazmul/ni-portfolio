import ItemCart from "./ItemCart";


const ItemTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCart key={item._id} item={item}></ItemCart>
        ))}
      </div>
    </div>
  );
};

export default ItemTab;