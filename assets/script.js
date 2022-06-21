// array of quiz questions
var quizQuestions = [
	{
		question: "Test Question 1",
		answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
		correctAnswer: "Answer 1",
	},
	{
		question: "Test Question 2",
		answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
		correctAnswer: "Answer 2",
	},
	{
		question: "Test Question 3",
		answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
		correctAnswer: "Answer 3",
	},
];

var score = 0;
var currentQuestion = 0;
var timeLeft = 0;
var timer;
