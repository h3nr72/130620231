import React, { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [videoId, setVideoId] = useState('');

  const addMovie = (event) => {
    event.preventDefault();
    const newMovie = { title, videoId };
    setMovies([...movies, newMovie]);
    setTitle('');
    setVideoId('');
  };

  return (
    <div>
      <h1>Administrar Películas de YouTube</h1>
      <form onSubmit={addMovie}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
        <input type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)} placeholder="ID del video" required />
        <button type="submit">Agregar película</button>
      </form>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>Título:</strong> {movie.title}, <strong>ID del video:</strong> {movie.videoId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
