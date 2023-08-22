import './App.css';
import profilePic from './profile-pic.jpg';

function App() {
  return (
    <>
      <ul className='nav-bar'>
        <li><a href='#about-me'>About Me</a></li>
        <li>/</li>
        <li><a href='#work-experience'>Work Experience</a></li>
        <li>/</li>
        <li><a href='#projects'>Projects</a></li>
        <li>/</li>
        <li><a href='#coursework'>Coursework</a></li>
        <li>/</li>
        <li><a href='#connect'>Connect</a></li>
        <li>/</li>
        <li><a target='_blank' rel='noreferrer' href='Junho Lee Resume.pdf'>Resume<span className='material-symbols-outlined'>open_in_new</span></a></li>
      </ul>
      <div className='section-container'>
        <section>
          <br /><br /><br /><br />
          <div style={{fontSize: '42px', fontWeight: 'bold'}}>Hi, my name is Junho.</div>
          <div style={{fontSize: '30px', fontStyle:'italic'}}>I'm an aspiring software engineer</div>
          <br />
        </section>
        <section id='about-me'>
          <h1>ABOUT ME</h1>
          <div className='flex-container'>
            
            <div style={{fontSize: '24px', flexGrow: '9999', flexBasis: '450px', margin: '0 20px 30px 0'}}>
              I'm Junho Lee, an undergraduate student from Fairfax, Virginia, studying at the <b>University of Virginia</b> for a computer science major and statistics minor.
              <br /><br />
              I've had opportunities to learn from cool projects, courses, research, and open-source contributions, gaining experience in software engineering, web, and data science.
            </div>
            <div style={{margin: '0 auto'}}><img src={profilePic} alt='Profile' style={{width: '300px', borderRadius: '10px'}} /></div>
          </div>
          
        </section>
        <section id='work-experience'>
          <h1>WORK EXPERIENCE</h1>
          <div className='block'>
            <div className='block-heading'>Cornell Software Engineering Research Group | Remote</div>
            <div>Research Assistant, May 2023 – Aug. 2023</div>
            <ul>
              <li>Collaboratively building Python variation of JavaMOP, a Java software testing framework</li>
              <li>Designed/documented software architecture and a syntax for writing software tests</li>
              <li>Implemented Python wrappers for Java packages, and tracing Python function calls for analysis</li>
              <li>Configured project so build/install, documentation generation, and testing are each one command</li>
              <li>Delegated tasks to and helped onboard a PhD student to project</li>
            </ul>
          </div>
          <div className='block'>
            <div className='block-heading'>University of Virginia | Charlottesville, VA</div>
            <div>Teaching Assistant (Discrete Math and Theory 1), Jan. 2023 – Present (term time)</div>
            <ul>
              <li>Holding weekly office hours to guide students through technical problems</li>
              <li>Participating in weekly staff meetings to grade quiz questions and discuss logistics</li>
              <li>Assisting instructor during lectures and answering students’ questions</li>
            </ul>
          </div>
        </section>
        <section id='projects'>
          <h1>PROJECTS</h1>
          <div className='block'>
            <div className='block-heading'>Light CMS</div>
            <div>May. 2023 – Present</div>
            <ul>
              <li>Building headless, serverless content management system (CMS) on AWS for website content</li>
              <li>Wrote Node.js REST APIs to fetch/edit content on NoSQL database with authentication</li>
              <li>Deployed cloud services under custom subdomains; working on React frontend</li>
              <li>AWS services used: Lambda, API Gateway, DynamoDB, Cognito, S3, CloudFront</li>
            </ul>
          </div>
          <div className='block'>
            <div className='block-heading'><a target='_blank' rel='noreferrer' href='https://github.com/capitalone/DataProfiler/pulls?q=is%3Apr+author%3Ajunholee6a'>DataProfiler (Open-source Contributions)<span className='material-symbols-outlined'>open_in_new</span></a></div>
            <div>May. 2023 – Present</div>
            <ul>
              <li>Wrote 15+ merged pull requests fixing Python type-checking errors, LSP violations, etc.</li>
              <li>Fixed project’s mypy type-checking configuration; documented steps to update dependencies</li>
              <li>Worked with maintainers to resolve issues and merge changes in continuous integration</li>
            </ul>
          </div>
          <div className='block'>
            <div className='block-heading'><a target='_blank' rel='noreferrer' href='https://github.com/ppongpeauk/hoohacks-2023'>ResuMatch (HooHacks 2023)<span className='material-symbols-outlined'>open_in_new</span></a></div>
            <div>Mar. 2023</div>
            <ul>
              <li>Queried LinkedIn job data and matched descriptions to keywords from PDF resumes</li>
              <li>Wrote Flask backend with REST API, combining team members’ contributions</li>
              <li>Presented project to hackathon judges with live demo</li>
            </ul>
          </div>
          <div className='block'>
            <div className='block-heading'><a target='_blank' rel='noreferrer' href='https://github.com/wikimedia/wikipedia-ios/pulls?q=is%3Apr+author%3Ajunholee6a'>Wikipedia iOS App (Open-source Contributions)<span className='material-symbols-outlined'>open_in_new</span></a></div>
            <div>Dec. 2022 – Jan. 2023</div>
            <ul>
              <li>Wrote 5+ merged pull requests fixing issues in caching, URL encoding, scrolling, copying, etc.</li>
              <li>Identified and fixed bugs reported by app users in large Swift/Objective-C codebase</li>
            </ul>
          </div>
        </section>
        <section id='coursework'>
          <h1>COURSEWORK</h1>
          <div className='semi-block-container'>
            <div>
              <b>CS 2100: Data Structure and Algo 1</b>
                <ul>
                  <li>Java and object-oriented programming</li>
                  <li>Data structures</li>
                  <li>Sorting algorithms</li>
                </ul>
            </div>
            <div>
              <b>CS 2120: Discrete Math and Theory 1</b>
                <ul>
                  <li>Boolean algebra</li>
                  <li>Sets and quantifiers</li>
                  <li>Proofs</li>
                </ul>
            </div>
            <div>
              <b>CS 2130: Computer Systems and Org 1</b>
              <ul>
                <li>Logic gates and circuits</li>
                <li>Instruction set architectures</li>
                <li>x86 assembly</li>
                <li>C, compilation, and memory</li>
                <li>Bash shell</li>
              </ul>
            </div>
            <div>
              <b>CS 3100: Data Structures and Algo 2</b>
              <ul>
                <li>Asymptotic analysis and proofs</li>
                <li>Graph algorithms</li>
                <li>Divide and conquer</li>
                <li>Greedy algorithms</li>
                <li>Dynamic programming</li>
                <li>Reductions</li>
              </ul>
            </div>
            <div>
              <b>ECON 2010: Principles of Econ: Microecon</b>
              <ul>
                <li>Supply and demand</li>
                <li>Elasticity</li>
                <li>Government intervention and market failures</li>
                <li>Competition, monopoly, and oligopoly</li>
                <li>Game theory</li>
              </ul>
            </div>
            <div>
              <b>STAT 1601: Intro Data Science with R</b>
              <ul>
                <li>Data cleaning</li>
                <li>Visualization with ggplot2</li>
                <li>Numerical analysis</li>
              </ul>
            </div>
          </div>
        </section>
        <section id='connect'>
          <h1>CONNECT</h1>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/junholee6a/'>LinkedIn<span className='material-symbols-outlined'>open_in_new</span></a> <br /> <br />
          <a target='_blank' rel='noreferrer' href='https://github.com/junholee6a'>GitHub<span className='material-symbols-outlined'>open_in_new</span></a> <br /> <br />
          <a target='_blank' rel='noreferrer' href='mailto:yax3ad@virginia.edu'>Email<span className='material-symbols-outlined'>open_in_new</span></a> <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </div>
    </>
  );
}

export default App;
