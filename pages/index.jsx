import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
const Home = ({ cardsData, exploreData }) => {
  return (
    <div className="">
      <Head>
        <title>AirBnb-Find Your Next Destination</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <Banner />
      <main className="mx-auto max-w-6xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="font-default pb-5 text-3xl font-medium">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-default py-8 pb-5 text-3xl font-medium">
            Live Anywhere
          </h2>
          <div className="carousel slide relative   flex space-x-4 overflow-scroll scrollbar-hide p-5">
            {cardsData.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

          <LargeCard  img='https://links.papareact.com/4cj' title='The Greatest Outdoors' buttonText='Get Inspired' desc='Wishlists created by Airbnb'/>
      </main>
      <Footer/>
    </div>
  )
}
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )
  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      cardsData,
      exploreData,
    },
  }
}

export default Home
