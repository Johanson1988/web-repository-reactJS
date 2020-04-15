const initState = {
    works: [
    {
        projectName: 'ironball',
        projectLogo:  '/images/ironball-logo.png',
        imgSrc: '/images/ironball.png',
        imgAlt: 'Ball breaking bricks',
        frontEndLink: 'https://github.com/Johanson1988/project-iron-ball',
        backEndLink: 'https://github.com/Johanson1988/ironball-api',
        trelloLink: 'https://trello.com/b/eZAaYGcE/ironball',
        slidesLink: 'https://docs.google.com/presentation/d/18911Of3tFYTkDpowqfjsfx49ftPjA5s2Uun3vg8jmAc/edit#slide=id.g6aeb787dc0_1_69',
        deployLink: 'https://johanson1988.github.io/project-iron-ball/',
        projectDescription: 'This project is a clone of the Arkanoid game. Arkanoid (アルカノイド Arukanoido) is an arcade game released by Taito in 1986. The player controls the "Vaus", a space vessel that acts as the game\'s "paddle" which prevents a ball from falling from the playing field, attempting to bounce it against a number of bricks. The ball striking a brick causes the brick to disappear. When all the bricks are gone, the player goes to the next level, where another pattern of bricks appears',
        technologies: ['Canvas', 'JavaScript ES6'],
        implementedFeatures: ['sounds', 'keyboard control', 'infinite levels', 'pause', 'local scoreboard', 'autopilot'],
        upcomingFeatures: ['mouse control', 'touch support', 'global scoreboard', 'responsive design', 'android version', 'iphone version', 'use Machine Learning to generate new levels', 'use machine learning to improve autopilot mode0']
    },
    {
        projectName: 'epicplanner',
        projectLogo:  '/images/epicplanner-logo.png',
        imgSrc: '/images/epicplanner.png',
        imgAlt: 'Map showing an epic plan',
        frontEndLink: 'https://github.com/Johanson1988/epic-planner',
        backEndLink: '',
        trelloLink: 'https://trello.com/b/pawm0XYn/epic-planner',
        slidesLink: null,
        deployLink: 'https://epic-planner.herokuapp.com/',
        projectDescription: 'Epic planner is a urban micro-planner that allows you to create a legendary route in Barcelona on a specific day and area. Its features include an array of leisure options located in the desired area: concerts, cultural events, cafes and bars, with links to MeetUp event pages for more information.',
        technologies: ['NodeJs', 'HBS', 'Google Maps API', 'Google Calendar API', 'MongoDB'],
        implementedFeatures: ['Create your own dayplan', 'get events from Google Calendar', 'User creation', 'View your plan in Google Maps', 'check bars and restaurants in your day plan area'],
        upcomingFeatures: ['This project was part of a course, now is being redesigned from scratch using react']
    },
    {
        projectName: 'epicplanner',
        projectLogo:  '/images/epicplanner-logo.png',
        imgSrc: '/images/epicplanner.png',
        imgAlt: 'Map showing an epic plan',
        frontEndLink: 'https://github.com/Johanson1988/epic-planner',
        backEndLink: '',
        trelloLink: 'https://trello.com/b/pawm0XYn/epic-planner',
        slidesLink: null,
        deployLink: 'https://epic-planner.herokuapp.com/',
        projectDescription: 'Epic planner is a urban micro-planner that allows you to create a legendary route in Barcelona on a specific day and area. Its features include an array of leisure options located in the desired area: concerts, cultural events, cafes and bars, with links to MeetUp event pages for more information.',
        technologies: ['NodeJs', 'HBS', 'Google Maps API', 'Google Calendar API', 'MongoDB'],
        implementedFeatures: ['Create your own dayplan', 'get events from Google Calendar', 'User creation', 'View your plan in Google Maps', 'check bars and restaurants in your day plan area'],
        upcomingFeatures: ['This project was part of a course, now is being redesigned from scratch using react']
    }
      //  {projectName: 'epic-planner', imgSrc: 'images/epic-planner.png'},
        //{projectName: 'project-03', imgSrc: 'images/portfolio-03.jpg'},
      //  {projectName: 'project-04', imgSrc: 'images/portfolio-04.jpg'},
       // {projectName: 'project-05', imgSrc: 'images/portfolio-05.jpg'},
      //  {projectName: 'project-06', imgSrc: 'images/portfolio-06.jpg'},
      //  {projectName: 'project-07', imgSrc: 'images/portfolio-07.jpg'},
       // {projectName: 'project-08', imgSrc: 'images/portfolio-08.jpg'},
        //{projectName: 'project-09', imgSrc: 'images/portfolio-09.jpg'},
      //  {projectName: 'project-10', imgSrc: 'images/portfolio-10.jpg'}
    ],
    technologies: [
        {link: null, title:"NodeJs", iconClass:"fab fa-node-js"},
        {link: null, title:"JavaScript ES6", iconClass:"fab fa-js-square"},
        {link: null, title:"MongoDB", iconClass:"iconify", iconData:"cib:mongodb"},
        {link: null, title:"HBS", iconClass:"iconify", iconData:"logos:handlebars"},
        {link: null, title:"React", iconClass:"fab fa-react"},
        {link: null, title:"SocketIO", iconClass:"iconify", iconData:"cib:socket-io"},
        {link: null, title:"QRCode", iconClass:"iconify", iconData:"ion:qr-code-sharp"},
        {link: null, title:"Google Maps API", iconClass:"iconify", iconData:"mdi:google-maps"},
        {link: null, title:"Google Calendar API", iconClass:"iconify", iconData:"logos:google-calendar"},
        {link: null, title:"Canvas", iconClass:"iconify", iconData:"whh:canvas"},
    ],
    introDetails: {
        title:'Johann Moreno',
        subtitle:'fullstack dev',
        imgSrc: "./images/profile.jpg",
        imgAlt: "My profile picture"
    }
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;