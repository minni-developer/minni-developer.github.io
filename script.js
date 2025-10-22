  document.addEventListener('DOMContentLoaded', () => {
    const files = document.querySelectorAll('.file');
    const content = document.getElementById('main-content');
  
    const sections = {
      content: `
      <div class="welcome-section">
      <h1>Welcome to My Portfolio</h1>
      <p id="rotatingText">I am a <span id="dynamicPhrase"></span></p>
      </div>
      <div class="explore-section">
      <h6>Click on the sections to learn more about my <span class="emphasized">skills</span>, <span class="emphasized">projects</span>, and <span class="emphasized">achievements</span>.</h6>
      </div>
`,
skills: `
<h2>Skills</h2>
<div class="skills-container">
  <!-- Skill 1: Programming Languages -->
  <div class="skill">
      <div class="icon">
          <i class="fas fa-code"></i>
      </div>
      <div class="details">
          <h3>Programming Languages</h3>
          <p>Python, Java, C++, JavaScript, Dart, SQL</p>
      </div>
  </div>

  <!-- Skill 2: SEO and Content Writing -->
  <div class="skill">
      <div class="icon">
          <i class="fas fa-search-dollar"></i>
      </div>
      <div class="details">
          <h3>Search Engine Optimization</h3>
          <p>Keyword Research, Competitor Analysis, Content Strategy Development, Blog & Copywriting, SEO Analytics, Google Trends</p>
      </div>
  </div>  

  <!-- Skill 3: Tools & Technologies -->
  <div class="skill">
      <div class="icon">
          <i class="fas fa-tools"></i>
      </div>
      <div class="details">
          <h3>Tools & Technologies</h3>
          <p>Git, Docker, Spark, Figma, Flutter, Firebase, Wazuh</p>
      </div>
  </div>

  <!-- Skill 4: Cybersecurity -->
  <div class="skill">
      <div class="icon">
          <i class="fas fa-shield-alt"></i>
      </div>
      <div class="details">
          <h3>Cybersecurity</h3>
          <p>Web Pentesting, Vulnerability Scanning, SOC Monitoring, Ethical Hacking</p>
      </div>
  </div>

  <!-- Skill 5: Data Analysis -->
  <div class="skill">
      <div class="icon">
          <i class="fas fa-database"></i>
      </div>
      <div class="details">
          <h3>Data Analysis</h3>
          <p>Pandas, NumPy, Big Data Analysis, Spark DataFrame, Data Visualization</p>
      </div>
  </div>

  <!-- Skill 6: Soft Skills -->
  <div class="skill">
      <div class="icon">
          <i class="fas fa-user-friends"></i>
      </div>
      <div class="details">
          <h3>Soft Skills</h3>
          <p>Teamwork, Problem-Solving, Communication, Leadership, Time Management</p>
      </div>
  </div>

  <!-- Skill 7: Writing & Documentation -->
  <div class="skill">
      <div class="icon">
          <i class="fas fa-book"></i>
      </div>
      <div class="details">
          <h3>Writing & Documentation</h3>
          <p>Overleaf LaTeX, Thesis Writing, Technical Documentation, Content Creation</p>
      </div>
  </div>

  <!-- Skill 8: Multilingual Abilities -->
  <div class="skill">
      <div class="icon">
          <i class="fas fa-language"></i>
      </div>
      <div class="details">
          <h3>Bilingual Abilities</h3>
          <p>English, Urdu</p>
      </div>
  </div>
</div>

      `,
      workExperience: `
      <!-- Include Font Awesome -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      
      <h2>Work Experience</h2><br>
      <div class="experience-container">
      
        <!-- Support Operations -->
        <div class="experience">
          <div class="icon">
            <i class="fas fa-headset"></i>
          </div>
          <div class="details">
            <h3>Support Operations & QA Specialist</h3>
            <p class="company">Quick Up</p>
            <p class="date">June 2025 - Present</p>
            <p class="role">Delivered real-time operational support, streamlined order management processes, and executed QA testing to optimize platform efficiency and user satisfaction.</p>
          </div>
        </div>
      
        <!-- Research Lead -->
        <div class="experience">
          <div class="icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <div class="details">
            <h3>Research Lead</h3>
            <p class="company">Quetta Chamber of Commerce</p>
            <p class="date">June - August 2025</p>
            <p class="role">Led an agro-industrial feasibility study, proposed optimal solutions covering financial, logistical, and operational aspects to enhance regional trade.</p>
          </div>
        </div>
      
        <!-- Cybersecurity Intern - Developershub -->
        <div class="experience">
          <div class="icon">
            <i class="fas fa-lock"></i>
          </div>
          <div class="details">
            <h3>Cybersecurity Intern</h3>
            <p class="company">Developershub.Co</p>
            <p class="date">March - April 2025</p>
            <p class="role">Tested and improved a Saicafe management system while assisting in vulnerability assessment and overall system security enhancement.</p>
          </div>
        </div>
      
        <!-- Cybersecurity Intern - Code Alpha -->
        <div class="experience">
          <div class="icon">
            <i class="fas fa-network-wired"></i>
          </div>
          <div class="details">
            <h3>Cybersecurity Intern</h3>
            <p class="company">Code Alpha</p>
            <p class="date">Feb - May 2025</p>
            <p class="role">Built a network sniffer tool to capture and analyze network packets and extract key information while filtering based on protocols.</p>
          </div>
        </div>
      
        <!-- SEO Strategist -->
        <div class="experience">
          <div class="icon">
            <i class="fas fa-search-dollar"></i>
          </div>
          <div class="details">
            <h3>SEO Auditor & Strategist</h3>
            <p class="company">BISSTC</p>
            <p class="date">Jan 2025</p>
            <p class="role">Developed and implemented effective SEO strategies to enhance online visibility and drive organic traffic.</p>
          </div>
        </div>
      
        <!-- Educator -->
        <div class="experience">
          <div class="icon">
            <i class="fas fa-user-graduate"></i>
          </div>
          <div class="details">
            <h3>Educator & Mentor</h3>
            <p class="company">Beaconhouse School System, Juniper Campus</p>
            <p class="date">Nov 2024 - May 2025</p>
            <p class="role">Mentored students and delivered lectures on modern education techniques.</p>
          </div>
        </div>
      
        <!-- PSEB Apprenticeship -->
        <div class="experience">
          <div class="icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <div class="details">
            <h3>PSEB Apprenticeship</h3>
            <p class="company">Ultrasoft System Inc.</p>
            <p class="date">Aug - Sept 2024</p>
            <p class="role">Conducted web penetration testing and vulnerability analysis to strengthen cybersecurity.</p>
          </div>
        </div>
      
        <!-- SEO Intern -->
        <div class="experience">
          <div class="icon">
            <i class="fas fa-search"></i>
          </div>
          <div class="details">
            <h3>SEO Intern</h3>
            <p class="company">Icon Pro Digital Solutions</p>
            <p class="date">Jan - Apr 2024</p>
            <p class="role">Assisted in developing and maintaining comprehensive SEO strategies for client projects.</p>
          </div>
        </div>
      
        <!-- Teaching Assistant -->
        <div class="experience">
          <div class="icon">
            <i class="fas fa-chalkboard-teacher"></i>
          </div>
          <div class="details">
            <h3>Teaching Assistant</h3>
            <p class="company">BUITEMS</p>
            <p class="date">Aug - Dec 2023</p>
            <p class="role">Facilitated machine learning lectures, supervised labs, and assisted in debugging projects.</p>
          </div>
        </div>
      
      </div>
      
      
      `,
      projects: `
      <h2>Projects</h2>
      <br>
    
      <div class="project-header research">
      <i class="fas fa-flask"></i>
      <span>Research Projects</span>
    </div>
      <div class="projects-container">
          <div class="project" id="thesis">
              <h3>FYP Thesis: Android Vulnerability Detection</h3>
              <p>Analyzed vulnerabilities in Android applications using reverse engineering and machine learning to enhance detection and classification of security threats.</p>
          </div>
          <div class="project" id="gtd-data-analytics">
          <h3>GTD Big Data Reserch</h3>
          <p>Used Big data and MLlib to identify significant trends of  terrorist activities in South Asia.Compared local patterns, providing policymakers with information to improve international security.</p>
          </div>
          <div class="project" id="sdg-data-analytics">
              <h3>SDG 4 Data Analytics</h3>
              <p>Performed big data analysis using the UNESCO Quality Education dataset, extracting insights and processing large data files to support education-related decision-making.</p>
          </div>
          <div class="project" id="stress-detection-research">
              <h3>Stress Detection Research</h3>
              <p>Researched stress detection using machine learning models and performed a comparative analysis of multiple algorithms.</p>
          </div>
      </div>
    
      <br>
    
      <div class="project-header">
      <i class="fas fa-code"></i>
      <span>Development Projects</span>
    </div>
      <div class="projects-container">
          <div class="project" id="snapchat-memories">
              <h3>Auto Snap Downloader</h3>
              <p>A Python + Selenium automation tool to download all your Snapchat Memories directly from the exported memories_history.html file. </p> <br>
              <a href="https://github.com/minni-developer/Snapchat-memories-solution.git" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div class="project" id="birthday-app">
              <h3>Birthday Surprise App</h3>
              <p>A Flutter app designed to surprise someone special on their birthday, featuring beautiful animations, heartfelt messages, cheerful icons, and hourly birthday notifications that make their day feel truly magical!</p> <br>
              <a href="https://github.com/minni-developer/Birthday_Surprise_App.git" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div class="project" id="todo-app">
              <h3>DailyWins Todo App</h3>
              <p>A Flutter application that helps you manage your daily tasks with priority-based filtering, due date tracking, and a persistent storage system powered by Hive.</p><br>
              <a href="https://github.com/minni-developer/My_TodoApp.git" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div class="project" id="clip-clop-app">
              <h3>ClipClop -Reminder App</h3>
              <p>A friendly Flutter app that helps users remember to trim their nails regularly with cute reminders and positive reinforcement.</p><br>
              <a href="https://github.com/minni-developer/ClipClop_nail_mate.git" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div class="project" id="network-packet-sniffer">
              <h3>Network packet sniffer</h3>
              <p>A tool to capture and analyze network packets using Scapy library to extract key information also supports filtering based on protocols.</p><br>
              <a href="https://github.com/minni-developer/Code_Alpha_Projects.git" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div class="project" id="saicafe">
              <h3>Sai Cafe Management System Analysis and Reengineering</h3>
              <p>Conducted pentesting and enhanced app security by fixing vulnerabilities and strengthening authentication and input validation.</p><br>
              <a href="https://github.com/minni-developer/DevelopersHub_Internship.git" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div class="project" id="jedit-customization">
              <h3>Jedit Customization</h3>
              <p>Reverse-engineered the Java text editor by adding new modules and improving the system's functionality.</p><br>
              <a href="https://github.com/minni-developer/Jedit_Project.git" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div class="project" id="network-simulation">
              <h3>Comprehensive Network Simulation</h3>
              <p>Designed a network simulation incorporating key security concepts, such as VLAN configuration, port security, and VTP integration.</p><br>
              <a href="#" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div class="project" id="web-portal">
              <h3>Co-Curricular Web Portal</h3>
              <p>Automated university clubs and councils management, providing a platform for students to register for co-curricular activities.</p><br>
              /* <a href="#" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub */
            </a>
          </div>

          <div class="project" id="management-system">
              <h3>Object-Oriented Management System</h3>
              <p>Created a management system using OOP principles, with a user-friendly Java interface for administrative tasks.</p><br>
              <a href="#" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div class="project" id="branding-designing">
              <h3>Business Branding & Graphic Design</h3>
              <p>Executed branding for a hypothetical business, including logo design, promotional materials, and visual identity.</p><br>
              <a href="#" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>
      </div>
    `,
    
      certificates: `
      <h2>Certifications</h2>
      <br>
      <div class="certification">
      <img src="logo/PSEB.png" alt="PSEB Logo" class="cert-logo">
      <p>Mobile Application Development<br>PSEB | Riphah Institute of Systems Engineering (RISE)</p>
      </div>
      <div class="certification">
      <img src="logo/PSEB.png" alt="PSEB Logo" class="cert-logo">
      <p>Unity Game Development<br>PSEB | Riphah Institute of Systems Engineering (RISE)</p>
      </div>
      <div class="certification">
        <img src="logo/google.svg" alt="Google Logo" class="cert-logo">
        <p>Google Cybersecurity Specialization<br>Coursera | Google</p>
      </div>
      <div class="certification">
        <img src="logo/google.svg" alt="Google Logo" class="cert-logo">
        <p>Google UX Design Professional Certificate<br>Coursera | Google</p>
      </div>
      <div class="certification">
        <img src="logo/NAVTTC.svg" alt="NAVTTC Logo" class="cert-logo">
        <p>National Vocational and Technical Training Commission (NAVTTC)<br>• Computer Networks<br>• Internet of Things (IoTs)</p>
      </div>
      <div class="certification">
        <img src="logo/deepLearning.png" alt="DeepLearning.AI Logo" class="cert-logo">
        <p> Machine Learning Specialization<br>Coursera | DeepLearning.AI | Stanford University</p>
      </div>
      <div class="certification">
        <img src="logo/Semrush.svg" alt="SEMrush Logo" class="cert-logo">
        <p>Search Engine Optimization (SEO)<br>SEMrush Academy</p>
      </div>
      <div class="certification">
        <img src="logo/ibm.svg" alt="IBM Logo" class="cert-logo">
        <p>IBM Cybersecurity Analyst<br>• Introduction to Cybersecurity Tools & Cyber Attacks<br>• Cybersecurity Roles, Processes & Operating System Security</p>
      </div>
      <div class="certification">
        <img src="logo/Coursera.svg" alt="HKU Logo" class="cert-logo">
        <p>Modeling Software Systems using UML<br>Coursera | Hong Kong University of Science and Technology</p>
      </div>
      <div class="certification">
        <img src="logo/EC-Council.png" alt="EC-Council Logo" class="cert-logo">
        <p>Ethical Hacking Essentials (EHE)<br>Coursera | EC-Council</p>
      </div>
      <div class="certification">
        <img src="logo/cisco.svg" alt="Cisco Logo" class="cert-logo">
        <p>Introduction to Cybersecurity<br>Cisco Networking Academy</p>
      </div>
      <div class="certification">
      <img src="logo/Digibizz.jpeg" alt="DigiBizz logo" class="cert-logo">
      <p>SEO & Digital Marketing<br>DigiBizz Freelancing & Entrepreneurship Program</p>
      </div>
      <div class="certification">
      <img src="logo/Digibizz.jpeg" alt="DigiBizz logo" class="cert-logo">
      <p>Digital Designing<br>DigiBizz Freelancing & Entrepreneurship Program</p>
      </div>
    
      `,
      honors: `
      <h2>Honors & Awards</h2> <br>
      <div class="honor">
      <p>🏆 Educator and behavioural counsellor<br>Beaconhouse School System</p>
    </div>
      <div class="honor">
        <p>🏆 Ignite Cybersecurity Hackathon 2023<br>National Finalist</p>
      </div>
      <div class="honor">
        <p>🏆 TechWeek Workshop<br>Developers Club Training</p>
      </div>
      <div class="honor">
        <p>🏆 Science Fair<br>Best Presented Project 2012</p>
      </div>
      <div class="honor">
        <p>🏆 Colgate Global Art Contest<br>Served as a Lead Broadcaster (2012)</p>
      </div>
      <div class="honor">
        <p>🏆 AFAQ Creative Writing Competition<br>Best Creative Writer (2012)</p>
      </div>
      <div class="honor">
        <p>🏆 UNICEF Children Day<br>Remarkable Participation to portray rights and responsibilities of Children (2011)</p>
      </div>
      <div class="honor">
        <p>🏆 Parenting Conference<br>Organized Awareness Workshop for Parents (2011)</p>
      </div>
      `,
      voluntary: `
      <h2>Voluntary Experiences</h2>
      <br>
      <div class="voluntary-container">
          <div class="voluntary-experience">
              <h3><i class="fas fa-user-graduate"></i> BUITEMS Student Affairs</h3>
              <p><strong>Duration:</strong> 2021 - 2023</p>
              <p>Contributed to various student initiatives, enhancing campus life and student engagement.</p>
          </div>
          <div class="voluntary-experience">
              <h3><i class="fas fa-broadcast-tower"></i> Broadcasting Unit, The City School</h3>
              <p><strong>Role:</strong> Lead Broadcaster</p>
              <p><strong>Duration:</strong> 2008 - 2013</p>
              <p>Led broadcasting activities, coordinating with team members to deliver engaging content.</p>
          </div>
          <div class="voluntary-experience">
              <h3><i class="fas fa-volume-up"></i> Voice of Balochistan</h3>
              <p>Voluntarily worked with VOB, promoting local culture and issues through media.</p>
          </div>
          <div class="voluntary-experience">
              <h3><i class="fas fa-chalkboard-teacher"></i> Mentorship </h3>
              <p><strong>Duration:</strong> 2021 - Present</p>
              <p>Providing mentorship to students and young professionals in cybersecurity and career development, guiding them in skill-building and project work.</p>
          </div>
      </div>
      
      
      `,
      blogs: `
      <h2>Blog</h2>
      <br>
      <div class="blog-container">
          <div class="blog-post" id="blog1">
          <h3>A Day in the Life of a Software Engineering Student</h3>
          <a href="Blogs/blog1.html" target="_blank">Read More ..</a>
          </div>
          <div class="blog-post" id="blog2">
          <h3>How I Explored Various Domains to Land in Cybersecurity</h3>
          <a href="Blogs/blog2.html" target="_blank">Read More ..</a>
          </div>
          <div class="blog-post" id="blog3">
              <h3>The Unexpected Lessons Learned from Participating in an Election Campaign</h3>
              <a href="Blogs/blog3.html" target="_blank">Read More ..</a>
          </div>
          <div class="blog-post" id="blog4">
          <h3>I did the ChatGPT prompt of </h3>
          <a href="Blogs/blog4.html" target="_blank">Read More ..</a>
          </div>
          <div class="blog-post" id="blog5">
          <h3>Balancing Passion, Career, and Resilience</h3>
          <a href="Blogs/blog5.html" target="_blank">Read More ..</a>
          </div>
          <div class="blog-post" id="blog6">
          <h3>A Glimpse into My World </h3>
          <a href="Blogs/blog6.html" target="_blank">Read More ..</a>
          </div>
      </div>
      
      `,
      contact: `
      <h2>Contact Me</h2> <br>
      <div class="social">
          <p><i class="fab fa-github" aria-hidden="true"></i> <a href="https://github.com/minni-developer" target="_blank">GitHub</a></p>
          <p><i class="fab fa-medium" aria-hidden="true"></i> <a href="https://medium.com/@manahilsabir544" target="_blank">Medium</a></p>
          <p><i class="fas fa-shield-alt" aria-hidden="true"></i> <a href="https://app.letsdefend.io/user/manahilsabir544" target="_blank">Let's Defend</a></p>
          <p><i class="fab fa-linkedin" aria-hidden="true"></i> <a href="https://www.linkedin.com/in/manahil-sabir-0584a8253/" target="_blank">LinkedIn</a></p>
          <p><i class="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:manahilsabir544@gmail.com">Email</a></p>
          <p><i class="fas fa-globe" aria-hidden="true"></i> <a href="https://minni-developer.github.io/" target="_blank">Personal Website</a></p>
      </div>

      `,
      about: `
      <h2>About Me</h2>
      <br>
      <div class="about-container">
      <div class="about-content">
      <p>
          👋 Hello! I’m <strong>Manahil Sabir</strong> a <span class="highlight">QA Engineer</span> turned <span class="highlight">cybersecurity enthusiast</span> with a love for <span class="highlight">ethical hacking</span> 🔐 and <span class="highlight">threat intelligence</span> 🕵️‍♀️. I hold a <strong>BS in Software Engineering</strong> (CGPA 3.5), and my journey has been all about breaking things (nicely) to make them better!
      </p>
      <p>
          🛠️ From hands-on internships in <strong>web penetration testing</strong> and <strong>SEO</strong> to crafting <em>research studies</em>, I’ve worked on real world challenges across tech and strategy. I love merging creativity with technical precision.
      </p>
      <p>
          👩‍💻 My toolkit includes programming, reverse engineering, machine learning 🤖, and testing methodologies, helping me tackle problems from multiple angles. Whether it’s a bug in your app 🐞 or a security hole in your server, I’m probably already on it.
      </p>
      <p>
          🌍 I thrive in collaborative spaces, speak multiple languages 🗣️, and enjoy simplifying complex tech into human friendly terms. I also love teaching and mentoring whenever I get the chance.
      </p>
      <p>
          🚀 Currently diving deeper into the world of cybersecurity, I'm always up for exciting projects that make the digital world smarter and safer. Let’s connect, build, break (ethically), and secure together!
      </p>
  </div>
      </div>
      
      `,
      achievements: `
      <h2>Achievements</h2>
      <br>
      <div class="achievements-container">
        <div class="achievements-experience">
          <h3><i class="fas fa-award"></i> Dean’s List Honoree</h3>
          <p><strong>Duration:</strong> 2020 - 2024</p>
          <p>Demonstrated academic excellence by maintaining a CGPA of 3.5/4.0, ranking in the top percentile of the program.</p>
        </div>
        <div class="achievements-experience">
          <h3><i class="fas fa-trophy"></i> Red Team Winner</h3>
          <p><strong>Duration:</strong> 2024</p>
          <p>Won the regional round for Ignite Cyber Hackathon 2024 and secured 20th place in the national round.</p>
        </div>
        <div class="achievements-experience">
          <h3><i class="fas fa-flag-checkered"></i> Blackhat MEA Qualifying Round</h3>
          <p><strong>Duration:</strong> 2024</p>
          <p>Secured 435th place in the Blackhat MEA Qualifying Round.</p>
        </div>
        <div class="achievements-experience">
          <h3><i class="fas fa-medal"></i> National Cyber Hackathon Finalist</h3>
          <p><strong>Duration:</strong> 2023</p>
          <p>Performed well in the national round and qualified for the International Round at Blackhat MEA.</p>
        </div>
      </div>
    `

    
  };
  

  
    let isDeleting = false;
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    const rotatingText = document.getElementById("dynamicPhrase");
    const phrases = [ "SOFTWARE Engineer ","Researcher", "Writer",  "SEO expert", "SOC analyst", "Project manager", "Problem Solver", "Tech Enthusiast", "Creative Thinker ", "Strategist ","Visionary " , " Innovator" ]; // Example phrases
    const styles = [
      "color: #e38d3d; font-weight: bold;", // 
      "color: #457b9d; font-style: italic;", // 
      "color: #FF8A8A; text-decoration: underline;", // 
      "color: #2a9d8f; text-transform: uppercase;", // 
      "color: #36BA98; font-weight: bold; text-shadow: 2px 2px #ffbe0b;", // 
      "color: #170207; font-style: italic; background-color: #e3dadc; padding: 0 10px; border-radius: 5px;", // 
      "color: #118ab2; text-decoration: underline dotted; font-weight: 900; letter-spacing: 3px;", // 
      "color: #ffd166; text-transform: uppercase; border-bottom: 3px solid #073b4c;", //   
      "color: #8338ec; font-variant: small-caps; transform: rotate(3deg);", //  
      "color: #e36414; font-family: 'Courier New', monospace; font-size: 40px;", // 
      "color: #98db46; text-decoration: overline double #98db46; font-weight: lighter;", //  
      "color: #e63946; background-image: linear-gradient(90deg, #4361ee, #b5179e); -webkit-background-clip: text; color: transparent;" // 
    ];
    

    function rotateText() {
      const rotatingText = document.getElementById("rotatingText");
      if (!rotatingText) return;

      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting && currentCharIndex < currentPhrase.length) {
          rotatingText.innerHTML = "I am a " + currentPhrase.substring(0, currentCharIndex + 1);
          rotatingText.setAttribute("style", styles[currentPhraseIndex]);
          currentCharIndex++;
          setTimeout(rotateText, 200);
      } else if (isDeleting && currentCharIndex > 0) {
          rotatingText.innerHTML = "I am a " + currentPhrase.substring(0, currentCharIndex - 1);
          rotatingText.setAttribute("style", styles[currentPhraseIndex]);
          currentCharIndex--;
          setTimeout(rotateText, 100);
      } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
          setTimeout(() => {
              isDeleting = true;
              rotateText();
          }, 500);
      } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(rotateText, 300);
      }
  }

  function updateContent(section) {
      content.innerHTML = sections[section] || `<h2>Section Not Found</h2>`;
      currentPhraseIndex = 0;
      currentCharIndex = 0;
      isDeleting = false;
      rotateText(); // Reinitialize the text rotation effect
  }

  files.forEach(file => {
      file.addEventListener('click', (e) => {
          e.preventDefault();
          const section = file.getAttribute('data-section');
          updateContent(section);
      });
  });

  // Initial content load and rotating text
  content.innerHTML = sections.content; // Load initial content
  rotateText(); // Start rotating text on load
});


// Theme toggle logic
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Persist theme
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
}


// Sidebar Hamburger Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-collapsed');
  });

  // Auto-collapse sidebar on link click (mobile only)
  const fileLinks = document.querySelectorAll('.file');
  fileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        document.body.classList.add('sidebar-collapsed');
      }
    });
  });

  // Auto-restore on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      document.body.classList.remove('sidebar-collapsed');
    }
  });
});
