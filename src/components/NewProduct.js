import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Allcontext";

const NewProduct = () => {
  const { user } = useContext(AuthContext);
 
  const navigate = useNavigate();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/category`);
      const data = res.json();
      return data;
    },
  });
  const { data: verify = [] } = useQuery({
    queryKey: ["verify"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/verified?email=${user?.email}`);
      const data = res.json();
      return data;
    },
  });

  const handaleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const productName = form.productname.value;
    const phone = form.phone.value;
    const image = form.image.files[0];
    const location = form.location.value;
    const buyprice = form.buyprice.value;
    const sellingprice = form.sellingprice.value;
    const usedDay = form.dayofused.value;
    const id = form.category.value;
    const time = new Date().toLocaleDateString()
   

    console.log(
      name,
      productName,
      phone,
      location,
      buyprice,
      sellingprice,
      usedDay,
      id,
      image,
      verify.verify
    );

    const formData = new FormData();
    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?key=cfdf6b052709dd278427a89a5cbb7e1d";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        if (imageData.success) {
          const products = {
            email:user?.email,
            name: name,
            productName: productName,
            phone: phone,
            location: location,
            buyprice: buyprice,
            sellingprice: sellingprice,
            usedDay: usedDay,
            cateid: id,
            time,
            image: imageData.data.url,
            verifyed: verify.verify
          };
          fetch(`http://localhost:5000/products`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success("Product Add Successfully");
                navigate("/dashboard");
              }
            });
        }
      })

      .catch((error) => console.error(error.messge));
  };
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Add A Product</h1>
        </div>
        <form
          onSubmit={handaleSubmit}
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="username"
                id="name"
                placeholder="Product Title"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                defaultValue={user?.email}
               
                id="name"
                placeholder="Product Title"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Product Name
              </label>
              <input
                type="text"
                name="productname"
                id="name"
                placeholder="Product Title"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="name"
                placeholder="Your Phone"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Category
              </label>
              <select
                name="category"
                className="select select-accent w-full max-w-xs"
              >
                {categories.map((category) => (
                  <option
                    defaultValue={category._id}
                    key={category._id}
                    value={category._id}
                  >
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="name"
                placeholder="Meeting Location"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Buying Price
              </label>
              <input
                type="text"
                name="buyprice"
                id="name"
                placeholder="Buying Price"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Resell Price
              </label>
              <input
                type="text"
                name="sellingprice"
                id="name"
                placeholder="Reselling Price"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Year Of You Use
              </label>
              <input
                type="text"
                name="dayofused"
                id="name"
                placeholder="Year Of You use"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input type="file" id="image" name="image" accept="image/*" />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button class="btn bg-blue bordder-primary w-full cursor-pointer rounded-md border bg-silver py-3 px-5 text-base text-white transition hover:bg-opacity-90 font-bold">
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
