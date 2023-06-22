import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Sunset from '../Assets/resize.svg'
import DePaolo from "../Assets/depaolo.svg"
import TriangleGif from '../Assets/triangles-fractal.gif'

const Main = () => {
  const isDesktop = useMediaQuery({query: '(min-width: 500px)'})
  const isMobile = useMediaQuery({ query: '(max-width: 499px)' })
  
 
  if(isDesktop){
    return (
      <div>
      </div>
    )
    
  }else if(isMobile){
    return(
      <div id='mobile'>
        <div id='sunsetDiv'>
          <img src={Sunset} alt='' width='200'></img>
        </div>

        <div id='gifBox'> 
          <div id='gifFlex'>

            <div id='midGifLeft'>
              <img src={TriangleGif} width='100' alt=''></img>
            </div>
            
            <div id='rightGifDiv'>

              <div id='midGifRight'>
                <img src={TriangleGif} width='100' alt=''></img>
              </div>

            </div>

          </div>

          <div id='gifFlex2'>

            <div id='midGifLeft'>
              <img src={TriangleGif} width='100' alt=''></img>
            </div>
            
            <div id='rightGifDiv'>

              <div id='midGifRight'>
                <img src={TriangleGif} width='100' alt=''></img>
              </div>

            </div>

          </div>

        </div>

        

        <div id='dePaoloDiv'>
          <img id='dePaoloImg' src={DePaolo} alt='' ></img>
        </div>
          
      </div>
    )
  }
}

export default Main