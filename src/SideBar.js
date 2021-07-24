import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import './SideBar.css';

function SideBar() {
    const user = useSelector(state => state.user)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
           <span className="sidebar__hash">#</span>
           <p>{topic}</p>
        </div>
    )
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.pexels.com/photos/8704785/pexels-photo-8704785.jpeg?cs=srgb&dl=pexels-daria-ponomareva-8704785.jpg&fm=jpg"alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Benjamin</h2>
                <h4>rampiondml@gmail.com</h4>
                <div className="sidebar_stats">
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__statnumber">2,543</p>
                    </div>
                    <div className="sidebar_stat">
                        <p>Views on post</p>
                        <p className="sidebar__statnumber">2,448</p>
                    </div>
                </div>
            </div>
            <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('javascript')}
                    {recentItem("product design")}
                    {recentItem("Frontend")}
                    {recentItem("Programming")}
                    {recentItem("Design")}
            </div>
        </div>
    )
}

export default SideBar
