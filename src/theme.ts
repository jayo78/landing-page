import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary: {
        100: "#ff6d60",
        200: "#ff5d4e",
        300: "#ff4b3b",
        400: "#ff3c2a",
        500: "#ff2c19",
        600: "#fe1500",
        700: "#e31300",
        800: "#c61000",
        900: "#ae0e00",
    },
    secondary: "#373660",
};

const customTheme = extendTheme({ colors });

export default customTheme;

// import { extendTheme } from "@chakra-ui/react";

// const colors = {
// primary: {
// 100: "#ff8176",
// 200: "#ff6d60",
// 300: "#ff5e4f",
// 400: "#ff4a3a",
// 500: "#ff4636",
// 600: "#ff402f",
// 700: "#fe1500",
// 800: "#eb1300",
// 900: "#bb0f00",
// },
// };

// const customTheme = extendTheme({ colors });

// export default customTheme;
