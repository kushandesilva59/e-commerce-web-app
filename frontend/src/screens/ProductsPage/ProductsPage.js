import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const ProductsPage = () => {

 


  return (
    <div className="mx-5">
      <h1>FAVOURITE PRODUCTS</h1>
      <div className="flex justify-between my-10">
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
          <Button style={{ background: "#001EB9" }}>New product</Button>
          {/* <div className="border-blue-500 w-10 flex justify-center items-center"><FontAwesomeIcon icon={faStar} /></div> */}
          <Button className="bg-transparent">
            <FontAwesomeIcon icon={faStar} style={{ color: "#001EB9" }} />
          </Button>
        </div>
      </div>

      <h4 className="text-gray-500">4 results found for 'Books'</h4>

      <div className="mx-28">
        <div className="mt-5">
          <h4 className="text-sm">#CA25</h4>
          <h2 className="font-base">Product-name</h2>
          <p className="text-xs text-gray-400">
            Lore KASDFHASKF ASUIF DKASMFAIF IASDFUASIFJAFIDFJDFISDFUF
            fsdfisfsdfk
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
