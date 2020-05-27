import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { CSSProperties, FC } from 'react';

export interface ThemeColors {
  disabled: CSSProperties['color'];

  purple: CSSProperties['color'];
  darkPurple: CSSProperties['color'];
  lightPurple: CSSProperties['color'];
  lighterPurple: CSSProperties['color'];
  lightestPurple: CSSProperties['color'];

  white: CSSProperties['color'];

  denim100: CSSProperties['color'];
  denim80: CSSProperties['color'];
  denim60: CSSProperties['color'];
  denim40: CSSProperties['color'];
  denim20: CSSProperties['color'];
  denim10: CSSProperties['color'];

  orange100: CSSProperties['color'];
  orange80: CSSProperties['color'];
  orange60: CSSProperties['color'];
  orange40: CSSProperties['color'];
  orange20: CSSProperties['color'];
  orange10: CSSProperties['color'];

  green100: CSSProperties['color'];
  green80: CSSProperties['color'];
  green60: CSSProperties['color'];
  green40: CSSProperties['color'];
  green20: CSSProperties['color'];
  green10: CSSProperties['color'];

  yellow100: CSSProperties['color'];
  yellow80: CSSProperties['color'];
  yellow60: CSSProperties['color'];
  yellow40: CSSProperties['color'];
  yellow20: CSSProperties['color'];

  red100: CSSProperties['color'];
  red80: CSSProperties['color'];
  red60: CSSProperties['color'];
  red40: CSSProperties['color'];
  red20: CSSProperties['color'];
  red10: CSSProperties['color'];

  whiteTwo: CSSProperties['color'];
  smoke: CSSProperties['color'];
  alto: CSSProperties['color'];
  silver: CSSProperties['color'];
  grey: CSSProperties['color'];
  boulder: CSSProperties['color'];
  mortar: CSSProperties['color'];
  night: CSSProperties['color'];
  blueSmoke: CSSProperties['color'];
  blueSilver: CSSProperties['color'];
  blueGrey: CSSProperties['color'];
  blueMortar: CSSProperties['color'];
  darkNavy: CSSProperties['color'];
  burntRed: CSSProperties['color'];
  darkGreen: CSSProperties['color'];
  burntOrange: CSSProperties['color'];
  readonly [key: string]: CSSProperties['color'];
}
declare module '@material-ui/core/styles/createMuiTheme' {
  // specificy custom gloabal theme variables here
  interface Theme {
    appDrawer: {
      width: CSSProperties['width'];
    };
    colors: ThemeColors;
    sizes: {
      cardWidth: {
        default: CSSProperties['width'];
        small: CSSProperties['width'];
        medium: CSSProperties['width'];
        reduced: CSSProperties['width'];
      };
      fullWidth: CSSProperties['width'];
      margin: CSSProperties['margin'];
      padding: CSSProperties['padding'];
      noPadding: CSSProperties['padding'];
      borderRadius: CSSProperties['borderRadius'];
      textBox: {
        minHeight: CSSProperties['height'];
        position: CSSProperties['marginRight'];
        display: CSSProperties['display'];
      };
      comment: {
        maxHeight: CSSProperties['height'];
        titleHeight: CSSProperties['height'];
      };
      icon: {
        small: {
          height: CSSProperties['height'];
          width: CSSProperties['width'];
        };
        medium: {
          height: CSSProperties['height'];
          width: CSSProperties['width'];
        };
        big: {
          height: CSSProperties['height'];
          width: CSSProperties['width'];
        };
      };
    };
    formLabelError: {
      color: CSSProperties['color'];
      display: CSSProperties['display'];
      fontSize: CSSProperties['fontSize'];
      marginBottom: CSSProperties['marginBottom'];
      marginTop: CSSProperties['marginTop'];
      fontWeight: CSSProperties['fontWeight'];
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    appDrawer?: {
      width?: CSSProperties['width'];
    };
    colors?: ThemeColors;
    sizes?: {
      cardWidth?: {
        default?: CSSProperties['width'];
        small?: CSSProperties['width'];
        medium?: CSSProperties['width'];
        reduced?: CSSProperties['width'];
      };
      fullWidth?: CSSProperties['width'];
      margin?: CSSProperties['margin'];
      padding?: CSSProperties['padding'];
      noPadding?: CSSProperties['padding'];
      borderRadius?: CSSProperties['borderRadius'];
      textBox: {
        minHeight: CSSProperties['height'];
        position: CSSProperties['marginRight'];
        display: CSSProperties['display'];
      };
      comment?: {
        maxHeight?: CSSProperties['height'];
        titleHeight?: CSSProperties['height'];
      };
      icon?: {
        small?: {
          height?: CSSProperties['height'];
          width?: CSSProperties['width'];
        };
        medium?: {
          height?: CSSProperties['height'];
          width?: CSSProperties['width'];
        };
        big?: {
          height?: CSSProperties['height'];
          width?: CSSProperties['width'];
        };
      };
    };
    formLabelError?: {
      color?: CSSProperties['color'];
      display?: CSSProperties['display'];
      fontSize?: CSSProperties['fontSize'];
      marginBottom?: CSSProperties['marginBottom'];
      marginTop?: CSSProperties['marginTop'];
      fontWeight?: CSSProperties['fontWeight'];
    };
  }
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"TTNorms", "Helvetica", "Arial", sans-serif',
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#0174DF',
    },
    action: {
      selected: '#eef4f8',
      hover: '#eef4f8',
    },
    text: {
      primary: '#333',
    },
    error: {
      main: '#e40000',
    },
  },
  colors: {
    disabled: '#d091bb',
    purple: '#a12378',
    darkPurple: '#701854',
    lightPurple: '#b34f93',
    lighterPurple: '#d091bb',
    lightestPurple: '#f8eef5',
    white: '#ffffff',
    denim100: '#0d7cbb',
    red100: '#e40000',
    green100: '#00a800',
    orange100: '#ff9029',
    yellow100: '#ffdd29',
    denim80: 'rgba(13, 124, 187, 0.8)',
    red80: 'rgba(228, 0, 0, 0.8)',
    green80: 'rgba(0, 168, 0, 0.8)',
    yellow80: 'rgba(255, 221, 41, 0.8)',
    orange80: 'rgba(255, 144, 41, 0.8)',
    denim60: 'rgba(13, 124, 187, 0.6)',
    red60: 'rgba(228, 0, 0, 0.6)',
    green60: 'rgba(0, 168, 0, 0.6)',
    yellow60: 'rgba(255, 221, 41, 0.6)',
    orange60: 'rgba(255, 144, 41, 0.6)',
    denim40: 'rgba(13, 124, 187, 0.4)',
    red40: 'rgba(228, 0, 0, 0.4)',
    green40: 'rgba(0, 168, 0, 0.4)',
    yellow40: 'rgba(255, 221, 41, 0.4)',
    orange40: 'rgba(255, 144, 41, 0.4)',
    denim20: 'rgba(13, 124, 187, 0.2)',
    red20: 'rgba(228, 0, 0, 0.2)',
    green20: 'rgba(0, 168, 0, 0.2)',
    yellow20: 'rgba(255, 221, 41, 0.2)',
    orange20: 'rgba(255, 144, 41, 0.2)',
    whiteTwo: '#fafafa',
    smoke: '#f5f5f5',
    alto: '#d3d3d3',
    silver: '#b9b9b9',
    grey: '#949494',
    boulder: '#757575',
    mortar: '#5a5a5a',
    night: '#333333',
    blueSmoke: '#f5f6fa',
    blueSilver: '#e5e6ec',
    blueGrey: '#d4d6e3',
    blueMortar: '#a8abbf',
    darkNavy: '#0f4880',
    burntRed: '#cf000f',
    darkGreen: '#1d781d',
    burntOrange: '#b95000',
    green10: '#e0f1e0',
    orange10: ' #fff4ec',
    red10: '#f7e0e0',
    denim10: '#e1ecf3',
  },
  appDrawer: {
    width: 250,
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '48px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '52px',
        letterSpacing: 'normal',
      },
      h2: {
        fontSize: '36px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '40px',
        letterSpacing: '-0.25px',
      },
      h3: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '24px',
        letterSpacing: '-0.25px',
      },
      body1: {
        fontSize: '16px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '20px',
        letterSpacing: '-0.25px',
      },
      body2: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '16px',
        letterSpacing: '-0.22px',
      },
      button: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '16px',
        letterSpacing: '0.65px',
      },
      caption: {
        fontSize: '12px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '16px',
        letterSpacing: '-0.4px',
      },
    },
    MuiOutlinedInput: {
      root: {
        fontWeight: 'lighter',
        fontSize: '16px',
        color: '#757575',
        '& $notchedOutline': {
          borderColor: '#d9d9d9',
        },
        '&$focused $notchedOutline': {
          borderColor: '#949494',
          borderWidth: 1,
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#b9b9b9',
        },
      },
      notchedOutline: {
        borderColor: '#d9d9d9',
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#f5f6fa', // blue smoke
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: '#333',
        marginBottom: '4px',
        '&$focused': {
          color: '#333',
        },
      },
    },
    MuiTableCell: {
      root: {
        padding: '12px 8px 12px 24px',
      },
    },
  },
  sizes: {
    cardWidth: {
      default: '1052px',
      small: '188px',
      medium: '350px',
      reduced: '826px',
    },
    fullWidth: '100%',
    margin: '20px',
    padding: '24px 40px',
    noPadding: '0',
    borderRadius: '4px',
    textBox: {
      minHeight: '100px',
      position: '10px',
      display: 'block',
    },
    comment: {
      maxHeight: '400px',
      titleHeight: '34px',
    },
    icon: {
      small: {
        height: '16px',
        width: '16px',
      },
      medium: {
        height: '24px',
        width: '24px',
      },
      big: {
        height: '32px',
        width: '32px',
      },
    },
  },
  formLabelError: {
    color: '#cf000f',
    display: 'block',
    fontSize: '14px',
    marginBottom: '12px',
    marginTop: '-5px',
    fontWeight: 'lighter',
  },
});

export const ThemeProvider: FC<{}> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
