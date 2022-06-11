import React from 'react';
import VideoSection from './VideoSection';
import SideBar from './SideBar';
import NavBar from '../Global/NavBar';


export default function NotePage (){
    return (
        <div>
            <NavBar />
            <VideoSection />
            <SideBar />
            </div>
    )
}