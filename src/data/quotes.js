const quotes = [
  // Motivation
  {
    id: 1,
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    category: "Motivation",
  },
  {
    id: 2,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Motivation",
  },
  {
    id: 3,
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    category: "Motivation",
  },
  {
    id: 4,
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
    category: "Motivation",
  },
    {
    id: 5,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivation",
    },
  {
    id: 6,
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
    category: "Motivation",
  },
  {
    id: 7,
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    category: "Motivation",
  },
  {
    id: 8,
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
    category: "Motivation",
  },
  {
    id: 9,
    text: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
    category: "Motivation",
  },
  {
    id: 10,
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
    category: "Motivation",
  },

  // Success
  {
    id: 11,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Success",
  },
  {
    id: 12,
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    category: "Success",
  },
  {
    id: 13,
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    category: "Success",
  },
  {
    id: 14,
    text: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder",
    category: "Success",
  },
  {
    id: 15,
    text: "The road to success is always under construction.",
    author: "Lily Tomlin",
    category: "Success",
  },
  {
    id: 16,
    text: "Success isn't about how much money you make. It's about the difference you make.",
    author: "Michelle Obama",
    category: "Success",
  },
  {
    id: 17,
    text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    author: "Colin Powell",
    category: "Success",
  },
  {
    id: 18,
    text: "The secret of success is consistency of purpose.",
    author: "Benjamin Disraeli",
    category: "Success",
  },
  {
    id: 19,
    text: "Small opportunities are often the beginning of great enterprises.",
    author: "Demosthenes",
    category: "Success",
  },
  {
    id: 20,
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
    category: "Success",
  },

  // Life
  {
    id: 21,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "Life",
  },
    {
    id: 22,
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
    category: "Life",
    },
  {
    id: 23,
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    category: "Life",
  },
  {
    id: 24,
    text: "Happiness depends upon ourselves.",
    author: "Aristotle",
    category: "Life",
  },
  {
    id: 25,
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
    category: "Life",
  },
  {
    id: 26,
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "Life",
  },
  {
    id: 27,
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    category: "Life",
  },
    {
    id: 28,
    text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author: "Marilyn Monroe",
    category: "Life",
    },
  {
    id: 29,
    text: "The best way to predict your future is to create it.",
    author: "Peter Drucker",
    category: "Life",
  },
  {
    id: 30,
    text: "Enjoy the little things, for one day you may look back and realize they were the big things.",
    author: "Robert Brault",
    category: "Life",
  },

  // Technology
  {
    id: 31,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "Technology",
  },
  {
    id: 32,
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    category: "Technology",
  },
  {
    id: 33,
    text: "The advance of technology is based on making it fit in so that you don't really notice it.",
    author: "Bill Gates",
    category: "Technology",
  },
  {
    id: 34,
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
    category: "Technology",
  },
  {
    id: 35,
    text: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
    category: "Technology",
  },
    {
    id: 36,
    text: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates",
    category: "Technology",
    },
  {
    id: 37,
    text: "The real problem is not whether machines think but whether men do.",
    author: "B. F. Skinner",
    category: "Technology",
  },
  {
    id: 38,
    text: "Technology like art is a soaring exercise of the human imagination.",
    author: "Daniel Bell",
    category: "Technology",
  },
  {
    id: 39,
    text: "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.",
    author: "Stewart Brand",
    category: "Technology",
  },
  {
    id: 40,
    text: "Artificial intelligence is the new electricity.",
    author: "Andrew Ng",
    category: "Technology",
  },

  // Education
  {
    id: 41,
    text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: "Malcolm X",
    category: "Education",
  },
  {
    id: 42,
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    category: "Education",
  },
  {
    id: 43,
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
    category: "Education",
  },
  {
    id: 44,
    text: "Education is not the filling of a pail, but the lighting of a fire.",
    author: "W. B. Yeats",
    category: "Education",
  },
  {
    id: 45,
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B. B. King",
    category: "Education",
  },
  {
    id: 46,
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
    category: "Education",
  },
  {
    id: 47,
    text: "Develop a passion for learning. If you do, you will never cease to grow.",
    author: "Anthony J. D'Angelo",
    category: "Education",
  },
  {
    id: 48,
    text: "The roots of education are bitter, but the fruit is sweet.",
    author: "Aristotle",
    category: "Education",
  },
  {
    id: 49,
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes",
    category: "Education",
  },
  {
    id: 50,
    text: "Knowledge is power.",
    author: "Francis Bacon",
    category: "Education",
  },
];

export default quotes;