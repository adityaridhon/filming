import React from "react";

const HeaderSection = (props) => {
  return (
    <div
      className="h-96 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/headerpage.jpg')" }}
    >
      <div className="layer absolute inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center">
        <div className="wrap">
          <div className="caption text-center mx-20 md:max-w-6xl pt-14">
            <h1 className="md:text-4xl text-3xl text-white font-bold mb-4">
              {props.name}
            </h1>
            <p className="md:text-lg text-sm text-gray-200">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
