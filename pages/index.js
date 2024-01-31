import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Banner from '@/components/banner/banner'
import Booking from '@/components/bookingForm/booking'
import Doctor from '@/components/doctor/doctor'
import Services from '@/components/services/services'
import Offer from '@/components/offer/offer'
import Products from '@/components/products/products'
import Surgery from '@/components/surgery/surgery'
import Weather from '@/components/weather/weather'



export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Booking/>
    <Weather/>
    <Doctor/>
    <Services/>
    <Offer/>
    <Products/>
    <Surgery/>
    <Footer/>

    </>
  )
}
