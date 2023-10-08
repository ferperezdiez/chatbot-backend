const OpenAI = require('openai');
const Interviewer = require('../models/interviewer');
const { authorization } = require('../helpers/authorization');
const { sendReport } = require('./sendReport');

exports.getAnswersss = (req, res) => {
    res.send([{message: {
        content: 'hola, en que puedo ayudaarte?'
        }
    }
])
}

exports.getAnswer = async (req, res) => {
    const authorized = await authorization(req.headers.authorization);
    const apiKey = process.env.API_KEY

    if(authorization(authorized)){
        const id = req.body.token;
        const result = await Interviewer.findByPk(id);
        const {email} = result
        const { company } = result.dataValues;

        const system = `Eres un postulante (Fernando) que respondera preguntas de un entrevistador basandose en la informacion personal que recibe y brindarra la mejor respuesta posible al entrevistador.
        informacion personal: Finance Company(as client of Global Logic):  Contributed to the development and maintenance of a finance app utilizing JavaScript, React Native, Firebase, Context API, Redux, Git, Jira, and Bitbucket. Responsibilities included implementing new features, addressing bugs, and doing code reviews.
        Tech Giant(as client of Global Logic): Developed regex patterns to create robust filters for restricting unauthorized responses in a text generation AI system. At the same time training in data analysis and machine learning fundamentals.
        Human resources applicatio(internal app of Global Logic): Collaborated on an internal company application focused on human resources, aimed at streamlining the recruitment process for recruiters and simplifying data entry for employees. Utilized technologies including ReactJS, TypeScript, React Query, and Styled Components to create a dynamic and user-friendly interface for the internal HR application.
        Staffing Coordinator: Coordinate, evaluate, and implement programs that support the operational goals of the staff office. Fulfilling these functions at the Ezeiza International Airport and at the Jorge Newbery International Airport.
        Security Auditor (Montego Bay Airport): Assist in the creation and dissemination of Training/education materials. Ability to prioritize and effectively follow directions. Check the correct application of security processes.
        SOFT SKILLS:Adaptability-Creative Intuitive-Leadership-Perseverance-Team-worker. LANGUAGES: English-Spanish-Portuguese.
        TECH SKILLS:Javascript-HTML-CSS-ReactJs-Redux-React Native-SQL-Typescript-Git-Jira-Bitbucket. 
        Highly motivated and result-oriented individual with a strong work ethic. Also a dedicated team player who excels in collaborative environments demonstrates 
        a strong commitment to problem-solving, and thrives on creative and adaptable solutions. Always willing to go the extra mile to get the job done and to help others.
        Aditional information: Traveled for two years across South America, funding my journey through sales of handmade
        macramé crafts. I worked in the penitentiary system, initially transporting inmates, then as a prison guard, followed by roles in press and publicity. 
        concluded my tenure as the head of the contracts department. Additionally, I worked as a creative writer 
        in an advertising agency.
        El entrevistador pertenece a la empresa: ${company}
        `

        const question = req.body.question;
        
        if(result.dataValues.counter === 0) {
            res.send([{
                message: {
                    content: `I want to thank you for considering my application for the position in question. 
                    Unfortunately, due to time and resource constraints, I can only respond to a maximum of five 
                    questions during this interview process. I appreciate your understanding regarding this limitation. 
                    If you have any additional questions or need further information, I kindly urge you to reach out to 
                    the real Fernando, who will be happy to assist you with anything you require.

                    Thank you again for this opportunity, and I look forward to the possibility of discussing in 
                    detail how I can contribute to the team.`
                }
            }])
        };

        result.dataValues.counter = result.dataValues.counter - 1;
        const counter = await result.decrement('counter', { by: 1 });

        try{
            const openai = await new OpenAI({
                apiKey: apiKey
            });
        
            const chatCompletion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{
                            role: "system",
                            content: system
                        }, {
                            role: "user",
                            content: question
                        }],
                // max_tokens: 30
            });
            sendReport(question, chatCompletion.choices, email)
            res.send(chatCompletion.choices);
        }
        catch(err){
            console.log(err)
        }
    }

    else res.send([{message:{content: "You have tu register first"}}])
    
}