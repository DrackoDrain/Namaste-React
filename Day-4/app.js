import { React } from "react";
import ReactDOM from "react-dom/client";

/**
 * Header 
 *  - Logo 
 *  - Nav Items 
 * Body 
 *  - Search 
 *  - RestaurantContainer 
 *    - RestaurantCard
 *      -rating 
 *      -menu
 * 
 * Footer 
 *  - Copyright 
 *  - Links 
 *  - Address 
 *  - Contact 
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" src=" https://reactjs.org/logo-og.png" alt="React Image" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US </li>
                    <li>Cart</li>
                    <li>Contact US </li>
                </ul>
            </div>

        </div>

    )
}

const RestaurantCard = () =>{
    return (
        <div className="res-card">
        <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"/>
        <div><h3>Hotel Taj </h3></div>
        <h4> South Indian, Asian </h4>
        <h4> 4.4 stars </h4>
        <h4> 30 mins </h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                </div>   
            
        </div>

    )
}


const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body/>
        
        
        
        
         </div>
       
        
    
    
    
    
    )
}



const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<AppLayout/>);