import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faSearch,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/product-img-1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const navigater = useNavigate();

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/products");
    setProducts(data);
    console.log(data)
  };

  useEffect(() => {
    console.log("ok");
    fetchProducts();
    console.log(products)
  }, []);

  const handleDelete = async (id) => {
    console.log(id)
    try {


      

     
      await axios.delete(`http://localhost:5000/api/products/${id}`);

      //remake the products without deleted one
      setProducts(products.filter((product) => product.id !== id));
      window.location.reload(true);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div className="mx-5">
      <h1>PRODUCTS</h1>

      <div className="flex justify-between mt-10">
        <div
          className="flex bg-gray-200 relative w-1/2"
          style={{ borderRadius: "50px" }}
        >
          <input
            type="text"
            placeholder="Search for products"
            style={{ borderRadius: "50px" }}
            className="bg-gray-200 border-opacity-0 focus:border-transparent focus:outline-none pl-5 py-2 w-full"
          />

          <div
            className="absolute w-1/5 h-8 m-2 right-1 cursor-pointer flex px-2 justify-around items-center"
            style={{ borderRadius: "50px", background: "#001EB9" }}
          >
            <FontAwesomeIcon icon={faSearch} style={{ color: "fff" }} />
            <div className="text-white">Search</div>
          </div>
        </div>

        <div className="flex m-2 w-44 justify-between">
          <Button
            style={{ background: "#001EB9" }}
            onClick={() => navigater("/new-product")}
          >
            New product
          </Button>
          {/* <div className="border-blue-500 w-10 flex justify-center items-center"><FontAwesomeIcon icon={faStar} /></div> */}
          <Button className="bg-transparent">
            <FontAwesomeIcon icon={faStar} style={{ color: "#001EB9" }} />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div>
        <table className="table mt-14 px-6 text-center">
          <thead>
            <tr>
              <th scope="col">SKU</th>
              <th scope="col" className="">
                IMAGE
              </th>
              <th scope="col">PRODUCT NAME</th>
              <th scope="col">QTY</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => {
              return (
                <tr style={{ borderBottom: "transparent" }} key={product.sku}>
                  <td className="my-auto ">{product.sku}</td>
                  <td className="text-center ">
                    <img
                      src={product.images[0] ? product.images[0] : image}
                      className="w-12 inline-block"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.qty}</td>
                  <td className="flex bg-red-400 gap-3">
                    <div>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "#001EB9" }}
                        className="cursor-pointer"
                        onClick={() => handleDelete(product._id)}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faPen}
                        style={{ color: "#001EB9" }}
                        className="cursor-pointer"
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#001EB9" }}
                        className="cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandingPage;
