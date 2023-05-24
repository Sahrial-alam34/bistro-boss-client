import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";


import SingleChefRecommend from "../SingleChefRecommend/SingleChefRecommend";
const ChefRecommend = () => {

    const [menu] = useMenu();
    const chefRecommend = menu.filter(item => item.category === 'popular').slice(1,4)

    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular').slice(1,4)
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <section>
            <SectionTitle
                heading="chef recommends"
                subHeading="Should Try"
            >

            </SectionTitle>
            <div className="card shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                    chefRecommend.map(item => <SingleChefRecommend
                    key={item._id}
                    item={item}
                    ></SingleChefRecommend>)
                }
             
            </div>
        </section>
    );
};

export default ChefRecommend;