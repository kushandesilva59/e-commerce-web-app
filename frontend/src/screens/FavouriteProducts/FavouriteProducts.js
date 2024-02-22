import React from "react";
import Header from "../../components/Header/Header";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/product-img-1.png";

const FavouriteProducts = () => {
  return (
    <div className="mx-5">
      <h1>FAVOURITE PRODUCTS</h1>

      <div className="flex justify-between mt-10">
        <div
          className="flex bg-gray-200 relative w-1/2"
          style={{ borderRadius: "50px" }}
        >
          <input
            type="email"
            placeholder="name@example.com"
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
          <Button style={{ background: "#001EB9" }}>New product</Button>
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
            <tr style={{borderBottom:"transparent"}}>
              <td className="my-auto ">#CA</td>
              <td className="text-center ">
                <img src={image} className="w-12 inline-block" />
              </td>
              <td>Product name</td>
              <td>30</td>
              <td className="flex bg-red-400">
                <div>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#001EB9" }} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#001EB9" }} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#001EB9" }} />
                </div>
              </td>
            </tr>

          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavouriteProducts;
