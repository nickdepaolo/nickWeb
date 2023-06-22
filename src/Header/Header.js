import React, { useState} from 'react';
import Hamburger from 'hamburger-react'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    
    const [toggle, setToggle] = useState(false)

    return(
        <div id='header'>
            <h1>Header</h1>
           <div>
                <Hamburger onToggle={toggled => {
                if (toggled){
                    setToggle(true)        
                }else{
                    setToggle(false)
                    }
                }}/>
                {toggle && isDesktopOrLaptop &&
                    <div id='toggledDesk'>
                        <h1>Menu</h1>
                    </div>}

                {toggle && isTabletOrMobile &&
                    <div id='toggledMobile'>
                        <h1>Menu</h1>
                        
                    </div>}
           </div>
                
        </div>
    )

}

export default Header