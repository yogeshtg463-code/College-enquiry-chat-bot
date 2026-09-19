const faqData = [
  {
    keywords: ["course", "courses", "program", "programs", "bca", "bba", "bcom"],
    answer: "The college offers BCA, BBA, B.Com and other undergraduate courses."
  },
  {
    keywords: ["timing", "timings", "time", "working", "hours", "open"],
    answer: "College working hours are 9:00 AM to 4:30 PM."
  },
  {
    keywords: ["admission", "admit", "apply", "application", "eligibility"],
    answer: "Students can apply for admission by submitting the required documents and completing the admission procedure."
  },
  {
    keywords: ["fee", "fees", "feestructure", "cost", "payment"],
    answer: "The fee structure depends on the course. Please contact the college office for the latest fee details."
  },
  {
    keywords: ["location", "address", "where", "located"],
    answer: "Please contact the college office for the complete address and location details."
  },
  {
    keywords: ["facility", "facilities", "library", "laboratory", "lab", "computer", "classroom"],
    answer: "The college provides library, computer laboratories, classrooms and other student facilities."
  },
  {
    keywords: ["exam", "exams", "examination", "examinations", "semester"],
    answer: "Examinations are conducted according to the academic calendar."
  },
  {
    keywords: ["contact", "phone", "email", "office"],
    answer: "You can contact the college office during working hours for enquiries."
  },
  {
    keywords: ["hello", "hi", "hey", "hii"],
    answer: "Hello! 👋 How can I help you with your college enquiry?"
  },
  {
    keywords: ["thank", "thanks"],
    answer: "You're welcome! 😊 Feel free to ask another college-related question."
  }
];

const input = document.getElementById("question");
const chatBox = document.getElementById("chatBox");
const typing = document.getElementById("typing");

input.addEventListener("keydown", event => {
  if (event.key === "Enter") sendMessage();
});

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
}

function getAnswer(question) {
  const words = normalize(question).split(/\s+/).filter(Boolean);

  let best = null;
  let bestScore = 0;

  faqData.forEach(item => {
    let score = 0;

    item.keywords.forEach(keyword => {
      const key = normalize(keyword);
      if (words.includes(key) || normalize(question).includes(key)) score++;
    });

    if (score > bestScore) {
      bestScore = score;
      best = item.answer;
    }
  });

  return best || "Sorry, I don't have information about that. Please contact the college office for more details.";
}

function addMessage(text, type) {
  const row = document.createElement("div");
  row.className = "message " + type;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = type === "bot" ? "🤖" : "👤";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;

  row.appendChild(avatar);
  row.appendChild(bubble);
  chatBox.appendChild(row);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function askQuestion(question) {
  input.value = question;
  sendMessage();
}

function sendMessage() {
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, "user");
  input.value = "";
  typing.style.display = "block";

  setTimeout(() => {
    typing.style.display = "none";
    addMessage(getAnswer(question), "bot");
  }, 450);
}

function showAbout() {
  document.getElementById("aboutModal").classList.remove("hidden");
}

function closeAbout() {
  document.getElementById("aboutModal").classList.add("hidden");
}
