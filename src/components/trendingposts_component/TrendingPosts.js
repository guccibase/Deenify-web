import React, { Component } from 'react';
import './TrendingPosts.css';
import { Avatar } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import Footer from '../post_component/post_view/Footer';
function TrendingPosts() {
	return (
		<div className="trending-column">
			<div className="trending">
				<div className="trending_header">
					<h3>Trending</h3>
					<div className="trending_post">
						<div className="trendingPost_header">
							<div className="trendingPost_avatar">
								<Avatar src="https://firebasestorage.googleapis.com/v0/b/umma-26555.appspot.com/o/images%2Fusers%2FuserProfile_7995a1a8-dd50-4e9a-bec2-ebe81131bfd6.jpg?alt=media&token=21af9eca-31dc-440a-8c6d-450de47ea64c" />
							</div>
							<div className="trendingPost_headerText">
								<h3>Tahir Nas</h3>
							</div>
						</div>
						<div className="trendingPost_Description">
							<p>Building deenify web. This is a trending post....</p>
						</div>
						<Footer />
					</div>
					<div className="trending_post">
						<div className="trendingPost_header">
							<div className="trendingPost_avatar">
								<Avatar src="https://firebasestorage.googleapis.com/v0/b/umma-26555.appspot.com/o/images%2Fusers%2FuserProfile_7995a1a8-dd50-4e9a-bec2-ebe81131bfd6.jpg?alt=media&token=21af9eca-31dc-440a-8c6d-450de47ea64c" />
							</div>
							<div className="trendingPost_headerText">
								<h3>Tahir Nas</h3>
							</div>
						</div>
						<div className="trendingPost_Description">
							<p>Building deenify web. This is a trending post....</p>
						</div>
						<div className="trendingPost_footer">
							<FavoriteBorderIcon fontSize="large" />
							<ChatBubbleOutlineIcon fontSize="large" />
							<ShareIcon fontSize="large" />
						</div>
					</div>
					<div className="trending_post">
						<div className="trendingPost_header">
							<div className="trendingPost_avatar">
								<Avatar src="https://firebasestorage.googleapis.com/v0/b/umma-26555.appspot.com/o/images%2Fusers%2FuserProfile_7995a1a8-dd50-4e9a-bec2-ebe81131bfd6.jpg?alt=media&token=21af9eca-31dc-440a-8c6d-450de47ea64c" />
							</div>
							<div className="trendingPost_headerText">
								<h3>Tahir Nas</h3>
							</div>
						</div>
						<div className="trendingPost_Description">
							<p>Building deenify web. This is a trending post....</p>
						</div>
						<div className="trendingPost_footer">
							<FavoriteBorderIcon fontSize="large" />
							<ChatBubbleOutlineIcon fontSize="large" />
							<ShareIcon fontSize="large" />
						</div>
					</div>
					<div className="trending_post">
						<div className="trendingPost_header">
							<div className="trendingPost_avatar">
								<Avatar src="https://firebasestorage.googleapis.com/v0/b/umma-26555.appspot.com/o/images%2Fusers%2FuserProfile_7995a1a8-dd50-4e9a-bec2-ebe81131bfd6.jpg?alt=media&token=21af9eca-31dc-440a-8c6d-450de47ea64c" />
							</div>
							<div className="trendingPost_headerText">
								<h3>Tahir Nas</h3>
							</div>
						</div>
						<div className="trendingPost_Description">
							<p>Building deenify web. This is a trending post....</p>
						</div>
						<div className="trendingPost_footer">
							<FavoriteBorderIcon fontSize="large" />
							<ChatBubbleOutlineIcon fontSize="large" />
							<ShareIcon fontSize="large" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TrendingPosts;
