import AviabiletPage from '../pages/AviabiletPage'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Straxovaniya from '../pages/Straxovaniya'
import TourPage from'../pages/TourPage'
import VisaPage from'../pages/VisaPage'
import NotFoundPage from '../pages/NotFoundPage'

export const routers = [
    {
        id: 1,
        path: '/',
        component: <Home/>
    },
    {
        id: 2,
        path: '/aviabilet',
        component: <AviabiletPage/>
    },
    {
        id: 3,
        path: '/tour',
        component: <TourPage/>
    },
    {
        id: 4,
        path: '/visa',
        component: <VisaPage/>
    },
    {
        id: 5,
        path: '/straxovaniya',
        component: <Straxovaniya/>
    },
    {
        id: 6,
        path: '/contact',
        component: <Contact/>
    },
    {
        id: 7,
        path: '*',
        component: <NotFoundPage/>
    },
]