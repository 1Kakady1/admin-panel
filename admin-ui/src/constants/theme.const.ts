import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: { 500: '#467fcf' },
  },
  overrides: {  
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1301,
    snackbar: 1400,
    tooltip: 1500,
  },

})

export  {theme}