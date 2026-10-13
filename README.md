# College Enquiry Assistant — The National College, Jayanagar

A responsive, browser-based college enquiry mini project built with HTML, CSS and JavaScript. It can be opened locally or hosted on GitHub Pages.

## Project files

```text
college-enquiry-chatbot/
├── index.html   # Student-facing chatbot interface
├── admin.html   # FAQ maintenance guide and project notes
├── script.js    # FAQ knowledge base and matching logic
├── style.css    # Responsive visual design
└── README.md    # Setup and maintenance instructions
```

## Run locally

1. Download and extract the project ZIP.
2. Keep all five files in the same folder.
3. Open `index.html` in a browser, or open the folder in VS Code and use Live Server.
4. Test questions such as:
   - Tell me about BCA / BBA / B.Com / B.Sc / BA
   - What are the BBA subjects?
   - What is the B.Com eligibility?
   - How long is B.Sc?
   - What jobs can I get after BA?
   - What is the admission process?

No Node.js, Python, Flask, database or package installation is required for this static version.

## Update the FAQ

1. Open `script.js`.
2. Find the relevant object in the `faqData` array.
3. Add keywords students may use and update the answer.
4. Save and test the chatbot locally.
5. Commit and push the updated files to GitHub.

`admin.html` is a maintenance guide, not a live database editor. GitHub Pages serves static files and cannot write changes back to the repository from the browser.

## Deploy with GitHub Pages

1. Upload all five project files to the repository root.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish the site.

## Accuracy and official information

This is a student project knowledge base, not an official college website or live college database. General BCA, BBA, B.Com, B.Sc and BA explanations are provided as educational guidance. These are general course descriptions and do not confirm that every course or subject combination is currently offered at The National College, Jayanagar. The current official course list, course duration, eligibility, syllabus, fees, dates, office hours, address, contact information and facilities should be checked against current college or university documents before being presented as official facts. The chatbot intentionally indicates when those details have not been verified.

## Technology

- HTML5
- CSS3 (responsive layout)
- Vanilla JavaScript (keyword-based FAQ matching)

The chatbot does not use a server-side database or AI service. It selects responses from the local FAQ knowledge base.
