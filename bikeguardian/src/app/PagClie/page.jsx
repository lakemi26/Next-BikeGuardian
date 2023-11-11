import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function PagClie() {
  return (
    <>
      <Navbar/>
      <Banner
        imageSrc='/img/Clima-banner.png'
        altText='Banner clima'
      />
      <Banner
        imageSrc='/img/linhaBoleto.png'
        altText='Linha boleto'
      />
      <Banner
        imageSrc='/img/Boleto-banner.png'
        altText='Banner boleto'
      />
      <Banner
        imageSrc='/img/LinhaDet.png'
        altText='Banner clima'
      />
      <Banner
        imageSrc='/img/Detalhes-banner.png'
        altText='Banner clima'
      />
      <Banner
        imageSrc='/img/LinhaHist.png'
        altText='Banner clima'
      />
      <Banner
        imageSrc='/img/Historico-banner.png'
        altText='Banner clima'
      />
      <Banner
        imageSrc='/img/linhaNot.png'
        altText='Banner clima'
      />
      <Banner
        imageSrc='/img/Notificacoes-banner.png'
        altText='Banner clima'
      />
      <Footer/>
    </>
  )
}