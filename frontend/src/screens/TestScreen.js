import React from "react";
import MyDropzone from "../components/MyDropZone/MyDropZone";

function TestScreem (){
  return (
    <div className="mx-5">
      <div>
        <h1 className="inline-block mr-6">PRODUCTS </h1>
        <h1 className="inline-block mr-6">&gt; </h1>
        <h5 className="inline-block">Add new product</h5>
      </div>

      <div className="mt-10 mx-32">
        {/* Your form inputs */}
        <MyDropzone /> {/* Move MyDropzone component here */}
      </div>
    </div>
  );
};

export default TestScreem;
