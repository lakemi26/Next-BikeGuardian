import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner
        imageSrc='/img/banner.png'
        altText='Banner inicial'
      />
      <Banner
        imageSrc='/img/coberturas.png'
        altText='Coberturas'
      />
      <Banner
        imageSrc='/img/banner-coberturas.png'
        altText='Banner sobre coberturas'
      />
      <Banner
        imageSrc='/img/BikesAceitas.png'
        altText='Bikes aceitas'
      />
      <Banner
        imageSrc='/img/tipoBike.png'
        altText='Banner inicial'
      />
      <Banner
        imageSrc='/img/PlanosServico.png'
        altText='Planos de serviço'
      />
      <Banner
        imageSrc='/img/BannerPlanos.png'
        altText='Banner inicial'
      />
      <Banner
        imageSrc='/img/Informacoes.png'
        altText='Informações'
      />
      <Banner
        imageSrc='/img/InformacoesTexto.png'
        altText='Banner informações'
      />
      <Footer/>

    </>
  )
}
