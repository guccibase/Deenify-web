import React, { useEffect } from 'react';
import { useSidebar } from '../../contexts/SidebarContext';
import Sidebar from '../../components/sidebar_component/SideBar';
import Feed from '../../components/feed_component/Feed';
import TrendingPosts from '../../components/trendingposts_component/TrendingPosts';
import RecentArticles from '../../components/articles/RecentArticles';
import './RecentArticles.css';
import SideSpace from '../../components/sidebar_component/SideSpace';
function ArticlesScreen() {
	return (
		<div className="home">
			{/* Sidebar */}
			<div>
				<Sidebar />
				{/* logout */}
			</div>
			{/* articles */}
			<RecentArticles />

			{/* Widgets */}
			<SideSpace />
		</div>
	);
}

export default ArticlesScreen;
