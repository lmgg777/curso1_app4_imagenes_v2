import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 }; //inicializar número de recuadros
    this.imageRef = React.createRef(); //inicializar referencia de imagen
  }

  setSpans = () => {
    //obtener numero de recuadros necesarios
    const height = this.imageRef.current.clientHeight; //obtener altura de imagen
    const spans = Math.ceil(height / 10); //obtener numero de recuadros que ocupara imagen
    this.setState({ spans: spans }); //se actualiza estado de spans
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans); //se carga imagen y se actualiza número de recuadros
  }

  render() {
    const { urls, description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a href={urls.regular} target="_blank" rel="noopener noreferrer">
          <img src={urls.regular} alt={description} ref={this.imageRef} />
        </a>
      </div>
    );
  }
}

export default ImageCard;
