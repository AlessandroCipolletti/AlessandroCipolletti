class Alessandro extends FullStackEngineer {
  personalInfo = () => ({
    currentRole:   'Founding Engineer at Arcads.ai',
    aboutMe: `
      Deeply motivated by the AI wave.
      I enjoy solving complex technical problems while keeping a simple user experience.
      Love working in startups. I did my own, it failed spectacularly.
      I read every book I found about the Silicon Valley revolution.
    `,
    age:            37,
    from:          'Italy',
    liveIn:        'Switzerland', // lived in France and Belgium before
    speaking:      ['Italian', 'English', 'French'],
    codingSince:   '2009',
  })

  skills = () => ({
    tech: ['Cursor', 'MCP', 'Claude', 'Grok Bot', 'Fal.ai'],
    dev: [
      'Ts', 'Js', 'NextJs', 'NestJs', 'NodeJs', 'Html5', 'Css3', 'MySql', 'Postgres', 'Remotion',
      'React', 'Redux', 'Mastra', 'MongoDb', 'Tailwind', 'Jest', 'Cypress', 'Puppeteer', 'Git', 
    ],
    infra: ['AWS', 'Docker'],
    soft: ['Problem solving', 'Code review', 'Teaching', 'UX'],
  })

  relevantExperiences = () => ({
    'Arcads.ai': {
      role:  'Founding Engineer',
      for:   '2 years',
      stack: 'NextJs, NestJs, NodeJs, TypeScript, Postgres, React, Redux Toolkit, Tailwind, Jest, Mastra',
      about: `
        Marketing Ai video generation platform. 
        First founding engineer of the company. Built most of the core features of the platform.
        Ai video generation, Ai video editing, custom Ai agent for marketing.
      `,
    },
    'Way.co': {
      role:  'Full-Stack Software Engineer',
      for:   '1 year',
      stack: 'NextJs, NodeJs, NestJs, TypeScript, Postgres, React, Redux Toolkit, Jest',
      about: `
        An US startup with a saas project to help hotels sell experiences to their guests.
        Owned the frontend architecture and development, until we got all fired to build a new team in the US.
      `,
    },
    'Drawith.Me': {
      role:  'Startup Co-founder',
      for:   '1.5 years',
      stack: 'VanillaJs, NodeJs, Socket.io, IndexedDb, AWS, WebRTC, Canvas2D',
      about: `
        My startup experience - A figma for hand drawing on iPads.
        I builded the whole platform myself, focused on real-time performances.
        We got millions of views on TikTok, but no revenue.
      `,
    },
    'Pitchy.fr': {
      role:  'Front-End Team Lead',
      for:   '4.5 years',
      stack: 'React, Redux, NodeJs, IndexedDb, FFMpeg, Storybook, AWS',
      about: `
        Saas platform to do video editing online, before remotion was a thing.
        When I joined we were 15 employees. Out of the 3 developers, I was the only front-end dev.
        4 years later we were 14 developers among 60 emploees, and I was the front-end team lead.
      `,
    },
    'MaxMara Fashion Group - R&D': {
      role:  'Mobile Web Developer and device manager',
      for:   '1 year',
      stack: 'Js, Html5, Css3, Vodafone MDM Manager, Sencha Touch',
      about: `
        MaxMara is a very large Italian fashion company, and I've worked in the R&D team, back in 2012.
        My project consisted in putting an iPad in every Italian store to show our catalog to clients.
        I built the catalog web app, configured all devices (50+),
        and trained the shop managers to use an iPad and our new app.
      `,
    },
    'Zen Sistemi': {
      role:  'Software Developer / DB manager',
      for:   '2 years',
      stack: 'Visual Basic, Microsoft Access, SqlServer, PHP, Html, Css',
      about: `
        The main project was a CRM built internally, based on Microsoft Access.
        A lot of db management, sql queries, and customer service.
      `,
    },
  })
}
