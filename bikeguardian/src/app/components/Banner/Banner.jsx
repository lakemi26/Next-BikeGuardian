import './Banner.css';

function Banner(props) {
  return (
    <div className='container'>
      <img src={props.imageSrc} alt={props.altText} className="Banner" />
    </div>
  );
}

export default Banner;