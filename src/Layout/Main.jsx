import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/Navbar/NavBar';
import MobileNavbar from '../Shared/Navbar/MobileNavbar';

const Main = () => {
    return (
        <div>
            <div className='block md:hidden mx-auto'>
                <MobileNavbar/>
            </div>
            <div className='hidden md:block mx-auto'>
                <NavBar/>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;