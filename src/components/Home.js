import './Home.css';

//Home page that showcases skills, tools, and projects with no descripitons 
function Home() {
    return (
      <div className="home">
        <div className="about">
          <h2>Hello! My Name is Joel Talamayan jr </h2>
          <div className="promt">
            <p>An aspiring developer ready to tackle the tech world</p>
          </div>
        </div>
        <div className="skills">
          <h1> Skills </h1>
          <div className="list">
            <div className="item">
              <h2>Languages</h2>
              <span>
                Java, Python, C++, SQL, PHP, Javascript, CSS, HTML
              </span>
            </div>
  
            <div className="item">
              <h2>Tools</h2>
              <span>
                VScode, Jira, Confluence, MySQL, XAMPP, React, Bootstrap
              </span>
            </div>
  
            <div className="item">
              <h2>Projects</h2>
              <span>
                OS Project, Magic Survey Project, Vending Machine Project
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;