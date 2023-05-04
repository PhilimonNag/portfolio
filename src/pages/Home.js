import React from 'react';

function Home() {
  return (
    <div  style={{ maxWidth: '800px', margin: '20px auto', padding: '20px',background:'#265c4d',borderRadius:'10px' }}>
      <h1 style={{color:'white'}}>Welcome to my portfolio!</h1>
      <p>Hi, I'm Philimon Nag, a full-stack app developer experienced in Flutter, Java, Kotlin, Node.js and Firebase. I create user-friendly mobile apps and scalable server-side applications. My expertise in Firebase enables me to integrate various functionalities like authentication, cloud storage, push notifications and real-time databases. I'm passionate about learning and staying up-to-date with the latest industry trends.</p>
      {/* <p>Take a look at some of my recent projects below:</p>

      <div className="project-list">
        <div className="project">
          <h2>Project 1</h2>
          <p>A web application for managing tasks and to-dos</p>
          <a href="#">View project</a>
        </div>

        <div className="project">
          <h2>Project 2</h2>
          <p>A mobile app for tracking your fitness goals</p>
          <a href="#">View project</a>
        </div>

        <div className="project">
          <h2>Project 3</h2>
          <p>A website for a local restaurant</p>
          <a href="#">View project</a>
        </div>
      </div> */}
    </div>
  );
}



export default Home;
