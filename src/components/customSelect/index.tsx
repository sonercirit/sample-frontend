import React from "react";
import Select, { components } from "react-select";
import { ReactComponent as DropdownIcon } from "../../assets/icons/dropdown-icon.svg";

const DropdownIndicator = (props: any) => (
  // same props are passed with no changes, assuming safe usage
  // eslint-disable-next-line react/jsx-props-no-spreading
  <components.DropdownIndicator {...props}>
    <DropdownIcon />
  </components.DropdownIndicator>
);

export default function CustomSelect({ options }: any) {
  const boxShadow = "0 0 5px 1px #ccc";
  const style = {
    control: (base: any) => ({
      ...base,
      border: 0,
      boxShadow,
      fontSize: "13pt",
      minHeight: 0,
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      padding: 0,
      paddingRight: "20px",
    }),
    menuList: (base: any) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
      boxShadow,
    }),
    menu: (base: any) => ({
      ...base,
      marginTop: 0,
    }),
    option: (base: any, { isFocused }: any) => ({
      ...base,
      color: isFocused ? "white" : "#414141",
      backgroundColor: isFocused ? "#017efe" : "white",
      boxShadow: isFocused ? boxShadow : 0,
    }),
  };

  const customTheme = (theme: any) => ({
    ...theme,
    borderRadius: 0,
  });

  return (
    <Select
      components={{ DropdownIndicator, IndicatorSeparator: () => null }}
      styles={style}
      options={options}
      // menuIsOpen
      isSearchable={false}
      theme={customTheme}
      placeholder="Sort by"
    />
  );
}
