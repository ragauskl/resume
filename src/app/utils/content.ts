const content = {
  name: 'LINA RAGAUSKAITE',
  title: 'Full-stack TypeScript Developer & DevOps Engineer',
  intro: /*html*/ `
    <strong>Eager to learn</strong>, <strong>curious</strong>, <strong>determined</strong> and <strong>responsible</strong> are four words that I believe describe me
    the best. I started programming in 10th grade and since then realised that Software Engineering is something I would be thrilled to work on daily. To this day
    Software Engineering is not only my job, but also one of my main hobbies.
    <br/><br/>
    I mostly work with <strong>Angular</strong>,&nbsp;<strong>Node.js</strong> and <strong>Google Cloud Platform</strong>, but full list of tech and tools I'm
    experienced with is far longer, which can be found in my portfolio. I enjoy working on all sides of the spectrum, <strong>Front-end</strong>,
    <strong>Back-end</strong> and <strong>DevOps</strong> however I would pick Back-end and DevOps work any day over Front-end, as I find it more interesting and
    in most cases more complex and challenging compared to Front-end. I <strong>constantly work on improving my skills and knowledge</strong> and enjoy learning new
    and better ways of solving problems and accomplishing tasks. As a result, with every personal project, I aim to include at least one feature/problem that will
    require a solution for which I will have to learn something new.
    <br/><br/>
    Additionally I sometimes like to work with graphic design, love playing around with electrical engineering and am planning to start learning ML.
    Besides coding related topics I'm an active person and love outdoor and indoor activities.<br /><br /> I work well both in teams and on my own and
    have experience working in various environments including <strong>Agile</strong>.`,
  availability:  /*html*/ `
    Currently I'm <strong>not actively looking for new opportunities</strong> as I'm focused and am working on personal projects and entrepreneur ideas.
  `,
  contacts: {
    location: {
      value: 'United Kingdom',
      img: 'assets/icons/ic-place.svg'
    },
    email: {
      value: 'ragauskl@gmail.com',
      img: 'assets/icons/ic-email.svg'
    },
    mobile: {
      value: '+44 749 205 1761',
      img: 'assets/icons/ic-phone.svg'
    },
    linkedin: {
      value: 'linkedin.com/in/ragauskl/',
      img: 'assets/icons/linkedin.svg'
    },
    github: {
      value: 'github.com/ragauskl',
      img: 'assets/icons/github.svg'
    }
  },
  portfolio: {
    href: 'www.lina.codes',
    description: /*html*/ `
      Resume contains only information most relevant to potential opportunities, for full information related to my Software Engineering skills and experience,
      visit my portfolio.
    `,
    img: 'assets/logo/portfolio-dark.svg'
  },
  projects: [{
    name: 'Cursr',
    date: '2021 - Present',
    liveLink: 'https://cursr.app',
    job: 'Founder, Full-stack JavaScript Engineer & DevOps',
    description: /*html*/ `
      A <b>cross-platform Electron</b> application/utility tool to customise mouse transitions between screens available on Windows,
      Mac and list of Linux distributions. I started working on Cursr in order to solve annoyances when moving mouse between different
      resolution screens, without having to sacrifice screen resolution as other available solutions did not meet my expectations.
      Later the scope of project expanded to include more features for optimising use of mouse and keyboard in multiple monitor/computer setup.
    `
  }, {
    name: 'Route Fox',
    date: '2018 1st Quarter',
    job: 'Mobile Full-stack Development',
    demoLink: 'https://youtu.be/9NwdTCJON8U',
    description: /*html*/ `
    Dissertation project - a mobile travel recommender system, that generates route suggestions between 2+ points of interests, based on the user
    preferences such as visit length for every place, arrival and departure preferences, the priority of each place as well as preferred transport
    type. The mobile application also has a feature to live-track a saved route and warn the user if wandering off too far away from the selected path.
    The mobile application has been built using <b>Ionic 3 (Angular 5)</b> and the API has been built using <b>Node.js</b>. Application data is stored
    in a <b>MongoDB</b> database. For this project, <b>Google Maps</b>, <b>Directions</b> and <b>Places APIs</b> were used.
    `
  }],
  experience: [{
    company: 'Bitgapp, UK',
    img: 'assets/logo/bitgapp.png',
    job: 'Director & Full-stack JavaScript Developer',
    report: '',
    from: 'Apr 2021',
    to: 'Present',
    length: '',
    description: /*html*/ `
      Director and co-owner of Bitgapp Ltd, a small independent software company based in UK. Currently Bitgapp is made of just two
      (including myself) directors/software developers. We're working on some individual and some shared ideas which are then published under Bitgapp
      name. My current main focus is Cursr - a cross-platform application for customizing mouse movements between multiple displays connected to a
      computer (and soon to multiple computers).
      `
  }, {
    company: 'Geospatial Insight Limited, Coleshill',
    img: 'assets/logo/geospatial-insight.png',
    job: 'Full-stack JavaScript Developer',
    report: 'Reporting to Manager of Software, Analytics and Machine Learning',
    from: 'Jun 2018',
    to: 'Dec 2020',
    length: '2 yrs 3 mos',
    description: /*html*/ `
      Working as part of the team developing tools used to display and manipulate a wide range of geospatial data collected from satellites,
      plane and drone imagery which is analysed by GSI Machine Learning team to produce insight into the collected data. Mostly used technologies
      for web app development were: <strong>Angular</strong>, <strong>Node.js</strong>, and <strong>Postgres</strong>; For hosting: <strong>Google
      Cloud Platform (GCP)</strong>, <strong>Serverless</strong> and <strong>Kubernetes</strong>; For continuos testing and deployment (CI/CD):
      <strong>Gitlab CI</strong>. During time at GSI I was working on full spectrum of developing and maintaining the core product Visual Intelligence Platform
      (VIP) and couple other projects. Some of the technical work highlights include:
      <br/>
        <ul>
          <li>Proposed and implemented usage of Kubernetes and Serverless solutions for better scalability</li>
          <li>
            Building database architecture to store large and complex datasets, making various performance optimisations to modify, read and send/render
            it in the web UI for different use cases
          </li>
          <li>Implementing complex multilevel permissions/access control to data (RBAC)</li>
          <li>Creating custom script that can be used with any CI tool to test and deploy all apps and services within project</li>
          <li>Working with various 3rd party APIs used for interacting with services, platforms, social networks and geospatial data providers</li>
          <li>Doing system security audits</li>
        </ul>
      <br/>
      I've been helping to scope projects, review and set time estimates for projects, maintaining and creating tasks in Jira. Initially I joined a
      small developer team, after that for a while I was working mostly alone on the full stack web development projects, until new team was put together,
      for which I have assisted in hiring/interview processes and training/assisting both junior and experienced developers as well as helping them get up
      to speed with the projects.
    `
  }, {
    company: 'Sorion Electronics Limited, Birmingham',
    img: 'assets/sorion-logo.png',
    job: 'Undergraduate Software Engineer',
    report: 'Reported to System Director and Software Team Manager',
    from: 'Jun 2016',
    to: 'Oct 2017',
    length: '1 yr 3 mos',
    description: /*html*/ `
      Responsible for development and maintenance of new features for the company's core product - Sextans-Rt. This involved keeping up-to-date documentation,
      preparing presentations, participating in regular meetings and technical reviews, writing scripts and sometimes visiting customers site. Projects were
      written in C#.Net/VB.Net and included the use of Subversion, TCP/IP, FTP and Microsoft SQL Server.
      <br/><br/>
      Some of the projects I have worked on include a <b>Pick-To-Light System</b> (a light-directed aid for the production line), a <b>Multi-Language
      Support Tool</b> for the Sextans-RT and a <b>Layered Image Editor</b>.
    `
  }],
  languages: [{
    name: 'English',
    level: 'Fluent'
  }, {
    name: 'Russian',
    level: 'Fluent'
  }, {
    name: 'Lithuanian',
    level: 'Native'
  }, {
    name: 'German',
    level: 'Lower intermediate'
  }],
  education: {
    img: 'assets/cov-uni.png',
    university: 'Coventry University',
    course: "1st Class 'Computing' Bachelor of Science",
    from: 2014,
    to: 2018,
    modules: [
      'Full-stack development',
      'Programming, algorithms and data structures',
      'Computer architecture and networks',
      'Interactive pervasive computing',
      'Design for usability',
      'Agile development',
      'Intelligent agents',
      'Enterprise information systems',
      'German lower intermediate'
    ]
  }

}

export default content
