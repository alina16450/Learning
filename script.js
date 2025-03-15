// Live Clock
function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeStr;
  }
  setInterval(updateClock, 1000);
  updateClock();

  function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const greetingEl = document.querySelector('header h1');
  
    if (hours < 12) {
      greetingEl.textContent = "Good Morning!";
    } else if (hours < 18) {
      greetingEl.textContent = "Good Afternoon!";
    } else {
      greetingEl.textContent = "Good Evening!";
    }
  }
  
  // Call the function to update the greeting when the page loads
  updateGreeting();
  
  // Today's Date
  const dateEl = document.getElementById('date');
  const today = new Date();
  dateEl.textContent = today.toDateString();
  
  // To-Do List Logic
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  
  todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && todoInput.value.trim()) {
      const li = document.createElement('li');
      
      // Create a checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          todoList.removeChild(li);
        }
      });
  
      // Create a span to hold the task text
      const span = document.createElement('span');
      span.textContent = todoInput.value;
  
      // Append the checkbox and span to the list item
      li.appendChild(checkbox);
      li.appendChild(span);
  
      todoList.appendChild(li);
      todoInput.value = '';
    }
  });
  
  // Quote of the Day (Optional: can use API instead)
  const quotes = [
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "The only thing that interferes with my learning is my education.", author: "Albert Einstein" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "The only thing worse than being blind is having sight but no vision .", author
    : "Helen Keller" },
    { text: "The only thing necessary for the triumph of evil is for good people to do nothing.", author: "Edmund Burke" },

  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = `"${randomQuote.text}"`;
  document.getElementById('author').textContent = `— ${randomQuote.author}`;
  
  // Theme Toggle, ensures the theme is saved in localStorage
  const themeBtn = document.getElementById('theme-btn');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Load the saved theme state
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });
  
  