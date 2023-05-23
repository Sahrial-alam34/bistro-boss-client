import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { useEffect, useState } from "react";
import SingleChefRecommend from "../SingleChefRecommend/SingleChefRecommend";
const ChefRecommend = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular').slice(0,3)
                setMenu(popularItems)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                heading="chef recommends"
                subHeading="Should Try"
            >

            </SectionTitle>
            <div className="card   shadow-xl grid grid-cols-3 gap-5">
            {
                    menu.map(item => <SingleChefRecommend
                    key={item._id}
                    item={item}
                    ></SingleChefRecommend>)
                }
             
            </div>
        </section>
    );
};

export default ChefRecommend;