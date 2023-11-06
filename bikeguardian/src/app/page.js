import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner
        imageSrc='/img/banner.png'
        altText='Banner inicial'
      />

    </>
  )
}
