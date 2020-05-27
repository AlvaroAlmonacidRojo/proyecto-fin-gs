import Button, { ButtonProps } from "@material-ui/core/Button";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import React from "react";

const styles = (theme: Theme) =>
  createStyles({
    contained: {
      boxShadow: "none",
      "&:focus": {
        boxShadow: "none"
      },
      "&:disabled": {
        backgroundColor: `${theme.colors.disabled}`,
        color: `${theme.palette.primary.main}`
      }
    },
    outlined: {
      borderColor: theme.palette.secondary.main,
      "&:disabled": {
        borderColor: `${theme.colors.disabled}`,
        color: `${theme.colors.disabled}`
      }
    },

    text: {
      "&:disabled": {
        color: `${theme.colors.disabled}`
      }
    },

    root: {
      '&[data-weight="normal"]': {
        text: {
          fontWeight: "normal"
        }
      },
      '&[data-weight="lighter"]': {
        text: {
          fontWeight: "lighter"
        }
      },
      '&[data-weight="bold"]': {
        fontWeight: "bold"
      }
    }
  });
export const weightVariants = ["bold", "normal", "lighter"] as const;
type WeightTuple = typeof weightVariants;
export type WeightVariant = WeightTuple[number]; // union type

type Props = ButtonProps &
  WithStyles<typeof styles> & {
    className?: string;
    weight?: WeightVariant;
  };

export const ButtonComponent = ({ weight = "normal", ...props }: Props) => {
  return <Button {...props} data-weight={weight} />;
};

export default withStyles(styles)(ButtonComponent);
