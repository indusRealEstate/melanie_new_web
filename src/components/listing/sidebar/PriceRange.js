"use client";
import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = ({filterFunctions}) => {
  const [price, setPrice] = useState({ value: { min: 20, max: 200000000 } });
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value });
 
  filterFunctions?.handlepriceRange([value.min  || 0,value.max])
 };

  return (
    <>
      <div className="range-wrapper">
        <InputRange
          formatLabel={() => ``}
          maxValue={200000000}
          minValue={20}
          value={{min:filterFunctions?.priceRange[0],max:filterFunctions?.priceRange[1]}}
          onChange={(value) => handleOnChange(value)}
          id="slider"
        />
        <div className="d-flex align-items-center">
          <span id="slider-range-value1">{currencyFormatter.format(price.value.min)}</span>
          <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
          <span id="slider-range-value2">{currencyFormatter.format(price.value.max)}</span>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
