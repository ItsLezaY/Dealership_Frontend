import { createTheme } from '@mui/material'; 


export const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial'
    },
    palette: {
        primary: {
            main: '#46116e'
        },
        secondary: {
            main: '#170524',
            light: '#535156'
        },
        info : {
            main: '#fafaff'
        }
    }
})