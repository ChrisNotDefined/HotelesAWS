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
//import Hotel from "../Images/hotel.png";
//import Torres from "../Images/torres.png";

export default class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoteles: [],
    };
  }

  async componentDidMount() {
    await this._gethoteles();
  }

  _gethoteles() {
    // API
    var example = [
      {
        Id: 1,
        Name: "Torres Gemelas Acapulco",
        Descripcion: "Las torres de acapulco",
        Location: "Acapulco, Gro",
        Price: 300,
        Rating: 3,
        imgSource:
          "https://thumbnails.trvl-media.com/3FYFaGTHMLzb8pZEfG4yjvqUpSA=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/2000000/1140000/1139600/1139576/37e1f5a1_z.jpg",
      },
      {
        Id: 2,
        Name: "Princess",
        Location: "Acapulco, Gro",
        Descripcion: "Hotel en la Zona Diamante de Acapulco",
        Rating: 5,
        Price: 5000,
        imgSource:
          "https://q-cf.bstatic.com/images/hotel/max1280x900/964/96473145.jpg",
      },
      {
        Id: 3,
        Name: "Grand Hotel",
        Location: "Acapulco, Gro",
        Descripcion: "Hotel vecino a la base de marina nacional",
        Rating: 5,
        Price: 2000,
        imgSource:
          "https://www.dcm-arquitectos.com/english/wp-content/uploads/2016/03/Grand-Hotel-Acapulco-2.jpg",
      },
    ];

    this.setState({ hoteles: example });
  }

  _renderHotels() {
    if (!this.state.hoteles || this.state.hoteles.length < 1) {
      return <div>No se encntraron hoteles</div>;
    } else {
      return this.state.hoteles.map((hotel) => (
        <Grid item md={6} lg={4}>
          <Card style={{ margin: "10px", width: "400px", height: "350px" }}>
            <CardActionArea component={Link}
                to="/detail">
              <CardMedia
                component="img"
                alt={hotel.Name}
                height="175"
                image={hotel.imgSource}
                title={hotel.Name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {hotel.Name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {hotel.Descripcion}
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

  render() {
    return (
      <div style={{width: "100%"}}>
        <Grid style={{alignItems: "center", width: "100%"}} container >{this._renderHotels()}</Grid>
      </div>
    );
  }
}
