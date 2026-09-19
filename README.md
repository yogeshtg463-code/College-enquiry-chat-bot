# College Enquiry Chatbot — GitHub Pages Version

A mobile-friendly BCA 5th Semester mini project built with HTML, CSS and JavaScript.

## Important

This version is designed specifically for **GitHub Pages**. It does not use Python, Flask or SQLite, because GitHub Pages hosts static websites.

## Features

- Mobile-friendly chatbot interface
- Quick question buttons
- Course information
- Admission information
- Fee information
- College timings
- Examination information
- Facilities information
- Contact information
- Works on GitHub Pages
- No server or installation required

## Files

```text
college-enquiry-chatbot/
├── index.html
├── admin.html
├── style.css
├── script.js
└── README.md
```

## Deploy on GitHub Pages

1. Create a GitHub repository.
2. Upload all files from this folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. Wait for GitHub Pages to publish the site.

Your website will be available at:

```text
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

## Changing College Information

Open `script.js` and edit the `faqData` array.

Example:

```javascript
{
  keywords: ["principal", "principal name"],
  answer: "Your college principal information here."
}
```

Add it before the closing `];`, then upload/commit the changed `script.js`.

## Project Flow

```text
Student enters question
        ↓
JavaScript receives question
        ↓
Question is normalized
        ↓
Keywords are matched
        ↓
Best matching FAQ is selected
        ↓
Answer is displayed
```

## Future Enhancements

- Backend with Flask or Node.js
- Real database
- Admin login
- Voice input/output
- Advanced NLP
- Multilingual support
- College website integration
- Analytics

## Author

BCA 5th Semester Mini Project
