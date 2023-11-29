import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
    palette: {
        primary: {
            main: '#333333', //black
            contrastText: '#FFFFFF' //white
        },
        secondary: {
            main: '#C22121', //red
            contrastText: "#FFFFFF" //white
        }
    },
})

export default theme