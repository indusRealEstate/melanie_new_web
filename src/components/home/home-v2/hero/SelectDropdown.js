"use client";
import { getAllPropertyCategories } from "@/api/listings";
import { useEffect, useState } from "react";
import Select from "react-select";

const SelectDropdown = ({ setSelectedPropType }) => {
  const [catOptions, setCatOptions] = useState([]);

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#c49f5a"
          : isHovered
          ? "#c49f5a12"
          : isFocused
          ? "#c49f5a12"
          : undefined,
      };
    },
  };

  useEffect(() => {
    getAllPropertyCategories().then((res) => {
      setCatOptions(
        res.map((c) => {
          return {
            value: c.cat_id,
            label: c.cat_name,
          };
        })
      );
    });
  }, []);

  return (
    <>
      <Select
        defaultValue={[catOptions[0]]}
        name="colors"
        options={catOptions}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isSearchable={false}
        placeholder="Property Type"
        onChange={(e) => setSelectedPropType(e.value)}
      />
    </>
  );
};

export default SelectDropdown;
