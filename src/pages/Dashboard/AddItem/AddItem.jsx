import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset} = useForm();
    //console.log(img_hosting_token)
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new Items', data.data)
                            if (data.data.insertedId) {
                                reset();

                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })

                }
            })
    }
    //console.log(errors)
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's new " heading="Add An Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="form-control w-full mb-4 ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>

                    </label>
                    <input type="text" placeholder="Recipe Name "
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />

                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>

                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled >Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Deshi</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>

                    </div>
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>

                        </label>
                        <input type="number"  {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>

                    </label>
                    <textarea  {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                </div>
                <div className="form-control w-full my-4 ">
                    <label className="label">
                        <span className="label-text">Item Images*</span>

                    </label>
                    <input type="file"  {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full " />

                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />

            </form>
        </div>
    );
};

export default AddItem;