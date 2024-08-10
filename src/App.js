import React from 'react';
import Navbar from './Navbar';
import SearchCard from './SearchCard';
import TourCard from './TourCard';
import Footer from './Footer';
import './App.css';

function App() {
  const tours = [
    {
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/51/600x300/2612686-2612685_240_f_76299592_wn9capq5kb4bmwxeoizoacjiigqj5ctr.jpg',
      title: 'Yerevan with Tsaghkadzor Tour',
      nights: 'Yerevan 2N, Tsaghkadzor 2N',
      price: 609
    },
    {
      image: 'https://media.gadventures.com/media-server/cache/73/82/73828fec39786a4e760b8d4372b7fa10.jpg',
      title: 'Best of Georgia & Armenia',
      nights: 'Yerevan 3N, Haghpat 1N, Telavi 1N',
      price: 1205
    },
    {
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/72/600x300/2760094-2760093_armenia-5021630_1920.jpg',
      title: 'Best of Yerevan',
      nights: 'Yerevan 7 nights',
      price: 650
    },
    {
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/51/600x300/2754806-2754805_armenia-g5d5b65af3_1920.jpg',
      title: 'Yerevan',
      nights: 'Yerevan 4 nights',
      price: 424
    },
    {
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/70/600x300/2748260-2748259_adobestock_128270447.jpg',
      title: 'Yerevan with Tbilisi',
      nights: 'Yerevan 2 nights, Tbilisi 2 nights',
      price: 807
    },
    {
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/93/600x300/2748031-2748030_cover-designs-new2-16.jpg',
      title: 'Yerevan',
      nights: 'Yerevan 3 nights',
      price: 395
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tbilisi_sunset-6.jpg/300px-Tbilisi_sunset-6.jpg',
      title: 'Tbilisi and Yerevan',
      nights: 'Tbilisi 2 nights, Yerevan 2 nights',
      price: 773
    }
  ];

  return (
    <div className="app">
      <Navbar />
      <SearchCard />
      <h1>Best of Armenia</h1>
      <div className="tour-grid">
        {tours.map((tour, index) => (
          <TourCard 
            key={index} 
            image={tour.image} 
            title={tour.title} 
            nights={tour.nights} 
            price={tour.price} 
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
