import Banner from "../Banner/Banner";
import BistroDetails from "../BistroDetails/BistroDetails";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroDetails></BistroDetails>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <ChefRecommend></ChefRecommend>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;