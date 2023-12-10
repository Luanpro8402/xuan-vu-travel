import { Suspense } from 'react'
import Header from './components/Header'
import { useRoutes } from 'react-router-dom';
import Footer from './components/Footer';
import Page404 from './pages/Page404';
import TaxiPage from './pages/TaxiPage';
import Contact from './pages/ContactPage';
import Home from './pages/HomePage';

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: '/lien-he',
      element: <Contact />
    },
    {
      path: '/taxi-san-bay-cam-ranh',
      element: <TaxiPage />
    },
    {
      path: '*',
      element: <Page404 />
    }
  ]);
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
      <Footer />
    </>
  )
}

export default App
