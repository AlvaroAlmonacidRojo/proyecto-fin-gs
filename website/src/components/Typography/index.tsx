import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
  } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ThemeColors } from '../ThemeProvider';

const styles = (theme: Theme) =>
    createStyles({
      bold: {
        fontWeight: 'bold',
      },
      normal: {
        fontWeight: 'normal',
      },
      lighter: {
        fontWeight: 'lighter',
      },
      night: {
        color: theme.colors.night,
      },
      boulder: {
        color: theme.colors.boulder,
      },
      purple: {
        color: theme.colors.purple,
      },
      darkGreen: {
        color: theme.colors.darkGreen,
      },
      burntOrange: {
        color: theme.colors.burntOrange,
      },
      burntRed: {
        color: theme.colors.burntRed,
      },
      darkNavy: {
        color: theme.colors.darkNavy,
      },
      green100: {
        color: theme.colors.green100,
      },
      red100: {
        color: theme.colors.red100,
      },
      orange100: {
        color: theme.colors.orange100,
      },
      silver: {
        color: theme.colors.silver,
      },
      denim100: {
        color: theme.colors.denim100,
      },
      alto: {
        color: theme.colors.alto,
      },
    });

export const typeVariants = [
    'h1',
    'h2',
    'h3',
    'body1',
    'body2',
    'button',
    'caption',
  ] as const;
type TypeTuple = typeof typeVariants;
export type TypeVariant = TypeTuple[number]; // union type

export const weightVariants = ['bold', 'normal', 'lighter'] as const;
type WeightTuple = typeof weightVariants;
export type WeightVariant = WeightTuple[number]; // union type

export type CustomColorVariant = keyof Pick<
    ThemeColors,
    | 'night'
    | 'boulder'
    | 'purple'
    | 'darkGreen'
    | 'burntOrange'
    | 'burntRed'
    | 'darkNavy'
    | 'green100'
    | 'red100'
    | 'orange100'
    | 'silver'
    | 'denim100'
    | 'alto'
  >;

interface CustomTypographyProps {
    variant: TypeVariant;
    weight?: WeightVariant;
    customColor?: CustomColorVariant;
  }

type Props = CustomTypographyProps &
    WithStyles<typeof styles> & { className?: string } & TypographyProps;

export const TypographyComponent: FC<Props> = ({
    className,
    customColor,
    weight,
    classes,
    ...props
  }) => {
    return (
      <Typography
        {...props}
        className={
          classes &&
          classNames(
            {
              [classes.bold]: weight === 'bold',
              [classes.normal]: weight === 'normal',
              [classes.lighter]: weight === 'lighter',
              [classes.night]: customColor === 'night',
              [classes.boulder]: customColor === 'boulder',
              [classes.purple]: customColor === 'purple',
              [classes.darkGreen]: customColor === 'darkGreen',
              [classes.burntOrange]: customColor === 'burntOrange',
              [classes.burntRed]: customColor === 'burntRed',
              [classes.darkNavy]: customColor === 'darkNavy',
              [classes.green100]: customColor === 'green100',
              [classes.red100]: customColor === 'red100',
              [classes.orange100]: customColor === 'orange100',
              [classes.silver]: customColor === 'silver',
              [classes.denim100]: customColor === 'denim100',
              [classes.alto]: customColor === 'alto',
            },
            className,
          )
        }
      />
    );
  };

export default withStyles(styles)(TypographyComponent);
