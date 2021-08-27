import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

function Search({searchResults}) {
    const router = useRouter();
    const {location,noOfGuests,startDate,endDate} = router.query;

    const formattedStartDate = format(new Date(startDate),"dd MMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMM yy")
    const range = `${formattedStartDate} to ${formattedEndDate}`

    return (
      <div className="h-screen">
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

        <main className="flex">
          <section className="flex-grow pt-14 px-6">
            <p className="text-xs lg:text-sm">
              300+ Stays - {range} - for {noOfGuests} guests
            </p>

            <h1 className="text-3xl font-semibold mt-2 mb-6">
              {" "}
              Stays in {location}
            </h1>

            <div className=" mb-5 text-gray-800 whitespace-nowrap space-x-3 hidden lg:inline-flex">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>
            <div className="flex flex-col">
              {searchResults?.map((res, i) => (
                <InfoCard
                  key={i}
                  img={res.img}
                  description={res.description}
                  price={res.price}
                  lat={res.lat}
                  long={res.long}
                  title={res.title}
                  star={res.star}
                  total={res.total}
                  location={res.location}
                />
              ))}
            </div>
          </section>

          <section className='min-w-[600px] hidden lg:inline-flex'>
              <Map searchResults={searchResults} />
          </section>
        </main>

        <Footer />
      </div>
    );
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then(res => res.json());

    return {
        props: {
            searchResults,
        },
    }
}
