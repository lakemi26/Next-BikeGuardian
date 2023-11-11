import WebcamCapture from "../components/CapturarFotos/WebCam";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from '../components/CapturarFotos/WebCam.css';

export default function EnviarFotos() {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
      <WebcamCapture placeholderImage="../../../../img/frente-bike.png" />
      <WebcamCapture placeholderImage="../../../../img/lateral-bike1.png" />
      <WebcamCapture placeholderImage="../../../../img/tras-bike.png" />
    </div>
      <Footer/>
    </>
  )
}