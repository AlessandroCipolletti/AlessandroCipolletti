class MySelf extends FrontendEngineer {
  getPersonalInfo = () => ({
    aboutMe: `
      Passionate about the Front-end ecosystem, complex UIs, touch devices,
      js performance and multi users interaction.
    `,

    firstName:  'Alessandro',
    lastName:   'Cipolletti',
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
      Italy:        'until 2013',   // until 23 yeras old
      Paris:        '2013...2017',  // from 23 to 28
      DigitalNomad: '2018',         // 29
      Bruxelles:    'from 2019',    // until now
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
      codeReview:     '⭐️⭐️⭐️⭐️⭐️',
      problemSolving: '⭐️⭐️⭐️⭐️⭐️',
      teaching:       '⭐️⭐️⭐️⭐️',
    },
    languages: {
      Italian: '⭐️⭐️⭐️⭐️⭐️',
      French:  '⭐️⭐️⭐️⭐️',
      English: '⭐️⭐️⭐️',
    },
  })
  
  getRelevantExperiences = () => ({
    DrawithMe: {
      what:  'Startup',
      when:  '07.2021 / 06.2022',
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
    Pitchy: {
      what:  'Front-End Team Lead',
      when:  '05.2017 / 06.2021',
      stack: 'React, Redux, IndexedDb, FFMpeg, NodeJs, AWS, Git',
      about: `
        Parisian startup - Saas platform to do video editing online 
        When I joined we were 15 employees. Out of the 3 developers, I was the only front-end dev.
        4 years later we were 14 developers among 60 emploees, and I was the front-end team lead.
      `,
      done: `
        - Code guidelines and code review for the team.
        - Training for junior colleagues.
        - Video-editing UI with React and StyledComponents.
        - Local file system, animations, exporting with Puppeteer and FFMpeg.
      `,
    },
    MaxMara: {
      what:  'iPad Manager',
      when:  '03.2012 / 05.2013',
      stack: 'Vodafone MDM Manager, Sencha Touch',
      about: `
        MaxMara is a very large Italian fashion company, and I've worked in the R&D team.
        My project consisted to put an iPad in every Italian store to show our catalog to clients.
      `,
      done: `
        - I built the catalog web app.
        - I configured all devices (50+) using the Vodafone Mobile Device Manager software.
        - I trained the shops managers to use an iPad and our new app.
      `,
    },
    AppStore: {
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
    ZenSistemi: {
      what:  'Software Developer / DB manager',
      when:  '10.2009 / 03.2012',
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
    byMyself: {
      what:  'Computer Teacher for the elderly',
      when:  'Occasionally between 2008 and 2009',
      about: `
        Started as a school project, I continued teaching some elderly people to let them use
        Google Search, Maps, Gmail, Skype, etc.
      `,
      done: `
        - I learned that nothing can be taken for granted when you are teaching a beginner. Nothing.
      `,
    },
  })

  getEducation = () => ({
    neverEndingTraining: {
      when: 'since always',
      how: 'blogs and books', // my favorite is tympanus.net
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
        I designed an elettronic circuit, built it, and simulated its sale with an online ecommerce.
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
