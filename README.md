# College Enquiry Chatbot

A BCA 5th Semester mini project built using Python, Flask, HTML, CSS, JavaScript and SQLite.

## Project Overview

The College Enquiry Chatbot answers common questions asked by students and visitors about a college. It provides information about courses, admissions, fees, college timings, examinations, facilities and contact details.

## Technologies Used

- Python
- Flask
- HTML
- CSS
- JavaScript
- SQLite
- Basic keyword-based Natural Language Processing

## Features

### Student/User Module
- Open the chatbot in a web browser
- Ask questions about the college
- Receive instant answers
- Ask multiple questions
- Access college enquiry information

### Admin Module
- Add questions and answers
- View stored FAQs
- Delete FAQs
- Update the chatbot knowledge by adding new FAQs

## Project Structure

```text
college-enquiry-chatbot/
├── app.py
├── database.py
├── requirements.txt
├── README.md
├── college.db
├── templates/
│   ├── index.html
│   └── admin.html
└── static/
    ├── style.css
    └── script.js
```

## Requirements

- Python 3.9 or newer
- VS Code or another code editor
- A web browser

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/college-enquiry-chatbot.git
cd college-enquiry-chatbot
```

2. Create a virtual environment:

```bash
python -m venv venv
```

3. Activate it.

Windows:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
source venv/bin/activate
```

4. Install Flask:

```bash
pip install -r requirements.txt
```

5. Run the application:

```bash
python app.py
```

6. Open the browser and visit:

```text
http://127.0.0.1:5000
```

## Admin Panel

Open:

```text
http://127.0.0.1:5000/admin
```

The current demo project does not include authentication. Add authentication before using the admin panel on a public server.

## Database

The project uses SQLite. The `college.db` file contains sample frequently asked questions and answers.

The database stores information such as:

- Admission process
- Course names
- Fee information
- College timings
- Examination information
- Facilities
- Contact information

## Example Questions

Try asking:

- What courses are available?
- What are the college timings?
- What is the admission process?
- What is the fee structure?
- What facilities are available?
- When are examinations conducted?
- How can I contact the college?

## Project Flow

```text
Student enters a question
        ↓
Flask receives the question
        ↓
Question is processed
        ↓
SQLite database is searched
        ↓
Matching answer is selected
        ↓
Answer is displayed
```

## Future Enhancements

- Voice input and voice responses
- Improved NLP
- Multilingual support
- Integration with a college website
- Student login
- Personalized information
- Frequently asked question analytics

## Author

BCA 5th Semester Mini Project
