import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import HotelsService from '../Services/HotelsService';
//import Hotel from "../Images/hotel.png";
//import Torres from "../Images/torres.png";

class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoteles: [],
    };
  }

  async componentDidMount() {
    await this._gethoteles();
  }

  async _gethoteles() {
    
    const response = await HotelsService.getHotels();
    this.setState({ hoteles: response.data });
    
    // API
  }

  _renderHotels() {
    if (!this.state.hoteles || this.state.hoteles.length < 1) {
      return <h1 style={{margin: "10px"}}>Cargando...</h1>;
    } else {
      return this.state.hoteles.map((hotel) => (
        <Grid item md={6} lg={4}>
          <Card style={{ margin: "10px", width: "400px", height: "350px" }}>
            <CardActionArea onClick={() => this._navigateToHotel(hotel.id)}>
              <CardMedia
                component="img"
                alt={hotel.name}
                height="175"
                image={hotel.imgSource}
                title={hotel.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {hotel.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {hotel.descripcion}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                component={Link}
                to="/favorites"
              >
                Add to favorites
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ));
    }
  }

  _navigateToHotel(id) {
    this.props.history.push(`/detail/${id}`);
  }

  _navigateToFavorite(id) {
    this.props.history.push(`/favorites/${id}`);
  }

  render() {
    return (
      <div style={{width: "100%"}}>
        <Grid style={{alignItems: "center", width: "100%"}} container >{this._renderHotels()}</Grid>
      </div>
    );
  }
}

export default withRouter(BodyComponent);
