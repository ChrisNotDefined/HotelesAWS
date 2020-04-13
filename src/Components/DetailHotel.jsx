import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import { Paper } from "@material-ui/core";
import HotelsService from "../Services/HotelsService";

class DetailHotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hotel: null };
    //var _hotel = this._getHotel(this.props.match.params.id);
    //this.state = {
    //  hotel: _hotel,
    //};
  }

  /*async _getHotel(id) {
    
    // const { id } = this.props.match.params;
    const { data: hotel } = await HotelsService.getHotelById(id);
  }*/

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data: hotel } = await HotelsService.getHotelById(id);
    this.setState({ hotel });
  }

  _getImages() {
    var _tileData = [
      {
        img:
          "https://d1poh340f4imgl.cloudfront.net/upload/images/534x326/2019/06/03/27117d04e7913d753912449d270f8919_534x326.jpg",
        cols: 2,
        title: "Playa",
      },
      {
        img:
          "https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/b5/dc/restaurante-los-galenos.jpg",
        cols: 1,
        title: "Restaurante",
      },
      {
        img:
          "https://bloghoteles.com.mx/wp-content/uploads/2018/09/Capturars.png",
        cols: 1,
        title: "Alberca",
      },
      {
        img:
          "https://cdn.bestday.net/_lib/vimages/Riviera-Nayarit/Hotels/Vista_Vallarta/fachada_xl.jpg",
        cols: 2,
        title: "Alberca",
      },
    ];
    return _tileData;
  }

  render() {
    if(this.state.hotel)
    return (
      <Grid container style={{ margin: "5px", display: "flex" }}>
        <Grid item xs={12} md={6}>
          <GridList
            cellHeight={160}
            cols={3}
            style={{
              width: "500px",
              height: "450",
              justifyContent: "space-around",
              overflow: "hidden",
            }}
          >
            <GridListTile cols={3}>
              <img
                src={this.state.hotel.imgSource}
                alt={this.state.hotel.name}
              />
            </GridListTile>
            {this._getImages().map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
          <Paper elevation={3}>
            <Grid container>
              <Grid item xs={6}>
                <p style={{ textAlign: "right" }}>
                  ${this.state.hotel.price} MXN
                </p>
              </Grid>
              <Grid item xs={6}>
                <Button
                  style={{
                    background: "#348795",
                    margin: "10px 0",
                    color: "white",
                  }}
                >
                  Agregar a Favoritos
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1>{this.state.hotel.name}</h1>
          <p>{this.state.hotel.descripcion}</p>
          <p>{this.state.hotel.rating}</p>
        </Grid>
      </Grid>
    );
    else{
      return(
        <h1>Cargando</h1>
      );
    }
  }
}

export default withRouter(DetailHotel);
