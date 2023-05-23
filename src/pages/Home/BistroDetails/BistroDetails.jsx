import './BistroDetails.css'


const BistroDetails = () => {
    return (
        // <div className=" featured-item bg-fixed">
        //     <div className="bg-white text-center px-40">
        //         <h1 className="text-3xl uppercase">Bistro Boss</h1>
        //         <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        //     </div>
        // </div>
        <div className="featured-item bg-fixed text-white p-20 my-20" >

            <div className="md:flex justify-center items-center bg-white bg-opacity-100 pb-20 pt-12 px-36">

                <div className="md:ml-10 text-black text-center" >
                    <h1 className="text-3xl uppercase mb-3">Bistro Boss</h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>

        </div>
    );
};

export default BistroDetails;