import { extendTheme } from "@chakra-ui/react";

// ORANGE
// const colors = {
// primary: {
// 100: "#ff6d60",
// 200: "#ff5d4e",
// 300: "#ff4b3b",
// 400: "#ff3c2a",
// 500: "#ff2c19",
// 600: "#fe1500",
// 700: "#e31300",
// 800: "#c61000",
// 900: "#ae0e00",
// },
// secondary: "#373660",
// };

// GREEN
// const colors = {
// primary: {
// 100: "#E5FCF1",
// 200: "#27EF96",
// 300: "#10DE82",
// 400: "#0EBE6F",
// 500: "#0CA25F",
// 600: "#0A864F",
// 700: "#086F42",
// 800: "#075C37",
// 900: "#064C2E",
// },
// secondary: "#373660",
// };

const colors = {
    primary: {
        100: "#a3a1cb",
        200: "#9492c2",
        300: "#8785bb",
        400: "#7875b2",
        500: "#6966aa",
        600: "#5b589d",
        700: "#504d8b",
        800: "#444276",
        900: "#36355F",
    },
    secondary: "#FE6B61",
};

const customTheme = extendTheme({ colors });

export default customTheme;
