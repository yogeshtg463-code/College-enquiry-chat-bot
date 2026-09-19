from flask import Flask, render_template, request, jsonify
from database import get_connection, create_database

app = Flask(__name__)
create_database()

def chatbot_answer(user_question):
    question = user_question.lower().strip()
    conn = get_connection()
    faqs = conn.execute("SELECT * FROM faqs").fetchall()
    conn.close()

    for faq in faqs:
        stored_question = faq["question"].lower()
        if question == stored_question:
            return faq["answer"]

        words = question.split()
        matched_words = sum(
            1 for word in words
            if len(word) > 2 and word in stored_question
        )
        if matched_words >= 2:
            return faq["answer"]

    if "course" in question:
        return "The college offers BCA, BBA, B.Com and other undergraduate courses."
    if "timing" in question or "time" in question:
        return "College working hours are 9:00 AM to 4:30 PM."
    if "admission" in question:
        return "Students can apply for admission by submitting the required documents and completing the admission procedure."
    if "fee" in question:
        return "The fee structure depends on the course. Please contact the college office for the latest fee details."
    if "library" in question:
        return "The college provides library facilities for students."
    if "exam" in question or "examination" in question:
        return "Examinations are conducted according to the academic calendar."
    if "contact" in question:
        return "You can contact the college office during working hours for enquiries."

    return "Sorry, I don't have information about that. Please contact the college office for more details."

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json() or {}
    question = data.get("question", "").strip()
    if not question:
        return jsonify({"answer": "Please enter your question."})
    return jsonify({"answer": chatbot_answer(question)})

@app.route("/admin")
def admin():
    conn = get_connection()
    faqs = conn.execute("SELECT * FROM faqs ORDER BY id DESC").fetchall()
    conn.close()
    return render_template("admin.html", faqs=faqs)

@app.route("/admin/add", methods=["POST"])
def add_faq():
    question = request.form["question"].strip()
    answer = request.form["answer"].strip()
    if question and answer:
        conn = get_connection()
        conn.execute(
            "INSERT INTO faqs (question, answer) VALUES (?, ?)",
            (question, answer)
        )
        conn.commit()
        conn.close()
    return "FAQ added successfully! <a href='/admin'>Go Back</a>"

@app.route("/admin/delete/<int:faq_id>")
def delete_faq(faq_id):
    conn = get_connection()
    conn.execute("DELETE FROM faqs WHERE id = ?", (faq_id,))
    conn.commit()
    conn.close()
    return "FAQ deleted successfully! <a href='/admin'>Go Back</a>"

if __name__ == "__main__":
    app.run(debug=True)
