[Game Live Link](https://nationalanthemsquiz.onrender.com/)

[GitHub Repository](https://github.com/users/sophiebatten123/projects/2/views/1)

## NATIONAL ANTHEMS

(Developers: Sophie Batten, Laura Mayock, Sarah Todd, Muzhda Noorzad)

![Main Image](static/images/map.png)

National Anthems is an educational and interative game that tests a players knowledge of some of the worlds most famous National Anthems.

## How to play

To play National Anthems click the 'Play Button' on the main page, be ready as after you have clicked the button you will hear the first National Anthem! 

After you have listened to the National Anthem you should select on the map which country you think it originates from, to select the answer click the country using your mouse. How did you do?

Click next to play the next National Anthem. Good Luck!

# Table of Contents:

- [Idea Brainstorming](#idea-brainstorming)
- [User Stories](#user-stories)
- [Wireframe](#wireframe)
- [Testing](#testing)
- [Credits](#credits)
- [Acknowlegements](#Acknowlegements)


## Idea Brainstorming

![Idea Brainstorming](static/images/ideas-brainstorm.png)

## User Stories

### EPIC: Game Functionality

| ID | As A |I want to be able to...|So that I can...|MoSCoW|
|----|------|-----------------------|----------------|------|
|1| Site User | View the rules of the game when clicked | See how to play the game at any stage | Mo |
|2| Site User | Click a play button which is over the top of the map | Hear the first national anthem and start the game | Mo |
|3| Site User | Click a country on the map | Answer the question as to where the national anthem comes from | Mo |
|4| Site User | Receive feedback on my answer | Know whether I got it right or wrong | Mo |
|5| Site User | Click a Next Button | Play the next round and hear the next national anthem | Mo |
|6| Site User | See a Tally of my Score | Keep track of how many questions I have got correct | Mo |
|7| Site User | Receive feedback on my game when finished | See how I did in the game overall | Mo |
|8| Site User | Restart the Game | Attempt the questions again | Mo |

### EPIC: Login and High Score Data Storage

| ID | As A |I want to be able to...|So that I can...|MoSCoW|
|----|------|-----------------------|----------------|------|
|9| Site User | Login to my account | Keep track of my high scores | S |
|10| Site User | Signup to an account | Keep track of my high scores | S |
|11| Site User | Be able to compare my high score against other users | Compete against others | Co |
|12| Site User | Logout of my account | Allow others to log in on my device | S |

### EPIC: Social Media

| ID | As A |I want to be able to...|So that I can...|MoSCoW|
|----|------|-----------------------|----------------|------|
|13| Site User | Navigate to the games social media page | Receive the latest updates to the game | S |

## Wireframe

![Game Wireframe](static/images/wireframe.png)

## Kanban

![Game kanban](static/images/kanban.png)

## Testing

We have tested the site in line with the user stories
- Game Functionality 
    - Bug found when you play the game when you select a country in the background it registers as the previous answer.   
        - possible solution to put an overlay over the map after each round so they cant be picked.
    - Bug found, after each round the correct answer from the previous round can increment the score.
        - Possible solution is to make previous selected countrys unselectable.
- Log in and Leaderboard
    - Log in functionality is working correctly, and if the user is logged in the users score is stored correctly on the leaderboard(only the top 7 values appear).
- Social Media Links
    - All social media links are working correctly and opening in a new screen.

## Testing

We tested the game accross Chrome and Firefox

Responsiveness
- This game was designed to be played on a laptop or desktop device and uses the mouse click function to play.

### Lighthouse Test
![lighthouse](static/images/lighthouse-na.png)

### Jshint 
![jshint](static/images/jshint.png)

### CSS
![CSS](static/images/css-validator.png)


## Credits

- World Map came from - https://simplemaps.com/custom/world
- Anthems came from
    - https://soundspunos.com/anthems/
    - https://nationalanthems.info/ca.htm

## Acknowledgements

Thank you to 
Sophe, Laura Muzhda and Sarah for all your hard work!!
Andrew_Hackteam for helping us when we were stuck