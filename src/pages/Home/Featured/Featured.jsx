import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20" >
            <SectionTitle
                subHeading="check it out"
                heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10" >
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui itaque magnam dolores quaerat officiis, distinctio nobis adipisci praesentium similique minus facilis quidem quis aut quia ipsum unde nisi perferendis exercitationem! Voluptatum optio dicta quaerat fugiat autem nisi, veniam ducimus inventore alias debitis beatae in explicabo, quis deserunt sequi quisquam! Hic.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;