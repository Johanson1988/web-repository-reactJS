const initState = {
    works: [{projectName: 'ironball', imgSrc: 'images/ironball.png',
    githubLink: 'https://github.com/Johanson1988/project-iron-ball',
    trelloLink:'https://trello.com/b/eZAaYGcE/ironball',
    slidesLink:'https://docs.google.com/presentation/d/18911Of3tFYTkDpowqfjsfx49ftPjA5s2Uun3vg8jmAc/edit#slide=id.g6aeb787dc0_1_69',
    deployLink:'https://johanson1988.github.io/project-iron-ball/',
    projectDescription:'This project is a clone of the Arkanoid game. Arkanoid (アルカノイド Arukanoido) is an arcade game released by Taito in 1986. The player controls the "Vaus", a space vessel that acts as the game\'s "paddle" which prevents a ball from falling from the playing field, attempting to bounce it against a number of bricks. The ball striking a brick causes the brick to disappear. When all the bricks are gone, the player goes to the next level, where another pattern of bricks appears',
    technologies:['canvas', 'es6', 'git']},
    {projectName: 'epic-planner', imgSrc: 'images/epic-planner.png'},
    {projectName: 'project-03', imgSrc: 'images/portfolio-03.jpg'},
    {projectName: 'project-04', imgSrc: 'images/portfolio-04.jpg'},
    {projectName: 'project-05', imgSrc: 'images/portfolio-05.jpg'},
    {projectName: 'project-06', imgSrc: 'images/portfolio-06.jpg'},
    {projectName: 'project-07', imgSrc: 'images/portfolio-07.jpg'},
    {projectName: 'project-08', imgSrc: 'images/portfolio-08.jpg'},
    {projectName: 'project-09', imgSrc: 'images/portfolio-09.jpg'},
    {projectName: 'project-10', imgSrc: 'images/portfolio-10.jpg'}]
}

const rootReducer = (state= initState, action) => {
    return state;
}

export default rootReducer;