import { Icon } from "@material-ui/core";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import React from "react";
import Select, { components } from "react-select";
import { GroupType } from "react-select/src/types";

import { getTranslation, TranslationKey } from "../../util/translations";
import { WithLanguage, withLanguage } from "../WithLanguage";

const styles = (theme: Theme) =>
  createStyles({
    select: {
      width: "340px",
      backgroundColor: theme.colors.white,
      borderRadius: "4px",
      fontFamily: theme.typography.fontFamily,
      fontSize: "14px",
      fontWeight: "lighter"
    },
    selectWithError: {
      width: "340px",
      backgroundColor: theme.colors.white,
      borderRadius: "4px",
      border: `2px solid ${theme.colors.burntRed}`,
      fontFamily: '"TTNorms", "Helvetica", "Arial", sans-serif',
      fontSize: "14px",
      fontWeight: "lighter"
    },
    selectLarge: {
      width: "500px",
      backgroundColor: theme.colors.white,
      borderRadius: "4px",
      fontFamily: theme.typography.fontFamily,
      fontSize: "14px",
      fontWeight: "lighter"
    },
    selectLargeWithError: {
      width: "500px",
      backgroundColor: theme.colors.white,
      borderRadius: "4px",
      border: `2px solid ${theme.colors.burntRed}`,
      fontFamily: '"TTNorms", "Helvetica", "Arial", sans-serif',
      fontSize: "14px",
      fontWeight: "lighter"
    }
  });

interface ComponentProps {
  onChange: (newValue: any, actionMeta: any) => void;
  placeholder: TranslationKey;
  options: Array<GroupType<{ value: string; label: string }>>;
  defaultValue?: Array<{ value: string; label: string }>;
  error?: boolean;
  isMulti?: boolean;
  isLarge?: boolean;
  customWidth?: string;
}

type Props = ComponentProps & WithStyles<typeof styles> & WithLanguage;

const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Icon>
          <ArrowDropDown />
        </Icon>
      </components.DropdownIndicator>
    )
  );
};

const selectStyles = (customWidth?: string) => ({
  option: (provided: any, { isDisabled, isFocused, isSelected }: any) => ({
    ...provided,
    backgroundColor: isDisabled
      ? undefined
      : isSelected
      ? "#f8eef5"
      : isFocused
      ? "#f0f2f6"
      : undefined,
    color: isSelected ? "#a12378" : undefined
  }),
  control: (provided: any, { isDisabled, isFocused, isSelected }: any) => ({
    ...provided,
    border: isDisabled,
    boxShadow: isFocused ? 0 : 0,
    borderColor: isFocused ? "#a12378" : provided.borderColor,
    "&:hover": {
      borderColor: isFocused ? "#a12378" : provided.borderColor
    }
  }),
  container: (provided: any) => ({
    ...provided,
    width: customWidth
  }),
  dropdownIndicator: () => ({
    color: "#a12378",
    margin: "4px 4px 0 0"
  }),
  indicatorSeparator: () => ({
    display: "none"
  }),
  menuList: () => ({
    maxHeight: "100px",
    "overflow-y": "scroll"
  })
});

export const SelectComponent = ({
  classes,
  onChange,
  placeholder,
  options,
  defaultValue,
  error = false,
  lang,
  isMulti = false,
  isLarge = false,
  customWidth
}: Props) => {
  const selectClassName = () => {
    let classNameSelect;
    switch (isLarge) {
      case true:
        classNameSelect = error
          ? classes.selectLargeWithError
          : classes.selectLarge;
        break;
      case false:
        classNameSelect = error ? classes.selectWithError : classes.select;
    }
    return classNameSelect;
  };
  return (
    <Select
      className={selectClassName()}
      closeMenuOnSelect
      components={{ DropdownIndicator }}
      onChange={onChange}
      isClearable={false}
      isMulti={isMulti}
      placeholder={getTranslation(lang)(placeholder)}
      defaultValue={defaultValue}
      options={options}
      styles={selectStyles(customWidth)}
    />
  );
};

const SelectComponentTranslated = withLanguage(SelectComponent);
export default withStyles(styles)(SelectComponentTranslated);
