import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Content.css';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import Masonry from 'react-masonry-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the "times" icon

function Content(props) {
  const [photograph, setPhotograph] = useState('');
  const [clientId, setClientId] = useState('UsVudbXxpeP4QnDelD3BRTWbBosiWvR2KQPTgMWjgLI'); // Replace with your API key
  const [result, setResult] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setPhotograph(event.target.value);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setClientId('UsVudbXxpeP4QnDelD3BRTWbBosiWvR2KQPTgMWjgLI'); // Replace with your API key
    const randomUrl = `https://api.unsplash.com/photos/random?count=20&client_id=${clientId}`;

    axios.get(randomUrl)
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      });
  }, [clientId]);

  useEffect(() => {
    const getRandomPhotos = () => {
      setClientId('UsVudbXxpeP4QnDelD3BRTWbBosiWvR2KQPTgMWjgLI'); // Replace with your API key
      const randomUrl = `https://api.unsplash.com/photos/random?count=20&client_id=${clientId}`;

      axios.get(randomUrl)
        .then((res) => {
          console.log(res.data);
          setResult(res.data);
        });
    };

    if (photograph.trim() !== '') {
      setClientId('UsVudbXxpeP4QnDelD3BRTWbBosiWvR2KQPTgMWjgLI'); // Replace with your API key
      const url = `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${photograph}&client_id=${clientId}`;

      axios.get(url)
        .then((res) => {
          console.log(res.data);
          setResult(res.data.results);
        });
    } else {
      // If the search bar is empty, fetch random photos
      getRandomPhotos();
    }
  }, [photograph, clientId]);

  return (
    <>
      <nav className={`fixed top-0 left-0 z-10 right-0 flex justify-between px-20 py-6 items-center ${isChecked ? 'colp' : 'bg-white'}`}>
        <h1 className={`transition ease-in-out delay-1500 duration-1000 text-xl font-bold ${isChecked ? 'text-white' : 'text-gray-700'}`}>{props.heading}</h1>
        <div className="flex items-center ml-10">
          <div className='flex items-center rounded-full bg-gray-100 ml-20'>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-5 pt=0.5 m-2 ${isChecked ? 'text-gray-400' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input className="w-1/3 ml-2 outline-none bg-transparent" type="text" name="search" id="search" placeholder="Search..." onChange={handleChange} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex justify-between items-center space-x-6">
            <li className={`transition ease-in-out delay-1500 duration-1000 font-semibold ${isChecked ? 'text-white' : 'text-gray-700'}`}>Home</li>
            <li className={`transition ease-in-out delay-1500 duration-1000 font-semibold ${isChecked ? 'text-white' : 'text-gray-700'}`}>Articles</li>
            <li>
              <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center mt-2'>
                <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} className='sr-only' />
                <span className=''>
                  <svg className={`transition ease-in-out delay-1500 duration-1000 h-6 w-6 ${isChecked ? 'text-gray-400' : 'text-gray-700'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <span className={`transition ease-in-out delay-1500 slider mx-4 flex h-6 w-[60px] items-center rounded-full p-1 duration-200 ${!isChecked ? 'bg-gray-400' : 'bg-[#efeff1]'}`}>
                  <span className={`transition ease-in-out delay-1500 duration-1000 dot h-4 w-6 rounded-full ${isChecked ? 'bg-gray-600' : 'bg-white'} duration-200 ${isChecked ? 'translate-x-[28px]' : ''}`}></span>
                </span>
                <span className=''>
                  <svg className={`transition ease-in-out delay-1500 duration-1000 h-6 w-6 ${isChecked ? 'text-white' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </span>
              </label>
            </li>
          </ul>
        </div>
      </nav>

      <div class={`min-h-screen ${isChecked ? 'colp' : 'bg-gray-100'} flex flex-col`}>
        <div className="bg-[url('./images/background.png')] p-20 bg-cover mt-20">
          <div>
            <h1 className="font-montserrat font-semibold text-2xl lg:text-3xl text-white">
              Download High Quality Images By Creators
            </h1>
            <div className='font-montserrat font-normal text-md over mt-3'>Over 2.4 million+ stock Images by our talented community</div>
          </div>
          <div className="relative w-full sm:max-w-2xl sm:mx-auto">
            <div>
              <div className="flex flex-col p-2 py-2 m-h-screen">
                <div className="bg-white items-center justify-between w-full flex rounded-lg shadow-lg p-2 mb-5 sticky">
                  <input
                    className="font-bold rounded-lg w-full py-2 pl-4 text-gray-700  leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Masonry
          breakpointCols={3} // Adjust the number of columns as needed
          className="my-masonry-grid px-20"
          columnClassName="my-masonry-grid_column"
        >
          {result.map((photo) => (
            <div key={photo.id} className={`transition ease-in-out delay-1500 duration-1000 shadow-lg rounded-xl m-5 ${isChecked ? 'bg-[#141414]' : 'bg-white'} w-full`}>
              <img className='photo w-full'
                src={photo.urls.small}
                alt={photo.alt_description}
                onClick={() => handlePhotoClick(photo)}
              />
              <div className='flex flex-col p-4 w-full'>
                <div className="flex items-center">
                  <img
                    src={photo.user.profile_image.small}
                    alt={`${photo.user.username}'s avatar`}
                    className="user-avatar ml-2 mt-2"
                  />
                  <div className="flex flex-col w-full text-left">
                    <div className={`font-montserrat font-normal ${isChecked ? 'text-gray-100' : 'text-gray-700'}`}>{photo.user.name}</div>
                    <div className="font-montserrat font-small text-gray-500">@{photo.user.username}</div>
                  </div>
                  <div className="ml-auto flex items-center">
                    <FontAwesomeIcon icon={faThumbsUp} className="text-gray-400 mr-1" />
                    <p className={`${isChecked ? 'text-gray-100' : 'text-gray-700'}`}>{photo.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      <Dialog open={Boolean(selectedPhoto)} onClose={() => setSelectedPhoto(null)}>
        <DialogContent
          style={{
            padding: '0',
            margin: '0',
            borderRadius: '4px',
            maxHeight: '80vh',
            // overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: isChecked ? '#141414' : 'white',
            transition: 'background-color 1s',
          }}
        >
          {selectedPhoto && (
            <><div style={{ width: '100%', height: '100%' }}>
              {/* Close button */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  // background: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedPhoto(null)}
              >
                <span style={{ color: 'white', fontSize: '20px' }}>✕</span>
              </div>

              <img
                src={selectedPhoto.urls.regular}
                alt={selectedPhoto.alt_description}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }} />
            </div>
            <div className='flex flex-col p-4 w-full'>
                <div className="flex items-center">
                  <img
                    src={selectedPhoto.user.profile_image.small}
                    alt={`${selectedPhoto.user.username}'s avatar`}
                    className="user-avatar ml-2 mt-2"
                  />
                  <div className="flex flex-col w-full text-left">
                    <div className={`font-montserrat font-normal ${isChecked ? 'text-gray-100' : 'text-gray-700'}`}>{selectedPhoto.user.name}</div>
                    <div className="font-montserrat font-small text-gray-500">@{selectedPhoto.user.username}</div>
                  </div>
                  <div className="ml-auto flex items-center">
                    <FontAwesomeIcon icon={faThumbsUp} className="text-gray-400 mr-1" />
                    <p className={`${isChecked ? 'text-gray-100' : 'text-gray-700'}`}>{selectedPhoto.likes}</p>
                  </div>
                </div>
              </div></>
          )}
        </DialogContent>
      </Dialog>

    </>
  );
}

export default Content;
