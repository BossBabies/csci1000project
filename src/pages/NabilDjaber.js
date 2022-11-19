export default function Home() {
    return (
    <div id="container">
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Nabil Djaber | About Me</title>
        </head>
        <main>
        
            <h1 id="header">Welcome to Nabil's Website!!</h1>

            <div className="topnav">
                <a href="/">Home</a>
                <a className="active" href="/NabilDjaber">About Me</a>
                <a href="#contact">Contact</a>
            </div>
            <div id="paragraph">
            <p>I am a computer science student currently attending the Univeristy of Colorado Boulder. I am from Aurora, Colorado, although my parents are origianlly from Algeria,
                in North Africa, and I am a practicing Muslim.
                 
                </p>
                <img className = 'picture'
                        src = 'https://pbs.twimg.com/profile_images/1576315042135351297/KbuzRB6m_400x400.jpg'
                        alt = 'Picture of me'
                />

            </div>
            
        <p>I have taken many computer science related courses, and I've been involved in computer science since I was a kid.
                 I actually started off with website development, and tried to start a development busniess, although that failed miserably. I then got into the field of cybersecurity, 
                 and I learned the ethics of cybersecurity, as well as techniques for hardening machines throughout middle school and high school. I am currently a Daniels Fund Scholar</p>
        
        </main>

        <style jsx global>{`

          #header {
            text-align: center;
          }

          .topnav {
            background-color: #333;
            overflow: hidden;
          }
          
          .topnav a {
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
          }
          
          .topnav a:hover {
            background-color: #ddd;
            color: black;
          }
          
          .topnav a.active {
            background-color: #04AA6D;
            color: white;
          }

          #paragraph p {
            width: 60%;
          }

          #paragraph img {
            width: 20%;
            vertical-align: right;
          }


          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
        `}</style>
        </div>

    );

}