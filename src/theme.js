import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export const theme = () => {
    return createMuiTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1440,
                xl: 1440
            }
        },
        palette: {
            primary: {
                main: "#1F2640",
                light: "#556789",
                dark: "#2B416C"
            },
            secondary: {
                main: "#83A515",
                dark: "#7788A3",
                light: "#9CA2B7"
            },
        },
        typography: {
            fontFamily: '"Roboto"',
            caption: {
                color: '#9CA2B7',
                fontSize: '14px',
                fontStyle: 'italic'
            },
            subtitle2: {
                color: "#7788A3",
                fontWeight: '400'
            },
            subtitle1: {
                color: "#556789"
            },
            body1: {
                color: "#556789",
                fontWeight: '500'
            }
        },
        props: {
            MuiTypography: {
                noWrap: true
            }
        }
    });
};

const MUITheme = props => {
    return (
        <MuiThemeProvider theme={theme()}>
            {props.children}
        </MuiThemeProvider>
    );
};

export default MUITheme
