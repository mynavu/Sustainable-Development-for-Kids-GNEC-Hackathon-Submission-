if (window.location.pathname.includes("index.html")) {
    // Code for index.html
    const galleryImages = document.querySelectorAll('.gallery-img');
    let currentIndex = 0;

    function showNextImage() {
        // Hide current image
        galleryImages[currentIndex].classList.remove('active');

        // Update index to the next image
        currentIndex = (currentIndex + 1) % galleryImages.length;

        // Show next image
        galleryImages[currentIndex].classList.add('active');
    }

    // Start by showing the first image
    galleryImages[currentIndex].classList.add('active');

    // Switch images every 5 seconds
    setInterval(showNextImage, 3000);


} else if (window.location.pathname.includes("about.html")) {
    // Code for about.html

    let currentGoalIndex = 0;
    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const goalImages = document.querySelectorAll('.goal-img');
    const text = document.querySelector("#goal-text");

    const goalArray = [{description : 'No Poverty: Eradicate poverty in all forms by ensuring everyone has access to basic resources, economic opportunities, and social protection.', link : 'https://sdgs.un.org/goals/goal1', help1 : 'Donate gently-used clothes or toys to children in need.', help2: 'Participate in or organize a food drive for local shelters.'},
     {description : 'Zero Hunger: End hunger, achieve food security, improve nutrition, and promote sustainable agriculture to ensure food availability and accessibility.', link : 'https://sdgs.un.org/goals/goal2', help1 : 'Avoid wasting food by taking only what you can eat.', help2: 'Help plant a community garden and grow fresh vegetables to share.'},
     {description : 'Good Health and Well-being: Ensure healthy lives and promote well-being for all ages, focusing on reducing disease, increasing healthcare access, and improving maternal and child health.', link : 'https://sdgs.un.org/goals/goal3', help1: 'Stay active, exercise, and eat healthy to set an example for friends.', help2: 'Encourage friends and family to avoid smoking or vaping.'},
     {description : 'Quality Education: Provide inclusive, equitable, and quality education to empower individuals, reduce inequalities, and increase opportunities.', link : 'https://sdgs.un.org/goals/goal4', help1: 'Share your books with friends or donate them to libraries.', help2: 'Volunteer to help younger kids with their schoolwork.'},
     {description : 'Gender Equality: Achieve gender equality and empower all women and girls by eliminating discrimination, violence, and unequal power dynamics.', link : 'https://sdgs.un.org/goals/goal5', help1: 'Speak up if you see someone being treated unfairly because of their gender.', help2: 'Support and celebrate everyone’s unique abilities, regardless of gender.'},
     {description : 'Clean Water and Sanitation: Ensure availability and sustainable management of water and sanitation for all, promoting clean water access and proper sanitation to prevent disease.', link : 'https://sdgs.un.org/goals/goal6', help1: 'Turn off the tap while brushing your teeth to save water.', help2: 'Help clean up local rivers or beaches with community groups.'},
     {description : 'Affordable and Clean Energy: Ensure access to affordable, reliable, and sustainable energy, promoting renewable sources to reduce reliance on fossil fuels and improve sustainability.', link : 'https://sdgs.un.org/goals/goal7', help1: 'Turn off lights when leaving a room to save energy.', help2: 'Use daylight instead of artificial lighting whenever possible.'},
     {description : 'Decent Work and Economic Growth: Promote sustained economic growth, productive employment, and decent work conditions to reduce inequalities and improve living standards.', link : 'https://sdgs.un.org/goals/goal8', help1: 'Support fair-trade products when you can.', help2: 'Learn about different jobs and professions to understand how people contribute to society.'},
     {description : 'Industry, Innovation, and Infrastructure: Build resilient infrastructure, promote sustainable industrialization, and foster innovation to boost development and improve quality of life.', link : 'https://sdgs.un.org/goals/goal9', help1: 'Get involved in STEM activities like building models or learning to code.', help2: 'Recycle electronics properly to avoid e-waste.'},
     {description : 'Reduced Inequality: Reduce inequality within and among countries by ensuring equal opportunities and combating discrimination and exclusion.', link : 'https://sdgs.un.org/goals/goal10', help1: 'Stand up for anyone being bullied or treated unfairly.', help2: 'Get to know kids from different backgrounds to learn about other cultures and experiences.'},
     {description : 'Sustainable Cities and Communities: Make cities inclusive, safe, resilient, and sustainable by promoting green spaces, infrastructure, affordable housing, and inclusive development.', link : 'https://sdgs.un.org/goals/goal11', help1: 'Use public transportation or bike whenever possible to reduce pollution.', help2: 'Take care of neighborhood parks by picking up trash or planting flowers.'},
     {description : 'Responsible Consumption and Production: Encourage sustainable consumption and production patterns to reduce waste, protect natural resources, and reduce environmental impact.', link : 'https://sdgs.un.org/goals/goal12', help1: 'Reuse items like jars, bags, and paper instead of throwing them away.', help2: 'Be mindful of not buying things you don’t need and share toys with friends.'},
     {description : 'Climate Action: Take urgent action to combat climate change and its impacts, focusing on reducing greenhouse gases, promoting resilience, and mitigating climate-related risks.', link : 'https://sdgs.un.org/goals/goal13', help1: 'Plant trees in your community or backyard to help reduce CO₂.', help2: 'Learn about climate change and tell friends and family about small changes they can make.'},
     {description : 'Life Below Water: Conserve and sustainably use the oceans, seas, and marine resources to protect ecosystems, biodiversity, and the livelihoods they support.', link : 'https://sdgs.un.org/goals/goal14', help1: 'Reduce plastic use to prevent waste from reaching oceans.', help2: 'Help with beach clean-up days to protect marine life.'},
     {description : 'Life on Land: Protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests, combat desertification, and halt biodiversity loss.', link : 'https://sdgs.un.org/goals/goal15', help1: 'Plant flowers or trees to provide habitats for insects, birds, and animals.', help2: 'Avoid using products made from endangered animal parts, like certain shells or ivory.'},
     {description : 'Peace, Justice, and Strong Institutions: Promote peaceful and inclusive societies, provide access to justice, and build accountable, effective institutions to support stability and human rights.', link : 'https://sdgs.un.org/goals/goal16', help1: 'Resolve conflicts peacefully and encourage friends to do the same.', help2: 'Learn about justice and fairness and why everyone deserves respect.'},
     {description : 'Partnerships for the Goals: Strengthen global partnerships to mobilize resources, enhance cooperation, and ensure the successful implementation of all SDGs.', link : 'https://sdgs.un.org/goals/goal17', help1: 'Talk about the SDGs with friends and classmates to raise awareness.', help2: 'Encourage adults to support companies or causes that work on these goals.'}]


    goalImages[currentGoalIndex].classList.add('active');
    text.innerHTML = `${goalArray[currentGoalIndex].description} <br><br> Ways to help: <br><br> • ${goalArray[currentGoalIndex].help1} <br> • ${goalArray[currentGoalIndex].help2} <br><br> For more information, visit <a target="_blank" class="link" href="${goalArray[currentGoalIndex].link}">here</a>.`;


    function showNextGoal() {
        goalImages[currentGoalIndex].classList.remove('active');
        currentGoalIndex = (currentGoalIndex + 1) % goalImages.length;
        goalImages[currentGoalIndex].classList.add('active');

        text.innerHTML = `${goalArray[currentGoalIndex].description} <br><br> Ways to help: <br><br> • ${goalArray[currentGoalIndex].help1} <br> • ${goalArray[currentGoalIndex].help2} <br><br> For more information, visit <a target="_blank" class="link" href="${goalArray[currentGoalIndex].link}">here</a>.`;


    }

    function showPreviousGoal() {
        goalImages[currentGoalIndex].classList.remove('active');
        currentGoalIndex = (currentGoalIndex - 1 + goalImages.length) % goalImages.length;
        goalImages[currentGoalIndex].classList.add('active');

        text.innerHTML = `${goalArray[currentGoalIndex].description} <br><br> Ways to help: <br><br> • ${goalArray[currentGoalIndex].help1} <br> • ${goalArray[currentGoalIndex].help2} <br><br> For more information, visit <a target="_blank" lass="link" href="${goalArray[currentGoalIndex].link}">here</a>.`;

    }


    button1.onclick = showNextGoal;
    button2.onclick = showPreviousGoal;


} else if (window.location.pathname.includes("games.html")) {
    var errors = 0;
    var cardList = [ '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18']
    var cardSet;
    var board = [];
    var rows = 6;
    var columns = 6;

    var card1Selected;
    var card2Selected;

    const button = document.querySelector('#button3');
    const startScreen = document.querySelector('.start-screen');

    button.onclick = function() {
        shuffleCards();
        startGame();

        // Remove the start screen and button
        startScreen.style.display = 'none';
        button.style.display = 'none';
    }

    function shuffleCards() {
        cardSet = cardList.concat(cardList); //gives two of each card
        //shuffle
        for (let i = 0; i < cardSet.length; i++) {
            let j = Math.floor(Math.random() * cardSet.length); //get random index
            //swap
            let temp = cardSet[i];
            cardSet[i] = cardSet[j];
            cardSet[j] = temp;
        }
    }

    function startGame() {
        //arrange the 6x6 board
        for (let r = 0; r < rows; r++) {
            let row = [];
            for (let c = 0; c < columns; c++) {
                let cardImg = cardSet.pop();
                row.push(cardImg); //JavaScript

                // <img id="0-0" src=1.png>, <img id="0-1">, ...

                let card = document.createElement('img');
                card.id = r.toString() + '-' + c.toString();
                card.src = cardImg + '.png';
                card.classList.add('card');
                card.addEventListener('click', selectCard);
                document.getElementById('board').append(card);
            }
            board.push(row);

        }
        setTimeout(hideCards, 2000);
    }

    function hideCards() {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                let card = document.getElementById(r.toString() + '-' + c.toString());
                card.src = 'back.png';
            }

        }

    }

    function selectCard() {
        if (this.src.includes('back')) {
            if (!card1Selected) {
                card1Selected = this;

                let coords = card1Selected.id.split('-');// "0-1" -> ["0","1"]
                let r = parseInt(coords[0]);
                let c = parseInt(coords[1]);

                card1Selected.src = board[r][c] + '.png';
            }

            else if (!card2Selected && this != card1Selected) {
                card2Selected = this;

                let coords = card2Selected.id.split('-');// "0-1" -> ["0","1"]
                let r = parseInt(coords[0]);
                let c = parseInt(coords[1]);

                card2Selected.src = board[r][c] + '.png';
                setTimeout(update, 1000);

            }

        }

    }

    function checkForCompletion() {
        // Check if any cards still have 'back.png'
        let allRevealed = true;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                let card = document.getElementById(r.toString() + '-' + c.toString());
                if (card.src.includes('back.png')) {
                    allRevealed = false;
                    break;
                }
            }
        }
        if (allRevealed) {
            document.getElementById('board').innerHTML = '';

            // Show the start button and screen again for a new game
            button.innerText = 'Play Again'
            button.style.display = 'block';
            startScreen.style.display = 'block';

            // Reset the board array for a new game
            board = [];
            errors = 0;
            document.getElementById('errors').innerText = errors;

        }
    }

    function update() {
        //if cards aren't the same, flip both back
        if (card1Selected.src != card2Selected.src) {
            card1Selected.src = 'back.png';
            card2Selected.src = 'back.png';
            errors += 1;
            document.getElementById('errors').innerText = errors;
        }
        //deselect both card
        card1Selected = null;
        card2Selected = null;

        checkForCompletion();



    }

    const item = document.querySelector('#item')
    const description = document.querySelector('#description1')
    const johnnysroom = document.querySelector('.johnnys-room')
    const itemArray = {'Plant': ['Johnny owns a plant in his room that he remembers to water every day. He cares for this plant after learning that all plants provide people with oxygen. However, 100 million hectares of healthy and productive land is degraded each year. Most of this is due to forms of habitat destruction caused by humans. It is important to teach everyone the benefits plants give to this world. (Goal 15: Life on land) ','higher'],
    'Window': ['As of 2020, 1.1 billion residents are living in slums. Johnny has witnessed slums before, but he\'s never been in the shoes of someone born there. He tries helping out by donating used goods to a local shelter whenever possible. What can more people do to help their communities? (Goal 11: Sustainable cities and communities)', 'high'],
    'Cup of water': ['Johnny can drink clean and safe water whenever he wants to; this should be a necessity for everyone. Despite this, safe drinking water, sanitization, and hygiene are still out of reach for billions. Because of this, we should all be grateful for what we already have and use our water wisely, turning it off whenever we no longer require it. (Goal 6: Clean water and sanitization)', 'higher'],
    'Piggy bank': ['Johnny\'s parents give Johnny a $7 weekly allowance every week. He saves that money in a piggy bank and buys things he likes. Many kids do not have the privilege of owning much material goods. By 2030, 575 million people will still be living in extreme poverty. Johnny and his sister, Sarah, plan to donate their used toys to kids in need. What might you do to contribute? (Goal 1: No poverty)','higher'],
    'Crutches': ['Johnny is wearing crutches due to a football injury. Some kids make fun of him at school, but he will no longer be picked on after he heals. Some people cannot help it and are discriminated against based on their race, religion, gender, or something they were born with, especially refugees from a developing country. In 2022, refugee numbers hit a record high of 34.6 million. (Goal 10: Reduced inequalities)', 'higher'],
    'Bin': ['Johnny learned about recycling in school. Hence, he is aware of the waste he leaves on the environment. Many kids in developing countries are not taught this at all. Several grow up living in places surrounded by plastic pollution and believe this is normal, not understanding this has severe environmental repercussions. Hence why high-income countries leave a larger footprint compared to low-income countries. (Goal 12: Responsible consumption and production)', 'highest'],
    'Computer': ['Johnny owns a laptop since his parents think it\'s a good idea for him to be exposed to advanced technology from a young age; this enables him to be curious and pursue any future career he wishes. Many young kids are forced into precarious work due to their family\'s economic situation. In fact, 2 billion workers are in informal jobs without social protection. (Goal 8: Decent work and economic growth)', 'higher'],
    'Books': ['Due to COVID-19, the world is falling behind in quality education, including Johnny\'s local school. However, many have it a lot worse. Many students are not literate in their first language (300 million students by 2030). It is hard to do much, but donating your books to others is a great way to help your local community! (Goal 4: Quality education)', 'higher'],
    'Sarah': ['This is Sarah. She is Johnny\'s younger sister, she is treated with the same respect as her brother, and there are no invisible ceilings for her in America. This is not the case in many countries that restricts women\'s freedom to education or to be treated as equal as their male counterparts. Since this is a political issue, the only way we can help is to treat everyone with respect, regardless of gender. (Goal 5: Gender equality)', 'higher'],
    'Soup': ['Johnny never had to worry about where his next meal comes from, but this is different for many children his age. More than 600 million people worldwide are projected to face hunger in 2030. Johnny plans on helping his local soup house to help fight this. What might you do to contribute? (Goal 2: Zero hunger)', 'high'],
    'Apple': ['Despite needing crutches due to a football injury, Johnny is a very healthy boy. On the contrary, 25 million children missed out on important routine immunizations in 2021. Johnny does not know how to help them... What do you think we can do to help this issue? (Goal 3: Good health and well-being)', 'high'],
    'Globe': ['Unlike many issues that vary from country to country, this one affects us all. The rate of sea-level rise has doubled in the last decade. We can educate ourselves on the causes and make informed decisions accordingly. For instance, reducing our ecological footprint. (Goal 13: Climate action)', 'high'],
    'Fish tank': ['Johnny loves his fish. He takes care of them dearly. Unfortunately for the majority of fishes, the ocean has varying degrees of harm, such as ocean acidification and plastic pollution. Not to mention, more than a third of global fish stocks are overfished. Thus, sustainable practices must be prioritized! What can everyday people do to mitigate this issue? (Goal 14: Life below water)', 'higher'],
    'Lamp': ['Johnny is no stranger to light. He can command light to appear whenever he wants with a switch of a button, but 675 million people still live in the dark, and 4 in 5 of them are in Sub-Saharan Africa. We should all remember to turn off the lights whenever we do not use them. Saving energy helps by reducing the amount of carbon dioxide and other harmful pollutants in the atmosphere. (Goal 7: Affordable and clean energy)', 'higher'],
    'Peace poster' : ['Johnny is someone who deeply values freedom of speech. He loves expressing social issues he cares about, such as peace restoration in war zones. But worldwide, youths are left out of many vital decision-making processes since they are underrepresented in politics. Some countries do not even allow people to protest their beliefs. (Goal 16: Peace, justice, and strong institutions)', 'higher']}

    let lastClass = ''; // Variable to store the last class name
    // "for each object containing '.item' run the following function:"
    document.querySelectorAll('.item').forEach(object => {
        object.addEventListener('click', function () {
            const name = this.getAttribute('data-name');
            const descriptionText = itemArray[name][0] || "No description";
            const newClass = itemArray[name][1] || '';

            // Update the description and item name
            description.innerText = descriptionText;
            item.innerText = name;

            // Remove the previous class if any
            if (lastClass) {
                johnnysroom.classList.remove(lastClass);
            }

            // Add the new class, if it exists, and store it as lastClass
            if (newClass) {
                johnnysroom.classList.add(newClass);
                lastClass = newClass;
            } else {
                lastClass = ''; // Reset if there's no new class to add. Basically useless since there will be no 'else' needed.
            }
        });
    });

    const questions = [
    {
    question: "How can you contribute to help the Goal 2: Zero Hunger?", answers : [
    {text:'Always eat healthy food and never any junk food', correct: false},
    {text:'Grow trees whenever possible', correct: false},
    {text:'Help out at local events that feeds the poor', correct: true},
    {text:'Read books about baking pies', correct: false}
    ]
    },
    {
    question: "What can you do to help reach Goal 6: Clean Water and Sanitation?", answers : [
    {text:'Use water wisely and avoid wasting it', correct: true},
    {text:'Leave the tap running when brushing teeth', correct: false},
    {text:'Use bottled water for everything', correct: false},
    {text:'Avoid sharing water resources with others', correct: false}
    ]
    },
    {
    question: "How can we contribute to Goal 7: Affordable and Clean Energy?", answers : [
    {text:'Use as many gadgets as possible all the time', correct: false},
    {text:'Never use energy from the sun', correct: false},
    {text:'Leave the TV on when you leave the room', correct: false},
    {text:'Turn off lights when you don’t need them', correct: true}
    ]
    },
    {
    question: "How can you help achieve Goal 12: Responsible Consumption and Production?", answers : [
    {text:'Buy lots of things you don’t need', correct: false},
    {text:'Throw away items without thinking', correct: false},
    {text:'Recycle and reuse items as much as you can', correct: true},
    {text:'Always buy new items instead of reusing', correct: false}
    ]
    },
    {
    question: "Which action helps Goal 11: Sustainable Cities and Communities?", answers : [
    {text:'Leave garbage around because others will clean it', correct: false},
    {text:'Pick up trash in your community', correct: true},
    {text:'Only recycle if you feel like it', correct: false},
    {text:'Use lots of plastic every day', correct: false}
    ]
    },
    {
    question: "What can kids do to help Goal 13: Climate Action?", answers : [
    {text:'Learn about climate change and share with others', correct: true},
    {text:'Use plastic bags instead of reusable ones', correct: false},
    {text:'Forget about climate change because it’s only for adults', correct: false},
    {text:'Always drive instead of walking or biking', correct: false}
    ]
    },
    {
    question: "What’s a good way to support Goal 14: Life Below Water?", answers : [
    {text:'Take shells and fish from the sea as souvenirs', correct: false},
    {text:'Pollute rivers because it doesn’t harm anything', correct: false},
    {text:'Ignore ocean clean-up events', correct: false},
    {text:'Avoid throwing trash into rivers or oceans', correct: true}
    ]
    },
    {
    question: "Which action helps protect Goal 15: Life on Land?", answers : [
    {text:'Pick flowers from endangered plants', correct: false},
    {text:'Plant trees and protect natural habitats', correct: true},
    {text:'Catch wild animals as pets', correct: false},
    {text:'Cut down trees without replanting', correct: false}
    ]
    },
    {
    question: "How can you contribute to Goal 16: Peace, Justice, and Strong Institutions?", answers : [
    {text:'Make decisions without caring about others', correct: false},
    {text:'Only think about yourself', correct: false},
    {text:'Ignore rules because they don’t matter', correct: false},
    {text:'Treat others fairly and kindly', correct: true}
    ]
    },
    {
    question: "How can you support Goal 3: Good Health and Well-being?", answers : [
    {text:'Eat only one type of food for every meal', correct: false},
    {text:'Watch TV about dinosaurs', correct: false},
    {text:'Exercise daily and encourage friends to join', correct: true},
    {text:'Stay indoors all day', correct: false}
    ]
    }
    ];
    const questionElement = document.getElementById('question');
    const answerButton = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = 'Next';
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        });

    }

    function resetState(){
        nextButton.style.display = 'none';
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);

        }

    }
    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === 'true';
        if (isCorrect) {
            selectedBtn.classList.add('correct');
            score++;
        }
        else {
            selectedBtn.classList.add('incorrect');
        }
        Array.from(answerButton.children).forEach(button => {
            if(button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }

    function showScore() {
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = 'Play Again';
        nextButton.style.display = 'block';
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length) {
            showQuestion();
        }
        else {
            showScore();
        }
    }

    nextButton.addEventListener('click',()=>{
        if(currentQuestionIndex < questions.length) {
            handleNextButton();
        }
        else{
            startQuiz();
        }
    })

    startQuiz();
}



