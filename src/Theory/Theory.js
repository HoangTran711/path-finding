import React from 'react'
import Image from '../assets/2.png'
import './Theory.css'

export const Theory = () => {
	return (
		<div className="theory-container">
			<div class="intro">
					<img src="https://images01.nicepage.io/bc/ed/bced7c4e6c4c7e95d0cf8b98057ecf7e.jpeg" alt="background"/>
					<div class="intro-box">
							<div class="title">Dijkstra's algorithm</div>
							<div class="content-intro">Easy finds the shortest path between a given node (which is called the "source node") and all other nodes in a graph.</div>
							 <a href="#main-content"><button class="btn">Learn more</button></a>
					</div>
			</div>
				<div class="list-content" id="main-content">
					<div class="purpose">
							<div class="title">Purpose and Use Cases</div>
							<div class="content-purpose">
									<div class="purpose-img">
											<img src="https://www.usna.edu/Users/cs/roche/courses/s12si335/u06/ex2color.png" alt="Dijkstra"/>
									</div>
									<div class="paragraph">With Dijkstra's Algorithm, you can find the shortest path between nodes in a graph. Particularly, you can<b> find the shortest path from a node 
											(called the "source node") to all other nodes in the graph</b>, producing a shortest-path tree.</div>
									<div class="paragraph">This algorithm is used in GPS devices to find the shortest path between the current location and the destination.
											It has broad applications in industry, specially in domains that require modeling networks.</div>
							</div>
					</div>
					<div class="history">
									<h1 class="title">History of Algorithm </h1>
									<div class="content-detail">
										<div class="history-img">
												<img src="https://www.freecodecamp.org/news/content/images/2020/09/image-112.png" alt=""/>
										</div>
										<div class="history-content">
												<div class="paragraph">This algorithm was created and published by<b> Dr. Edsger W. Dijkstra</b> , 
														a brilliant Dutch computer scientist and software engineer.</div>
												<div class="paragraph">In 1959, he published a 3-page article titled 
														"A note on two problems in connexion with graphs" where he explained his new algorithm.</div>
										</div>
								</div>
					</div>
							<div class="purpose basic">
									<div class="title">Basics of Dijkstra's Algorithm </div>
									<div>
											<div class="paragraph"><b>Step 1:</b> Dijkstra's Algorithm basically starts at the node that you choose (the source node) 
													and it analyzes the graph to find the shortest path between that node and all the other nodes in the graph.
											</div>
											<div class="paragraph"><b>Step 2:</b> The algorithm keeps track of the currently known shortest distance from each node 
													to the source node and it updates these values if it finds a shorter path.
											</div>
											<div class="paragraph"><b>Step 3:</b> Once the algorithm has found the shortest path between the source node
													and another node, that node is marked as "visited" and added to the path.
											</div>
											<div class="paragraph"><b>Step 4:</b> The process continues until all the nodes in the graph have been added to the path. 
													This way, we have a path that connects the source node to all other nodes following the shortest path possible to reach each node.
											</div>
									</div>
							</div>
							<div class="history">
									<div class="title">Requirements</div>
									<div>
											<div class="content-detail">
													<div class="history-content">
															<div class="paragraph"><b>Dijkstra's Algorithm</b> can only work with graphs that have <b>positive weights</b>. 
																	This is because, during the process, the weights of the edges have to be added to find the shortest path.
															</div>
															<div class="paragraph">If there is a <b> negative weight </b> in the graph, then the algorithm <b>will not work properly</b>. Once a node has been marked as "visited",
																	the current path to that node is marked as the shortest path to reach that node. And negative weights can alter this if the total weight can be decremented after this step has occurred.
															</div>
													</div>
													<img src={Image} alt=""/>
											</div> 
									</div>
					</div>
			</div>
		</div>
	)
}