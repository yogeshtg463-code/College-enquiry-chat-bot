/*
 * College Enquiry Assistant
 * The National College, Jayanagar — student project knowledge base.
 * Keep college-specific claims aligned with verified notices from the college.
 */
const faqData = [
  {
    id: "bca-eligibility",
    keywords: ["bca eligibility", "eligibility for bca", "bca qualification", "who can join bca", "bca requirements", "bca after 12th", "bca minimum marks", "subjects required for bca"],
    answer: "BCA eligibility: Applicants generally need to have passed PUC/Class 12 or an equivalent examination from a recognised board. Subject requirements, minimum marks and any other conditions are determined by the applicable college and university rules. The current official eligibility criteria for The National College, Jayanagar have not been verified in this chatbot. Please confirm them with the college admission office before applying."
  },
  {
    id: "bca-duration",
    keywords: ["bca duration", "how many years is bca", "bca course duration", "years for bca", "how long is bca", "bca semesters", "number of semesters in bca"],
    answer: "BCA duration: The duration depends on the university curriculum and the programme structure in force for your admission year. Many BCA programmes have a three-year structure, while some universities provide a four-year honours or honours-with-research pathway. I do not have a verified current course structure for this college, so please confirm the applicable duration and semester structure with the college office or official university syllabus."
  },
  {
    id: "bca-subjects",
    keywords: ["bca subjects", "subjects in bca", "what do we study in bca", "bca syllabus", "bca curriculum", "bca topics", "what is taught in bca", "bca first year subjects", "bca practicals"],
    answer: "BCA subjects: Common learning areas in Bachelor of Computer Applications programmes include programming fundamentals, problem-solving, data structures, database management systems, web development, computer networks, operating systems and software engineering. Practical lab work and projects may also form part of the programme. This is a general subject overview, not the confirmed semester-wise syllabus for The National College, Jayanagar. For exact paper names, credits and semester details, consult the applicable university syllabus."
  },
  {
    id: "bca-programming",
    keywords: ["bca programming", "programming languages in bca", "coding in bca", "does bca have coding", "learn coding in bca", "bca languages"],
    answer: "Programming in BCA: BCA programmes generally introduce students to programming concepts, logical problem-solving, algorithms and software development. Depending on the university syllabus, students may work with languages and tools such as C, C++, Java, Python, JavaScript or SQL. The exact languages taught at this college should be confirmed from its current syllabus. Beginners can prepare by practising basic logic, variables, conditions, loops and functions."
  },
  {
    id: "bca-careers",
    keywords: ["bca career", "bca careers", "jobs after bca", "bca job opportunities", "career after bca", "what can i do after bca", "bca scope", "jobs for bca graduates", "bca salary jobs"],
    answer: "Career options after BCA: Depending on your technical skills, projects, experience and employer requirements, possible entry-level paths include junior software developer, web developer, application support associate, software testing/QA trainee, IT support technician, technical support executive and junior database support roles. Building a portfolio, completing practical projects and improving communication skills can help. Further study, including MCA or other relevant postgraduate programmes, is another option. Job titles and outcomes are not guaranteed by the degree alone."
  },
  {
    id: "bca-admission",
    keywords: ["bca admission", "how to join bca", "how to apply for bca", "bca application", "bca admission process", "admission for bca", "documents for bca admission", "bca application dates"],
    answer: "BCA admission: 1) Confirm the current eligibility criteria. 2) Obtain the application instructions from the college admission office. 3) Prepare the documents requested by the college, which may include qualifying-examination marks cards, a transfer certificate, identity proof and photographs. 4) Submit the application and follow the official instructions about verification, fees and deadlines. This is general guidance only; the current application dates, document list and selection process for The National College, Jayanagar must be confirmed with the college."
  },
  {
    id: "bca-overview",
    keywords: ["bca", "bachelor of computer applications", "bachelor computer applications", "tell me about bca", "explain bca", "bca course", "about bca", "what is bca"],
    answer: "BCA — Bachelor of Computer Applications: BCA is an undergraduate programme focused on computing, software and information technology. Common learning areas include programming, problem-solving, databases, web development, computer networks and software engineering. The programme duration and exact syllabus depend on the university curriculum applicable to the student. Eligibility commonly involves passing PUC/Class 12 or an equivalent qualification, but subject and marks requirements vary. Potential career paths include software or web development, software testing and IT support, depending on the student's skills and experience. For the official duration, eligibility and current syllabus followed by The National College, Jayanagar, please consult the college office or applicable university documents."
  },
  // BBA — general academic guidance; verify college-specific offerings and rules.
  {
    id: "bba-eligibility",
    keywords: ["bba eligibility", "eligibility for bba", "bba qualification", "who can join bba", "bba requirements", "bba after 12th", "bba minimum marks"],
    answer: "BBA eligibility: Applicants commonly need to pass PUC/Class 12 or an equivalent examination from a recognised board. The required subjects, minimum marks and any selection process depend on the applicable university and college rules. The current official criteria for The National College, Jayanagar have not been verified here; confirm them with the admission office before applying."
  },
  {
    id: "bba-duration",
    keywords: ["bba duration", "how many years is bba", "bba course duration", "years for bba", "how long is bba", "bba semesters"],
    answer: "BBA duration: Many undergraduate BBA programmes use a three-year structure, while some universities offer a four-year honours or honours-with-research pathway under their current regulations. The exact duration and semester pattern for your admission year must be confirmed from the applicable university curriculum and the college."
  },
  {
    id: "bba-subjects",
    keywords: ["bba subjects", "subjects in bba", "what do we study in bba", "bba syllabus", "bba curriculum", "bba topics", "bba first year subjects"],
    answer: "BBA subjects: Common areas include principles of management, business communication, financial and management accounting, marketing, human resource management, business economics, business law, organisational behaviour, entrepreneurship, operations and business analytics. The actual subjects and semester order vary by university; this is a general overview, not the verified syllabus of The National College, Jayanagar."
  },
  {
    id: "bba-careers",
    keywords: ["bba career", "bba careers", "jobs after bba", "bba job opportunities", "career after bba", "what can i do after bba", "bba scope"],
    answer: "Career options after BBA: Depending on skills and experience, graduates may pursue entry-level roles in sales, marketing, customer relations, human resources, operations, business development, administration or recruitment. Some students pursue an MBA or other postgraduate study. Internships, communication skills, spreadsheet/data skills and practical projects can strengthen applications; employment is not guaranteed by the degree alone."
  },
  {
    id: "bba-admission",
    keywords: ["bba admission", "how to join bba", "how to apply for bba", "bba application", "bba admission process", "documents for bba admission"],
    answer: "BBA admission: First confirm eligibility and whether any selection procedure applies. Then obtain the current application form and instructions from the college, prepare the documents requested (which may include PUC/Class 12 marks cards, transfer certificate, identity proof and photographs), submit them by the stated deadline, and follow the official verification and fee-payment process. This is general guidance; dates, documents and selection rules must be confirmed with the college."
  },
  {
    id: "bba-overview",
    keywords: ["bba", "bachelor of business administration", "tell me about bba", "explain bba", "bba course", "about bba", "what is bba"],
    answer: "BBA — Bachelor of Business Administration: BBA is an undergraduate programme introducing students to business organisations, management, marketing, finance, human resources, operations and entrepreneurship. Students often develop communication, teamwork, problem-solving and decision-making skills through assignments, presentations and projects. Duration, syllabus and eligibility depend on the university rules applicable to the admission year. This is a general course overview; current availability and official details at The National College, Jayanagar must be confirmed with the college."
  },
  // B.Com — general academic guidance; verify college-specific offerings and rules.
  {
    id: "bcom-eligibility",
    keywords: ["bcom eligibility", "b com eligibility", "eligibility for bcom", "eligibility for b com", "bachelor of commerce eligibility", "bcom qualification", "bcom after 12th", "bcom minimum marks"],
    answer: "B.Com eligibility: Applicants commonly need to pass PUC/Class 12 or an equivalent examination. Some universities or course pathways may specify preferred or required subjects, marks or other conditions. The current official eligibility rules for The National College, Jayanagar have not been verified in this chatbot. Confirm the applicable criteria with the college admission office before applying."
  },
  {
    id: "bcom-duration",
    keywords: ["bcom duration", "b com duration", "how many years is bcom", "how many years is b com", "bcom course duration", "bcom semesters"],
    answer: "B.Com duration: Many Bachelor of Commerce programmes follow a three-year structure, while some universities provide a four-year honours or honours-with-research pathway. The exact duration, credits and semester structure depend on the university curriculum and admission year. Please check the current official course structure with the college or university."
  },
  {
    id: "bcom-subjects",
    keywords: ["bcom subjects", "b com subjects", "subjects in bcom", "subjects in b com", "what do we study in bcom", "bcom syllabus", "bcom curriculum", "bcom first year subjects"],
    answer: "B.Com subjects: Common learning areas include financial accounting, business economics, business law, corporate accounting, taxation, cost and management accounting, auditing, banking, finance, business statistics and business communication. The combination of papers and semester order varies by university and by B.Com specialisation. This is a general overview, not a verified semester-wise syllabus for The National College, Jayanagar."
  },
  {
    id: "bcom-careers",
    keywords: ["bcom career", "bcom careers", "jobs after bcom", "bcom job opportunities", "career after bcom", "what can i do after bcom", "bcom scope"],
    answer: "Career options after B.Com: Depending on skills and additional qualifications, graduates may apply for entry-level work in accounts assistance, finance operations, banking support, taxation support, audit assistance, payroll, insurance, customer operations or administration. Further pathways may include M.Com, MBA, professional accounting/tax qualifications or finance certifications. Requirements vary by role; practical accounting software, spreadsheet and communication skills can be useful."
  },
  {
    id: "bcom-admission",
    keywords: ["bcom admission", "b com admission", "how to join bcom", "how to apply for bcom", "bcom application", "bcom admission process", "documents for bcom admission"],
    answer: "B.Com admission: Confirm current eligibility and any subject requirements, obtain the college's current application instructions, prepare the documents requested (which may include PUC/Class 12 marks cards, transfer certificate, identity proof and photographs), and submit the application within the stated period. Follow the official document-verification and fee-payment process. Exact dates, documents and rules for The National College, Jayanagar must be confirmed with the college."
  },
  {
    id: "bcom-overview",
    keywords: ["bcom", "b com", "bachelor of commerce", "tell me about bcom", "explain bcom", "bcom course", "about bcom", "what is bcom"],
    answer: "B.Com — Bachelor of Commerce: B.Com is an undergraduate programme focused on commerce, accounting, finance and business. Depending on the curriculum, students may study accounting, taxation, economics, business law, auditing, banking and financial management. It can provide a foundation for commerce-related employment or further professional and postgraduate study. Duration, subjects and eligibility depend on the applicable university rules. Confirm whether this course is currently offered and check its official details with The National College, Jayanagar."
  },
  // B.Sc — science specialisations vary; do not imply every subject combination is offered.
  {
    id: "bsc-eligibility",
    keywords: ["bsc eligibility", "b sc eligibility", "eligibility for bsc", "eligibility for b sc", "bachelor of science eligibility", "bsc qualification", "bsc after 12th", "bsc minimum marks"],
    answer: "B.Sc eligibility: Applicants commonly need to pass PUC/Class 12 or an equivalent examination with the relevant science subjects. The required subject combination and minimum marks depend on the chosen B.Sc specialisation and the applicable university rules. Confirm the exact criteria and whether your preferred specialisation is offered by The National College, Jayanagar with the college admission office."
  },
  {
    id: "bsc-duration",
    keywords: ["bsc duration", "b sc duration", "how many years is bsc", "how many years is b sc", "bsc course duration", "bsc semesters"],
    answer: "B.Sc duration: Many Bachelor of Science programmes follow a three-year structure, while some universities offer a four-year honours or honours-with-research pathway. Duration and semester requirements depend on the university regulations and the chosen specialisation. Please verify the current programme structure for your admission year with the college or university."
  },
  {
    id: "bsc-subjects",
    keywords: ["bsc subjects", "b sc subjects", "subjects in bsc", "subjects in b sc", "bsc syllabus", "bsc curriculum", "bsc specialisations", "bsc combinations", "what do we study in bsc"],
    answer: "B.Sc subjects: Bachelor of Science is a broad degree category, not one fixed syllabus. Depending on the specialisation and the subjects studied before admission, programmes may cover areas such as Physics, Chemistry, Mathematics, Biology, Computer Science, Statistics, Botany or Zoology. Practical laboratory work may be an important component in laboratory-based subjects. These are examples of common science disciplines, not a claim that every combination is available at The National College, Jayanagar. Ask the college for its current list of B.Sc combinations and semester-wise syllabus."
  },
  {
    id: "bsc-careers",
    keywords: ["bsc career", "bsc careers", "jobs after bsc", "bsc job opportunities", "career after bsc", "what can i do after bsc", "bsc scope"],
    answer: "Career options after B.Sc: Opportunities depend strongly on the chosen subject, practical skills and any further training. Possible directions include laboratory or research assistance, data-related entry-level roles, technical support, quality-control support, science communication, education pathways or subject-specific industry roles. Some careers require postgraduate study, professional qualifications or other eligibility. Check requirements for each role and consider internships, projects and relevant practical experience."
  },
  {
    id: "bsc-admission",
    keywords: ["bsc admission", "b sc admission", "how to join bsc", "how to apply for bsc", "bsc application", "bsc admission process", "documents for bsc admission"],
    answer: "B.Sc admission: Identify the available specialisation first, then confirm the required PUC/Class 12 subjects and marks. Obtain the current application instructions from the college, prepare the requested documents, submit the application within the stated period, and follow the official verification and fee-payment process. Available combinations, dates and selection rules for The National College, Jayanagar must be confirmed directly with the college."
  },
  {
    id: "bsc-overview",
    keywords: ["bsc", "b sc", "bachelor of science", "tell me about bsc", "explain bsc", "bsc course", "about bsc", "what is bsc"],
    answer: "B.Sc — Bachelor of Science: B.Sc is an undergraduate degree category in scientific and technical disciplines. The exact subjects depend on the selected specialisation or subject combination, and science programmes may include lectures, practical sessions, laboratory work and projects. Eligibility commonly depends on the science subjects studied in PUC/Class 12. Duration, subject combinations and admission rules vary by university. This is general guidance; confirm which B.Sc programmes, if any, are currently offered by The National College, Jayanagar."
  },
  // BA — arts and humanities subject combinations vary by institution.
  {
    id: "ba-eligibility",
    keywords: ["ba eligibility", "eligibility for ba", "bachelor of arts eligibility", "ba qualification", "who can join ba", "ba after 12th", "ba minimum marks"],
    answer: "BA eligibility: Applicants commonly need to pass PUC/Class 12 or an equivalent examination from a recognised board. Subject prerequisites, minimum marks and other conditions depend on the university, chosen combination and current admission rules. Confirm the official eligibility criteria for The National College, Jayanagar with the admission office before applying."
  },
  {
    id: "ba-duration",
    keywords: ["ba duration", "how many years is ba", "ba course duration", "years for ba", "how long is ba", "ba semesters"],
    answer: "BA duration: Many Bachelor of Arts programmes follow a three-year structure, while some universities offer a four-year honours or honours-with-research pathway. The exact duration, credit requirements and semester structure depend on the current university regulations and admission year. Please confirm the applicable structure with the college or university."
  },
  {
    id: "ba-subjects",
    keywords: ["ba subjects", "subjects in ba", "what do we study in ba", "ba syllabus", "ba curriculum", "ba combinations", "ba specialisations", "ba first year subjects"],
    answer: "BA subjects: Bachelor of Arts programmes may include combinations from disciplines such as History, Political Science, Economics, Sociology, Psychology, English, Kannada and other languages or humanities subjects, depending on the institution. The subjects available and how they can be combined vary. This is a general overview, not the verified list of BA combinations at The National College, Jayanagar; request the current prospectus for the available combinations and semester-wise syllabus."
  },
  {
    id: "ba-careers",
    keywords: ["ba career", "ba careers", "jobs after ba", "ba job opportunities", "career after ba", "what can i do after ba", "ba scope"],
    answer: "Career options after BA: Depending on the subjects studied, experience and additional skills, graduates may explore roles in administration, customer relations, content writing, communications, research assistance, social-sector organisations, media support or other entry-level positions. Further study may include an MA, MSW, journalism, public policy or other relevant programmes. Teaching, government-service and regulated careers may require separate examinations or qualifications. Career outcomes are not guaranteed by the degree alone."
  },
  {
    id: "ba-admission",
    keywords: ["ba admission", "how to join ba", "how to apply for ba", "ba application", "ba admission process", "documents for ba admission"],
    answer: "BA admission: Confirm the available subject combinations and course-specific eligibility, obtain the current application instructions from the college, prepare the documents requested (which may include PUC/Class 12 marks cards, transfer certificate, identity proof and photographs), and submit the application by the official deadline. Follow the college's instructions for verification and fees. The current combinations, documents and dates for The National College, Jayanagar must be confirmed with the college."
  },
  {
    id: "ba-overview",
    keywords: ["ba", "bachelor of arts", "tell me about ba", "explain ba", "ba course", "about ba", "what is ba"],
    answer: "BA — Bachelor of Arts: BA is an undergraduate degree category covering humanities, languages and social-science disciplines. Depending on the combination, students may develop skills in reading, writing, research, critical analysis, communication and understanding social and historical issues. The subjects offered, duration and eligibility depend on the university and college. This is general guidance; confirm whether BA is currently offered at The National College, Jayanagar and ask for its official subject combinations and syllabus."
  },
  {
    id: "courses-general",
    keywords: ["course", "courses", "program", "programs", "what can i study", "available courses", "degree courses", "undergraduate courses"],
    answer: "Course information: This chatbot can explain BCA (Bachelor of Computer Applications), BBA (Bachelor of Business Administration), B.Com (Bachelor of Commerce), B.Sc (Bachelor of Science) and BA (Bachelor of Arts) as general undergraduate course categories. This does not confirm that all five are currently offered at The National College, Jayanagar. Please check the current college prospectus or admission office for the official course list. You can ask about any course's overview, subjects, duration, eligibility, admission guidance or career options."
  },
  {
    id: "admission-general",
    keywords: ["admission", "admit", "apply", "application", "eligibility", "how to get admission", "admission process", "documents required"],
    answer: "Admission enquiries: Please confirm the current course-wise eligibility criteria, application procedure, documents, important dates and fee payment instructions with the college admission office. These requirements may change by course and academic year. This chatbot does not currently contain a verified official admission notice."
  },
  {
    id: "fees",
    keywords: ["fee", "fees", "fee structure", "cost", "payment", "tuition", "how much is the fee", "course fees"],
    answer: "Fee information: The current official fee schedule has not been added to this chatbot. Fees may depend on the course, academic year and applicable college or university rules. Please request the latest written fee structure from the college office and confirm any additional charges, payment deadlines and refund rules before paying."
  },
  {
    id: "timings",
    keywords: ["timing", "timings", "time", "working hours", "college hours", "when does college open", "working days", "office hours"],
    answer: "College timings: An earlier sample FAQ listed 9:00 AM to 4:30 PM, but those hours have not been verified as current official timings. Please confirm the current class timetable, working days and office hours directly with the college."
  },
  {
    id: "facilities",
    keywords: ["facility", "facilities", "library", "laboratory", "lab", "computer lab", "classroom", "campus facilities", "sports", "canteen"],
    answer: "Facilities: The existing sample FAQ mentions a library, computer laboratories and classrooms. I do not yet have verified current details about all campus facilities, accessibility, sports, canteen or opening hours. Please check the college's official information or contact the office for confirmed details."
  },
  {
    id: "exams",
    keywords: ["exam", "exams", "examination", "examinations", "semester", "exam timetable", "results", "internal assessment"],
    answer: "Examinations and results: Examination schedules, internal assessments, eligibility to appear, results and revaluation procedures follow the applicable university and college rules. Please refer to current official notices and the relevant university portal for dates and regulations. This chatbot does not contain a live examination timetable or result database."
  },
  {
    id: "location",
    keywords: ["location", "address", "where", "located", "directions", "map", "how to reach"],
    answer: "The chatbot is intended for enquiries about The National College, Jayanagar, Bengaluru, but a verified postal address and directions have not yet been added. Please use the college's official website or contact the college office to confirm the correct address and travel directions."
  },
  {
    id: "contact",
    keywords: ["contact", "phone", "phone number", "email", "office", "contact number", "college number"],
    answer: "Contact details: A verified current phone number and email address have not yet been added to this chatbot. Please refer to the college's official website or current prospectus for contact details. I do not want to provide an unverified number or email address."
  },
  {
    id: "greeting",
    keywords: ["hello", "hi", "hey", "hii", "good morning", "good afternoon", "good evening"],
    answer: "Hello! Welcome to the College Enquiry Assistant. I can help with course information, BCA subjects, eligibility, admission guidance, fees, timings, examinations and facilities. What would you like to know?"
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "thank you", "thankyou"],
    answer: "You're welcome. If you have another college-related question, please feel free to ask. For official requirements and dates, always confirm with the college office."
  }
];

const input = document.getElementById("question");
const chatBox = document.getElementById("chatBox");
const typing = document.getElementById("typing");
const chatForm = document.getElementById("chatForm");

chatForm.addEventListener("submit", event => {
  event.preventDefault();
  sendMessage();
});

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function getAnswer(question) {
  const normalizedQuestion = normalize(question);
  const words = normalizedQuestion.split(/\s+/).filter(Boolean);

  // Resolve the course first so a general word such as "eligibility" cannot
  // override a specific question such as "BBA eligibility".
  const courseDefinitions = [
    { key: "bca", aliases: ["bca", "bachelor of computer applications"], ids: ["bca-eligibility", "bca-duration", "bca-subjects", "bca-programming", "bca-careers", "bca-admission", "bca-overview"] },
    { key: "bba", aliases: ["bba", "bachelor of business administration"], ids: ["bba-eligibility", "bba-duration", "bba-subjects", "bba-careers", "bba-admission", "bba-overview"] },
    { key: "bcom", aliases: ["bcom", "b com", "bachelor of commerce"], ids: ["bcom-eligibility", "bcom-duration", "bcom-subjects", "bcom-careers", "bcom-admission", "bcom-overview"] },
    { key: "bsc", aliases: ["bsc", "b sc", "bachelor of science"], ids: ["bsc-eligibility", "bsc-duration", "bsc-subjects", "bsc-careers", "bsc-admission", "bsc-overview"] },
    { key: "ba", aliases: ["ba", "bachelor of arts"], ids: ["ba-eligibility", "ba-duration", "ba-subjects", "ba-careers", "ba-admission", "ba-overview"] }
  ];

  const course = courseDefinitions.find(def => def.aliases.some(alias => {
    if (alias.includes(" ")) return normalizedQuestion.includes(alias);
    return words.includes(alias);
  }));

  if (course) {
    const matches = faqData
      .filter(item => course.ids.includes(item.id))
      .map(item => {
        let score = 0;
        for (const keyword of item.keywords) {
          const key = normalize(keyword);
          if (!key) continue;
          if (key.includes(" ") && normalizedQuestion.includes(key)) {
            score = Math.max(score, key.split(" ").length + 2);
          } else if (!key.includes(" ") && words.includes(key)) {
            score = Math.max(score, 1);
          }
        }
        // Course-specific intent terms ensure topic answers beat the overview.
        const id = item.id;
        const topicSignals = {
          eligibility: ["eligibility", "eligible", "qualification", "qualify", "marks", "requirements", "required subjects"],
          duration: ["duration", "years", "long", "semesters", "semester"],
          subjects: ["subjects", "syllabus", "curriculum", "topics", "specialisations", "combinations", "study", "taught", "papers"],
          careers: ["career", "careers", "jobs", "job", "scope", "work", "employment", "after"],
          admission: ["admission", "apply", "application", "join", "documents", "deadline", "process"]
        };
        for (const [topic, signals] of Object.entries(topicSignals)) {
          if (id === `${course.key}-${topic}` && signals.some(signal => words.includes(signal))) score += 5;
        }
        if (id === `${course.key}-overview`) score += 0.1;
        return { item, score };
      })
      .filter(match => match.score > 0)
      .sort((a, b) => b.score - a.score);

    if (matches.length) return matches[0].item.answer;
    return faqData.find(item => item.id === `${course.key}-overview`).answer;
  }

  let bestItem = null;
  let bestScore = 0;
  for (const item of faqData) {
    let score = 0;
    for (const keyword of item.keywords) {
      const key = normalize(keyword);
      if (!key) continue;
      if (key.includes(" ") && normalizedQuestion.includes(key)) score += key.split(" ").length + 1;
      else if (!key.includes(" ") && words.includes(key)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }
  return bestItem ? bestItem.answer : "Thank you for your question. I do not have a verified answer for that enquiry yet. Please contact the college office for official information, or ask about BCA, BBA, B.Com, B.Sc, BA, admissions, fees, timings, examinations or facilities.";
}

function addMessage(text, type) {
  const row = document.createElement("div");
  row.className = `message ${type}`;
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = type === "bot" ? "🎓" : "👤";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  row.append(avatar, bubble);
  chatBox.appendChild(row);
  chatBox.scrollTop = chatBox.scrollHeight;
  input.focus();
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
  window.setTimeout(() => {
    typing.style.display = "none";
    addMessage(getAnswer(question), "bot");
  }, 300);
}

function showAbout() {
  document.getElementById("aboutModal").classList.remove("hidden");
}

function closeAbout() {
  document.getElementById("aboutModal").classList.add("hidden");
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeAbout();
});
