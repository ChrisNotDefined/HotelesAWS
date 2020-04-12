import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Typography, CardMedia, CardActions } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import {Favorite, FavoriteBorder} from '@material-ui/icons/';

export default class FavoriteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  async componentDidMount() {
    await this._getFavorites();
  }

  async _getFavorites() {
    // Carga de hoteles
    var example = [
      {
        id: 1,
        Name: "Princess",
        Location: "Acapulco, Gro",
        Description: "Hotel en la Zona Diamante de Acapulco",
        Rating: 5,
        Price: 5000,
        imgSource:
          "https://q-cf.bstatic.com/images/hotel/max1280x900/964/96473145.jpg",
      },
      {
        id: 2,
        Name: "Grand Hotel",
        Location: "Acapulco, Gro",
        Description: "Hotel vecino a la base de marina nacional",
        Rating: 5,
        Price: 2000,
        imgSource:
          "https://www.dcm-arquitectos.com/english/wp-content/uploads/2016/03/Grand-Hotel-Acapulco-2.jpg",
      },
    ];

    this.setState({ hotels: example });
  }

  _renderFavorites() {
    if (!this.state.hotels || this.state.hotels.length < 1) {
      return <div>No hay hoteles en favoritos</div>;
    } else {
      return this.state.hotels.map((hotel) => (
        <Card key={hotel.id} style={{ margin: "5px" }}>
          <CardContent>
            <CardMedia
              component="img"
              alt={hotel.Name}
              image={hotel.imgSource}
              title={hotel.Name}
              style={{ maxHeight: "300px" }}
            />
            <Typography variant="h3">{hotel.Name}</Typography>
            <Typography>{hotel.Location}</Typography>
            <Typography>{hotel.Rating}</Typography>
            <Typography>{hotel.Price}</Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <Favorite/>
            </IconButton>
          </CardActions>
        </Card>
      ));
    }
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <h1>Hoteles favoritos</h1>
        <div>{this._renderFavorites()}</div>
      </div>
    );
  }
}
