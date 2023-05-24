

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <div className="card bg-base-200 h-[550px] w-[400px] ">
                <figure><img src={image} className="w-[425px] h-[300px]" alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                  
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-[#BB8506] border-0 border-b-4 mt-4 hover:text-[#BB8506]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;