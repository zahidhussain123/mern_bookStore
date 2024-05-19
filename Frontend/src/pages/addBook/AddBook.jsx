/* eslint-disable react/no-unknown-property */
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate()
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const bookData = {
      title: data?.title,
      name: data?.name,
      price: data?.price,
      category: data?.category,
      image: data?.image,
    };
    try {
      const response = await axios.post("http://localhost:4001/book/addBook", bookData);
      if(response?.status === 200){
        toast.success(response?.data?.message);
        navigate("/")
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Book
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              placeholder="Enter title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Enter name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              name="price"
              placeholder="Enter price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="category"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              placeholder="Enter category"
              name="category"
              {...register("category", { required: true })}
            />
            {errors.category && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="image"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="text"
              placeholder="Enter image URL"
              name="image"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <Link
            to="/"
              className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
