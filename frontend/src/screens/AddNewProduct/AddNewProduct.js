import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

const AddNewProduct = () => {
  const [dragging, setDragging] = useState(false);
  
  const [images, setImages] = useState([]);
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [qty, setQty] = useState(0);





  const handleRemove = (index) => {
    const updatedFiles = [...images];
    updatedFiles.splice(index, 1);
    setImages(updatedFiles);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    const newImages = [...images];
    imageFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        newImages.push(reader.result);
        setImages(newImages);
      };
      reader.readAsDataURL(file);
      console.log(file)
    });
  };



  const addProductHandler = () => {

    const data = {
      sku: sku,
      qty: qty,
      name: name,
      images: images,
      description: description
    }
    console.log(data)
  };
  return (
    <div className="mx-5">
      <div>
        <h1 className="inline-block mr-6">PRODUCTS </h1>
        <h1 className="inline-block mr-6">&gt; </h1>
        <h5 className="inline-block">Add new product</h5>
      </div>

      <div className="mt-10 mx-32">
        <div className="w-full">
          <label className="mr-5 w-10">SKU</label>
          <input
            type="text"
            placeholder="name"
            className=" w-1/4 pl-2 rounded-sm h-10"
            style={{ background: "#f7f7f7" }}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>

        <div className="mt-5 flex w-full ">
          <div className=" w-full">
            <label className="mr-5 w-10">Name</label>
            <input
              type="text"
              placeholder="name"
              className=" pl-2 rounded-sm w-1/2 h-10"
              style={{ background: "#f7f7f7" }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label className="mr-5 w-10">QTY</label>
            <input
              type="text"
              placeholder="name"
              className=" pl-2 rounded-sm w-1/2 h-10"
              style={{ background: "#f7f7f7" }}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
        </div>

        <div className=" w-full mt-14">
          <h6 className="mr-5">Product Description</h6>
          <p className="text-gray-400 text-sm">
            A small description about product
          </p>
          <textarea
            type="text"
            placeholder="name"
            className=" pl-2 rounded-sm w-4/5 h-20"
            style={{ background: "#f7f7f7" }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className=" w-9/12 gap-2 mt-14 flex  ">
          <h6 className="mr-5">Product Images</h6>
          <p className="text-gray-400 text-sm w-28">
            JPEG, PNG, SVG or GIF(Maximum file size 50MB)
          </p>
          <div>
            <div
              className={`dropzone ${dragging ? "dragging" : ""}`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {
                <div className="image-preview flex gap-3 mb-6">
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="preview-image"
                        style={{ width: "60px" }}
                      />
                      <button onClick={() => handleRemove(index)}>
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              }
              {
                <>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleFiles(Array.from(e.target.files))}
                  />
                </>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end  mr-96">
        <Button className="justify-self-end mr-14" onClick={addProductHandler}>
          Add Product
        </Button>
      </div>
    </div>
  );
};

export default AddNewProduct;