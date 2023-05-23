

const SingleChefRecommend = ({ item }) => {
    console.log(item)
    const { name, image, recipe } = item;
    return (
        <div className="bg-base-200">
            <figure><img src={image} className="w-[425px] h-[300px]" alt="Shoes" /></figure>
            <div className="card-body text-center ">
                <h2 className="card-title flex justify-center"> {name}</h2>
                <p>{recipe}</p>

            </div>
            <div className="flex justify-center mb-5">
                <button className="btn btn-outline text-[#BB8506] border-0 border-b-4 mt-4 hover:text-[#BB8506]">View Full Menu</button>
            </div>
        </div>
    );
};

export default SingleChefRecommend;