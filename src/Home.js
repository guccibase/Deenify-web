import React from 'react';
import './Home.css';
import Sidebar from './components/sidebar_component/SideBar';
import Feed from './components/feed_component/Feed';
import TrendingPosts from './components/trendingposts_component/TrendingPosts';

function Home() {
	return (
		<div className="home">
			{/* Sidebar */}
			<Sidebar />

			{/* Feed */}
			<Feed />

			{/* Widgets */}
			<TrendingPosts />
		</div>
	);
}

export default Home;
