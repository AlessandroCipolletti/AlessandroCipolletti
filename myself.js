class MySelf extends FrontendEngineer {

  getPersonalInfo = () => ({
    aboutMe: '', // <-- todo

    firstName: 'Alessandro',
    lastName: 'Cipolletti',
    age: 32,
    from: 'Italy',
    worksSince: 2009,
    
    mail: 'cipolletti.alessandro@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alessandro-cipolletti/',
    github: 'https://github.com/AlessandroCipolletti',
  
    workingOn: 'https://drawith.me',
    myOwnNpmPackage: 'https://www.npmjs.com/package/js-math-and-ui-utils',
    articles: 'https://dev.to/alessandrocipolletti',
    videos: 'https://www.youtube.com/channel/UCgeayDnKaNFmhM4InFLIwzQ',

    livedIn: {
      Italy: 'until 2013',    // until 23 yeras old
      Paris: '2013...2017',   // from 23 to 28
      DigitalNomad: '2018',   // 29
      Bruxelles: 'from 2019', // until now
    },
  })
  
  getSkills = () => ({
    technical: {
      Javascript: '⭐️⭐️⭐️⭐️⭐️',
      Html5:      '⭐️⭐️⭐️⭐️⭐️',
      Css3:       '⭐️⭐️⭐️⭐️⭐️',
      Git:        '⭐️⭐️⭐️⭐️⭐️',
      MySql:      '⭐️⭐️⭐️⭐️⭐️',
      React:      '⭐️⭐️⭐️⭐️',
      Redux:      '⭐️⭐️⭐️⭐️',
      NodeJs:     '⭐️⭐️⭐️⭐️',
      MongoDb:    '⭐️⭐️⭐️⭐️',
      SocketIo:   '⭐️⭐️⭐️⭐️',
      Less:       '⭐️⭐️⭐️⭐️',
      Typescript: '⭐️⭐️⭐️',
    },
    soft: {
      problemSolving: '⭐️⭐️⭐️⭐️⭐️',
      codeReview:     '⭐️⭐️⭐️⭐️⭐️',
      teaching:       '⭐️⭐️⭐️⭐️',
    },
    languages: {
      Italian: '⭐️⭐️⭐️⭐️⭐️',
      French:  '⭐️⭐️⭐️⭐️',
      English: '⭐️⭐️⭐️',
    },
  })
  
  getRelevantExperiences = () => ({
    DrawithMe: `
      Startup  -  07.2021 / 06.2022  -  VanillaJs, NodeJs, Socket.io, AWS, Git
      
      My startup Drawith.Me - A mobile first web app to draw online with a friend in real time.
      I founded Drawith.Me because I'm fascinated by what people can do when they work together,
      and I love building complex yet performing UIs that feel natural to the user.

      - I build the whole platform myself, focused on real-time performances.
      - +300K users used our platform in one year.
      - +30M views on TikTok.
      - We won 25K private founding.
    `,
    Pitchy: `
      Front-End Team Lead  -  05.2017 / 06.2021  -  React, Redux, IndexedDb, NodeJs, FFMpeg, AWS, Git

      Parisian startup - Saas platform to do video editing online 
      When I joined this startup we were 15 in total, with just 3 developers, and I was the only front-end dev.
      By the end of my experience we were 60 in total with 14 developers, and I became the front-end team lead.

      - Code guidelines and code review for the team.
      - Training for junior colleagues.
      - Video-editing UI with React and StyledComponents.
      - Local file system, animations, exporting with Puppeteer and FFMpeg.
    `,
    MaxMara: `
      iPad Manager  -  03.2012 / 05.2013  -  Vodafone MDM Manager, Sencha Touch
      
      MaxMara Fashion Group is a very large Italian fashion company, and I've worked in the Research & Development team.
      My project was to put an iPad in every Italian store to show a real-time catalog to clients.

      - I built the catalog web app.
      - I configured all devices (50+) using the Vodafone Mobile Device Manager software.
      - I trained the shops managers to use an iPad and our new app.
    `,
    AppStore: `
      I published a few web app on the App Store  -  Occasionally between 2010 and 2013

      I was fascinated by the multi touch capability of the new iPad, so I built a few web app / small games.
      I have encapsulated them inside an app container, and published them on the app store.

      - Learned how to control multi touch inputs.
      - Learned how apple store works.
      - Earned a few thousand euros from an hobby.
    `,
    ZenSistemi: `
      Software Developer  -  10.2009 / 03.2012  -  Visual Basic, Microsoft Access, Sql Server, PHP

      My first job right after high school.
      I did a lot of SQL queries, Visual Basic, and customer care.

      - Database manager on Microsoft SqlServer.
      - Customers service for our users.
      - The main project was a CRM built internally, based on Microsoft Access.
      - Worked on the internal tickets web platform in PHP.
    `,
    byMyselfDuringHighSchool: `
      Computer Teacher for the elderly  -  Occasionally between 2008 and 2009

      Started as a school project, I continued teaching some elderly people to let them use Google Search,
      Maps, Gmail, Skype, etc.

      - I have learned that nothing can be taken for granted when you are teaching a beginner. Nothing.
    `,
  })

  getEducation = () => ({
    neverEndingTraining: {
      when: 'since always',
      how: 'blogs and books', // my favourite is tympanus.net
      howOften: 'once a week at least',
    },
    achievements: [{
      when: 2013,
      what: 'passed the test to join Mensa Italia',
    }],
    highSchool: {
      when: 2009,
      where: 'Experimental school: BUS Blaise Pascal - Reggio Emilia, Italy',
      what: 'Information technology, Software development, Elettronics',
      how: 'I was awarded for making one of the best term papers of my year',
      termPaper: `
        "Design, build, and sell a led screen"
        I designed the elettronic circuit, built it, and simulated its sale bulding an online ecommerce.
      `,
    },
  })

  getInterests = () => ([
    'Browser behaviors and performance',
    'Manga and comics',
    'Travelling by motorcycle and tent',
    'Astronomy and astrophysics',
  ])

}
