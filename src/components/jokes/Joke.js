import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Joke = () => {
  const initialJoke = {
    joke: 'lol'
  };

  const [joke, setJoke] = useState(initialJoke);

  // everytime the component mounts, useEffect is called
  useEffect(() => {
    fetchNewJoke();
  }, []);

  const fetchNewJoke = () => {
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      })
      .then(res => {
        console.log(res.data);
        const joke = res.data;
        setJoke(joke);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <p className='title is-4'>{joke.joke}</p>
          </div>
        </div>

        <div className='content'>
          <button className='button is-primary' onClick={fetchNewJoke}>
            Get another YOYKE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joke;
