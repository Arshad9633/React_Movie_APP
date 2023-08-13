import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import MoviePage from './pages/Movie';
import CountryPage from './pages/Country';
import CountryUsaPage from './pages/CountryUsaPage';
import CountryEuropePage from './pages/CountryEuropePage';
import CountryAsiaPage from './pages/CountryAsiaPage';
import ContactPage from './pages/Contact';
import BlogPage from './pages/Blog';
import RootLayout from './pages/Root';
import GenreRoot from './pages/GenreRoot';
import CountryRoot from './pages/CountryRoot';
import ErrorPage from './pages/Error';
import MovieDetailPage from './pages/MovieDetail';
import GenreActionPage from './pages/GenreAction';
import GenreComedyPage from './pages/GenreComedy';
import GenreDramaPage from './pages/GenreDramaPage';

const  router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { 
        path: 'movie', 
        element: <GenreRoot />,
        children: [
          { index: true, element: <MoviePage /> },
          { path: '/movie/:movieId', element: <MovieDetailPage />},
          { path: '/movie/actionId', element: <GenreActionPage /> },
          { path: '/movie/comedyId', element: <GenreComedyPage /> },
          { path: '/movie/dramaId', element: <GenreDramaPage /> },
        ]
      },
      {
        path: 'country',
        element: <CountryRoot />,
        children: [
          { index: true, element: <CountryPage />},
          { path: '/country/usaId', element: <CountryUsaPage />},
          { path: '/country/europeId', element: <CountryEuropePage />},
          { path: '/country/asiaId', element: <CountryAsiaPage />},
        ]
      },
      { path: '/contact', element: <ContactPage /> },
      { path: '/blog', element: <BlogPage />},
    ],
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
