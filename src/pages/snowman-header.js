import React, {useState} from 'react';
import SnowmanNavbar from '../components/SnowmanNavbar/index';
import SnowmanSidebar from '../components/SnowmanSidebar/index';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
        <SnowmanSidebar isOpen={isOpen} toggle={toggle}/>
        <SnowmanNavbar toggle={toggle}/>
        </>
    );
};

export default Header;
