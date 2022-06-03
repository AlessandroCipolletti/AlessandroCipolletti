<h1 align="center">Hi everyone 👋 I'm Alessandro</h1>

<!--
[![Typing SVG](https://readme-typing-svg.herokuapp.com?size=25&duration=2000&color=000000&background=FFFFFF&center=true&vCenter=true&multiline=true&width=1024&height=130&lines=Hi+everyone+%F0%9F%91%8B+I'm+Alessandro%2C;a+passionate+Front-End+engineer+from+Italy.;I+love+to+build+complex+and+performing+UIs%2C;and+tools+to+connect+people.;++++++++++)](https://git.io/typing-svg)
-->

[![My Skills](https://skillicons.dev/icons?i=js,html,css,react,redux,ts,scss,mongodb,mysql,nodejs,py,aws,git,vscode,webpack)](https://skillicons.dev)



```js
class Alessandro extends FrontendEngineer {
  getPersonalInfo = () => ({
    aboutMe: `
      Passionate about the Front-end ecosystem, complex UIs, touch devices,
      js performance and multi users interaction.
    `,

    name:       'Alessandro Cipolletti',
    age:         32,
    from:       'Italy',
    worksSince:  2010,
    
    mail:     'cipolletti.alessandro@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alessandro-cipolletti/',
    github:   'https://github.com/AlessandroCipolletti',
  
    workingOn:       'https://drawith.me',
    myOwnNpmPackage: 'https://www.npmjs.com/package/js-math-and-ui-utils',
    articles:        'https://dev.to/alessandrocipolletti',
    videos:          'https://www.youtube.com/channel/UCgeayDnKaNFmhM4InFLIwzQ',

    livedIn: {
      Italy:        'Until 2013',   // until 23 years old
      Paris:        '2013...2017',  // from 23 to 28
      DigitalNomad: '2018',         // 29
      Bruxelles:    'From 2019',    // until now
    },
  })

  getSkills = () => ({
    technical: {
      '⭐️⭐️⭐️⭐️⭐️': ['Javascript', 'Html5', 'Css3', 'Git', 'MySql', 'Canvas', 'SVG'],
      '⭐️⭐️⭐️⭐️':   ['React', 'Redux', 'NodeJs', 'MongoDb', 'Socket.Io', 'Less'],
      '⭐️⭐️⭐️':     ['Typescript', 'Python'],
    },
    soft: {
      '⭐️⭐️⭐️⭐️⭐️': ['Problem solving', 'Code review'],
      '⭐️⭐️⭐️⭐️':   ['Teaching'],
    },
    languages: {
      '⭐️⭐️⭐️⭐️⭐️': ['Italian'],
      '⭐️⭐️⭐️⭐️':   ['French'],
      '⭐️⭐️⭐️':     ['English'],
    },
  })
  
  getRelevantExperiences = () => ({
    'Drawith.Me': {
      what:  'Startup Co-founder',
      when:  'Last year: 07.2021 / 06.2022',
      stack: 'VanillaJs, NodeJs, Socket.io, AWS, Git',
      about: `
        My startup Drawith.Me - A mobile first web app to draw online with a friend in real time.
        I founded Drawith.Me because I'm fascinated by what people can do when they work together,
        and I love building complex yet performing UIs that feel natural to the user.
      `,
      done: `
        - I build the whole platform myself, focused on real-time performances.
        - +300K users used our platform in one year.
        - +30M views on TikTok.
        - We won 25K private founding.
      `,
    },

    'Pitchy.fr': {
      what:  'Front-End Team Lead',
      when:  '4 years: 05.2017 / 06.2021',
      stack: 'React, Redux, IndexedDb, FFMpeg, NodeJs, AWS, Git',
      about: `
        Parisian startup - Saas platform to do video editing online.
        When I joined we were 15 employees. Out of the 3 developers, I was the only front-end dev.
        4 years later we were 14 developers among 60 emploees, and I was the front-end team lead.
      `,
      done: `
        - I built a video-editing UI with React used now in more than half of new projects.
        - Code guidelines and code review for the team.
        - Training for junior colleagues.
        - Local file system, animations, exporting with Puppeteer and FFMpeg.
      `,
    },

    'MaxMara Fashion Group - R&D': {
      what:  'iPad Manager',
      when:  '1 year: 03.2012 / 05.2013',
      stack: 'Vodafone MDM Manager, Sencha Touch',
      about: `
        MaxMara is a very large Italian fashion company, and I've worked in the R&D team.
        My project consisted in putting an iPad in every Italian store to show our catalog to clients.
      `,
      done: `
        - I built the catalog web app.
        - I configured all devices (50+) using the Vodafone Mobile Device Manager software.
        - I trained the shops managers to use an iPad and our new app.
      `,
    },

    'Zen Sistemi': {
      what:  'Software Developer / DB manager',
      when:  '2 years: 10.2009 / 03.2012',
      stack: 'Visual Basic, Microsoft Access, SqlServer, PHP',
      about: `
        My first job right after high school.
        I did a lot of SQL queries, Visual Basic, and customer care.
      `,
      done: `
        - Database manager on Microsoft SqlServer.
        - Customers service for our users.
        - The main project was a CRM built internally, based on Microsoft Access.
        - Worked on the internal tickets web platform in PHP.
      `,
    },
  })

  getEducation = () => ({
    'Self training': {
      when: 'Since always',
      how: 'Blogs and books', // my favorite is tympanus.net
      howOften: 'Once a week at least',
    },

    'Awards': [{
      when: 2013,
      what: 'Passed the test to join Mensa Italia',
    }],

    'High School': {
      when: 2009,
      where: 'Experimental High School: BUS Blaise Pascal - Reggio Emilia, Italy',
      what: 'Information technology, Software development, Elettronics',
      termPaper: `
        I was awarded for making one of the best term papers of my year:
        "Design, build, and sell a led screen"
        I designed an elettronic circuit, built it, and simulated its sale with an online ecommerce.
      `,
      done: `
        - Web development using Javascript Html Css / Php MySql.
        - Software development and Algorithms using Pascal and VisualBasic.
        - Designing electronic circuits, Boolean algebra.
        - Designing computer networks using Cisco Packet Tracer, TCP/IP and 802.11 protocols.
        - Intel 8080 / 8088 microprocessor architectures.
      `,
    },
  })

  getPersonalProjects = () => ({
    'YouTube': {
      what: 'I have a small (italian) Youtube channel where I talk about web development and startups',
      when: 'Last 2 / 3 years',
    },

    'AppStore': {
      what:  'I published a few web app on the App Store',
      when:  'Occasionally between 2010 and 2013',
      about: `
        I was fascinated by the multi touch capability of the new iPad, so I built a few web app.
        I have encapsulated them inside an app container, and published them on the app store.
      `,
      done: `
        - Learned how to control multi touch inputs.
        - Learned how apple store works.
        - Earned a few thousand euros from an hobby.
      `,
    },

    'Teacher': {
      what:  'Computer Teacher for the elderly',
      when:  'Occasionally between 2008 and 2009',
      about: `
        Started as a school project, I continued by myself teaching some elderly people how to use
        Google Search, Maps, Gmail, Skype, etc.
        A really touching experience on a personal level.
      `,
      done: `
        - I learned that nothing can be taken for granted when you are teaching a beginner. Nothing.
      `,
    },
  })

  getInterests = () => ([
    'Browser behaviors and performance',
    'Manga and comics',
    'Astronomy and astrophysics',
    'Travelling by motorcycle and tent',
    'Volleyball',
  ])
}
```


<div align="center">
  <img src="./imgs/myself.webp" />  
</div>

<!--
<div align="center">
  <img src="./imgs/info.webp" />  
</div>
<div align="center">
  <img src="./imgs/skills.webp" />  
</div>
<div align="center">
  <img src="./imgs/experiences.webp" />  
</div>
<div align="center">
  <img src="./imgs/education.webp" />  
</div>
<div align="center">
  <img src="./imgs/projects.webp" />  
</div>
<div align="center">
  <img src="./imgs/interests.webp" />  
</div>
-->



<!--
<br /><br />
## Mt GitHub activity (public repo only)

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=AlessandroCipolletti)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=AlessandroCipolletti&layout=compact)](https://github.com/AlessandroCipolletti/github-readme-stats)


<br /><br />
## Languages and libraries
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Less](https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## DB
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

# Tools
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Atom](https://img.shields.io/badge/Atom-%2366595C.svg?style=for-the-badge&logo=atom&logoColor=white)
![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![CodePen](https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)

## Testing 
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## Version control
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)

## Packaging
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## Server
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
-->

<!--
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=AlessandroCipolletti)](https://github.com/anuraghazra/github-readme-stats)

[![AlessandroCipolletti github stats](https://github-readme-stats.vercel.app/api?username=AlessandroCipolletti&include_all_commits=true&count_private=true&show_icons=true&line_height=20&title_color=FFFFFF&icon_color=FFFFFF&text_color=FFFFFF&bg_color=0D1117)](https://github.com/anuraghazra/github-readme-stats)
-->

![](https://komarev.com/ghpvc/?username=AlessandroCipolletti&style=for-the-badge)








