import React from 'react';
import Navbar from './Navbar';
import MainNavbar from './MainNavbar';
import Button from '@mui/material/Button';
function Home() {
    return (


        <>
            <Navbar />
            <MainNavbar />
            
            <div className="background">
                <div className="button" style={{ backgroundColor: 'black', color: 'white', backgroundSize:'box'

                   
                   
                }}
                >
                <div class="elementor-element elementor-element-7208d11 elementor-mobile-align-left elementor-widget-mobile__width-initial elementor-widget elementor-widget-button animated zoomInDown" data-id="7208d11" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;zoomInDown&quot;}" data-widget_type="button.default">
                    <div class="elementor-widget-container">
                        <div class="elementor-button-wrapper">
                            <a class="elementor-button elementor-button-link elementor-size-sm elementor-animation-bounce-in" href="tel:(202)-428-9721">
                                <span class="elementor-button-content-wrapper">
                                    <span class="elementor-button-text">Call Now For Deals</span>
                                    
                                </span>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>

                
                
            </div>
            <main style={{ marginTop: '64px', padding: '20px' }}>
                            </main>
            
        </>
    );
}

export default Home;
