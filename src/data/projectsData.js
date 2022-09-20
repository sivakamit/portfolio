import seven from '../assets/svg/projects/seven.svg'
import road from '../assets/svg/projects/road.svg'
import twelve from '../assets/svg/projects/twelve.svg'
import stock from '../assets/svg/projects/stock.svg'
import amazon from '../assets/svg/projects/amazon.svg'
import dna from '../assets/png/flame-creating-dna.png'
import zozzle from '../assets/png/sammy-line-11.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'Road Lane Detection',
        projectDesc: 'The primary objective of this project is to perform camera based lane detection',
        tags: ['Machine Learning', 'CV'],
        code: 'https://github.com/sivakamit/Road_lane_detection',
        image: road
    },
    {
        id: 2,
        projectName: 'Dinosaur game with Genetic Algorithm',
        projectDesc: ' Main goal of this project is to simulate the game and reach the high score. Genetic algorithm is used for optimization',
        tags: ['Python', 'Genetic algorithm'],
        code: 'https://github.com/sivakamit/Chrome-dinosaur-game-with-Genetic-algorithm',
        image: twelve
    },
    {
        id: 3,
        projectName: 'Stock Prediction of Amazon',
        projectDesc: 'Stock Prediction of Amazon using Recurrent Neural Network',
        tags: ['Machine Learning', 'RNN'],
        code: 'https://github.com/sivakamit/Stock_prediction',
        image: stock
    },
    {
        id: 4,
        projectName: 'Implementation of Zozzle',
        projectDesc: 'The machine learning model is created to classify the data. The model predicts the malicious and benign data',
        tags: ['Malware Detector', 'R'],
        code: 'https://github.com/sivakamit/Implementation_of_Zozzle',
        image: zozzle
    },
    {
        id: 5,
        projectName: 'Netflix Analysis and Recommendation system',
        projectDesc: 'Data analysis and visualization,recommendation engine',
        tags: ['Python'],
        code: 'https://github.com/sivakamit/Netflix_Analysis_and_Recommendation_system',
        image: seven
    },
    {
        id: 6,
        projectName: 'Differential Expression of Fruit Flies',
        projectDesc: 'The main goal is to analyze the differentially expressed genes in female fruit flies and the link between those values and their eye sizes',
        tags: ['R', 'RNS-Seq'],
        code: 'https://github.com/sivakamit/Differential_Expression_of_Fruit_Flies',
        image: dna
    },
    {
        id: 7,
        projectName: 'Amazon Clone',
        projectDesc: 'Clone of the Amazon website',
        tags: ['React', 'Redux', 'Firebase'],
        code: 'https://github.com/sivakamit/Amazon_clone',
        image: amazon
    },
]
