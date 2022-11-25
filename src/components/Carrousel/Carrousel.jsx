import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import slide3 from '../../img/slide3.jpg';
import slide4 from '../../img/slide4.jpg';
import slide5 from '../../img/slide5.jpg';
import slide6 from '../../img/slide6.jpg';

const Carrousel = () => {
    return (
<div className="row slider">
  <div className="col">
    <div className="carousel slide" id="slider" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#slider" data-slide-to={0} />
        <li data-target="#slider" data-slide-to={1} />
        <li data-target="#slider" data-slide-to={2} />
        <li data-target="#slider" data-slide-to={3} />
        <li data-target="#slider" data-slide-to={4} />
        <li data-target="#slider" data-slide-to={5} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} alt="Slide #1" className="d-block img-fluid" />
        </div>
        <div className="carousel-item">
          <img src={slide2} alt="Slide #2" className="d-block img-fluid" />
        </div>
        <div className="carousel-item">
          <img src={slide3} alt="Slide #3" className="d-block img-fluid" />
        </div>
        <div className="carousel-item">
          <img src={slide4} alt="Slide #4" className="d-block img-fluid" />
        </div>
        <div className="carousel-item">
          <img src={slide5} alt="Slide #5" className="d-block img-fluid" />
        </div>
        <div className="carousel-item">
          <img src={slide6} alt="Slide #5" className="d-block img-fluid" />
        </div>
      </div>
      <a href="#slider" className="carousel-control-prev" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Anterior</span>
      </a>
      <a href="#slider" className="carousel-control-next" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Siguiente</span>
      </a>
    </div>
  </div>
</div>

    );
}

export default Carrousel;
