import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'demo-app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  angularVersion = VERSION.full;
  ngxMarkdownVersion = '15.1.1';

  //   markdown = `## Markdown __rulez__!
  // ---

  // ### Syntax highlight
  // \`\`\`typescript
  // const language = 'typescript';
  // \`\`\`

  // ### Lists
  // 1. Ordered list
  // 2. Another bullet point
  //    - Unordered list
  //    - Another unordered bullet

  // ### Blockquote
  // > Blockquote to the max`

  markdown = `
  ## SUMMARY

  Creative Senior Full Stack Developer focused on Front-end with 10 years of experience leveraging JavaScript to build responsive websites, mobile apps, and interactive features that drive growth and improve UX.

  Main skills used: TypeScript, JavaScript, React, Angular, JQuery, Nodejs, Git, Agile, Scrum

  Currently furthering my education and interests into Python, Data Science, AI, through online courses (Certifications & Micro Master) from Harvard and MIT via Edx platform

  ## EXPERIENCE

  ### 30Mhz, Senior Web Software Engineer

  #### Feb 2021 to Feb 2023, Amsterdam, NL

  Maintaining and expanding real time data visualization platform for horticulture and agriculture, Improving test coverage, restructuring code into Nx modules

  Tools: Angular, Typescript, Javascript, Jasmine, Jenkins, Asana, Python, Nx

  ---

  ### Revolut, Web Software Engineer/Interim Product Owner

  #### Jan 2020 to Aug 2020, London, UK

  Building financial accounting tools to automate and manage Revolut corporate invoices.

  Tools: React, Typescript, Javascript, Styled Components, Testing library, Jest, Team City, Jira, Python, Flask

  ---

  ### Keytree ltd, Principal front end developer

  #### Sep 2011 to Jan 2020 , London, UK

  From junior developer to Principal front end/lead, 8 years working as a front end developer for an international award- winning design and technology consultancy offered exposure to a far-reaching range of products and requirements for clients such as: Jaguar Land Rover, BP, ARM, Barclays...

  Tools: Javascript, Angular, React, Team City, Agile, Testing

  ---

  ### Silicon Studio co - R&D Analyst, Designer, Programmer

  #### Mar 2010 to Jul 2011, Ebisu, Tokyo

  Creation and release of Android game ‘Pixel Rain 2D’ to production, and custom functional prototype of ‘Video On demand’ services for Orange.

  Tools: Android SDK+NDK, Java, C/C++,Opengl ES, JApplet, Tomcat

  ---

  ### Feb 2009 to Mar 2010 Tsukuba, Japan - R&D Analyst, Designer, Programmer
  Creation of 2 iOS game apps (‘2012-Secrets’ & ‘Cell Love’), responsible for full life cycle.

  Tools: Objective-C, Cocoa Touch, Cocos2D, OpenGL ES, MySQL Light

  ---

  ### IPLab - Research internship

  #### Apr 2008 to Sep 2008 , University of Tsukuba, Japan.

  Designed & develop collaborative tool for simultaneous editing of documents

  Tools: Java, RMI, SWING, Multi-Threaded

  ---

  ### Dynamic Research, Inc. - Research internship

  #### Aug 2006 to Feb 2007, California, USA
  Video player tool for precise video processing. Tablet based custom test rating system.

  Tools: C/C++, MFC, DirectShow

  ## CERTIFICATION

  - edx - Data Science: R Basics - Issued Nov 2022
  - edx - Deploying TinyML - Issued Mar 2022
  - edx - Applications of TinyML - Issued Feb 2022
  - edx  - Fundamentals of TinyML - Issued Dec 2021
  - edx - Data Science and Machine Learning Capstone Project- Issued Oct 2021
  - edx - Visualizing Data with Python - Issued Sep 2021
  - edx - Analyzing Data with Python - Issued Jun 2021
  - edx - Machine Learning with Python - Issued Jun 2021
  - edx - Python Essentials - Issued Jun 2021
  - IBM -Analyzing Data with Python - Issued Dec 2020
  - edx - Python Basics for Data Science - Issued Nov 2020
  - edx- Using Python for ResearchUsing Python for Research - Issued Oct 2020
  - Wageningen University & Research - Big Data for Agri-Food: Principles and Tools
  - Data Science: R Basics
  - Midjourney Mastery: Create Visually Stunning AI art - Issued Jan 2023


  ## EDUCATION

  - Sept 2003 - Sept 2008: University of Technology Belfort-Montbéliard Belfort, France Master Degree in Computer Science
  - Sept 2000 - June 2003: Lycée Louis Lachenal Argonay, France Diploma Scientifique Baccalaureate with honours, (French A-Levels).

  ## LANGUAGES

  - French: Mother tongue
  - English: Father tongue
  - German: Basic conversational level
  - Japanese: Basic conversational level (JLPT3).

  ## ADDITIONAL INFORMATION

  - Hobbies: Photography, Travel, Japanese culture, Saxophone.
  - Nationality: Dual English/French
`;
}
