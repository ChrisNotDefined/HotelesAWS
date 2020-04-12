import React from "react";
import ToolBar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Hotel from "../Images/hotel.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'

export default function NavBar() {
  var buttonStyle = {
    color: "white"
  }
  return (
    <div>
      <AppBar position="static" style={{ background: "#945f3aff" }}>
        <ToolBar>
          <Button style={buttonStyle} component={Link} to="/">
            <img src={Hotel} alt="logo" style={{ width: "50px", margin: "5px" }} />
            <Typography variant="body1">
            Hoteles Madrazo
            </Typography>
          </Button>
          <Button style={buttonStyle} component={Link} to="/favorites">
          <Typography variant="body3">
            Favoritos
            </Typography>
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  );
}
