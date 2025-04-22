import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import PhotoGrid from '../components/PhotoGrid';
import Loader from '../components/Loader';

const ACCESS_KEY = "qe3BKOFELNzdY-zPrjuL-x79APPNqFg-lQtrZ6dW9Cs";

const Home = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = (search = '') => {
    setLoading(true);
    const endpoint = search
      ? `https://api.unsplash.com/search/photos?query=${search}&client_id=${ACCESS_KEY}`
      : `https://api.unsplash.com/photos/random?count=12&client_id=${ACCESS_KEY}`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const results = search ? data.results : data;
        setPhotos(results);
      })
      .catch((error) => console.error('Failed to fetch photos', error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="home">
      <SearchBar query={query} setQuery={setQuery} handleSearch={() => fetchPhotos(query)} />
      {loading ? <Loader /> : <PhotoGrid photos={photos} />}
    </div>
  );
};

export default Home;
