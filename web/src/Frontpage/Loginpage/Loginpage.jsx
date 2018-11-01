import React, { Component } from "react";
import "../Homepage/style/home.css";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import Tooltip from "@material-ui/core/Tooltip";
import ChatBubble from '@material-ui/icons/Chat';
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  fab: {
    margin: theme.spacing.unit * 2
  },
  absolute: {
    position: "fixed",
    bottom: theme.spacing.unit * 5,
    right: theme.spacing.unit * 5,
    color: "#00c43e",
    backgroundColor: "#00c43e"
    
  },
  margin: {
    margin: theme.spacing.unit,
    maxWidth: "350px",
    width: "100%",
    fontWeight: 400,
    color: "white",
    backgroundColor: "#00c43e",
    textDecoration: "none"
  },
  marginForm: {
    maxWidth: "350px",
    width: "100%",
    fontWeight: 400,
    color: "white",
    textDecoration: "none"
  },
  cssRoot: {
    color: "black",
    backgroundColor: "white",
    maxWidth: "350px",
    width: "100%",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "white"
        }
  },
   cssLabel: {
     color : "#999",
    '&$cssFocused': {
      color: "white",
    },
  },
  cssFocused: {},
  cssUnderline: {
    width : "100%",
    maxWidth : "345px",
    borderColor : "#fff",
    color : "#fff",
    borderBottomColor : "white",
    '&:before': {
      borderBottomColor: "white",
    },
    '&:after': {
      borderBottomColor: "white",
    },
  },
  iconchat: {
    color: "#fff",
    "&:hover": {
      color : "#00c43e"
    }
  },
  bootstrapRoot: {
    boxShadow: "none",
    textTransform: "none",
    maxWidth: "380px",
    width: "100%",
    fontSize: 16,
    fontWeight: 400,
    padding: "6px 12px",
    border: "1px solid",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    color: "white",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      color: "white"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  },
  snackbar: {
    position: "absolute"
  },
  snackbarContent: {
    width: 360
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green
  },
  typography: {
    useNextVariants: true
  }
});

class Loginpage extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  login = () => {
    this.props.loginFunction();
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleKeyPress = (e) => {
    if(e.key === "Enter"){
      this.props.loginFunction();
    } else {
      console.log("ohh")
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="home">
        <div className="container">
          <img
            src="https://www.moretrash.id/wp-content/uploads/2018/05/logo-moretrash.png"
            srcset="https://www.moretrash.id/wp-content/uploads/2018/05/logo-moretrash.png 1x"
            width="171"
            height="50"
            alt="Moretrash Logo"
            retina_logo_url=""
            class="fusion-standard-logo"
            style={{ marginTop: "100px" }}
          />
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "white", fontWeight: 400 }}>
              Drop Your Trash and get benefit!
            </p>
            <div style={{textAlign : "center"}}>
            <Grid container spacing={24}>
            <Grid item xs={12} s={12}>
            <FormControl className={classes.marginForm}>
        <InputLabel
          htmlFor="custom-css-input"
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
          Email
        </InputLabel>
        <Input
          id="custom-css-input"
          classes={{
            underline: classes.cssUnderline,
          }}
          onKeyPress={this.handleKeyPress}
                  
        />
      </FormControl>
              </Grid>
               <Grid item xs={12} s={12}>
      <FormControl className={classes.marginForm}>
        <InputLabel
          htmlFor="custom-css-input"
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
          
        >
          Password
        </InputLabel>
        <Input
          id="custom-css-input"
          classes={{
            underline: classes.cssUnderline,
          }}
          onKeyPress={this.handleKeyPress}         
        
        />
      </FormControl>
              </Grid>
            </Grid>
           

<Grid container spacing={24}>
            <Grid item xs={12} s={12}>
       <Link to="/forgot_password" style={{textDecoration : "none"}}><p style={{ color: "#fff", marginTop : "25px", marginBottom : "25px"}}>
             Lupa Password ?
            </p>
            </Link>
            </Grid>
            </Grid>
         </div>
          </div>

          <Grid container spacing={24}>
            <Grid item xs={12} s={12}>
              <MuiThemeProvider theme={theme}>
                  <Button
                    variant="extendedFab"
                    color="primary"
                    className={classes.margin}
                    size="large"
                    onClick={()=>{this.login()}}
                  >
                    Masuk
                  </Button>
              </MuiThemeProvider>
            </Grid>
          </Grid>

<div style={{textAlign : "center"}}>
            <p style={{ color: "#999" }}>
             Belum Punya Akun? <a href="/signup" style={{ color: "white" }}>
              Sign Up
            </a>
            </p>

            

            
           
</div>
          <Tooltip>
            <Button variant="fab" color="#00c43e" className={classes.absolute}>
              <ChatBubble className={classes.iconchat} />
            </Button>
          </Tooltip>
        </div>
      </div>
    );
  }
}

Loginpage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loginpage);