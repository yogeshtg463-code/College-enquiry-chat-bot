import sqlite3

DATABASE = "college.db"

def get_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def create_database():
    conn = get_connection()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS faqs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            answer TEXT NOT NULL
        )
    """)

    count = conn.execute("SELECT COUNT(*) FROM faqs").fetchone()[0]

    if count == 0:
        data = [
            ("What courses are available?",
             "The college offers BCA, BBA, B.Com and other undergraduate courses."),
            ("What are the college timings?",
             "College working hours are 9:00 AM to 4:30 PM."),
            ("What is the admission process?",
             "Students can apply for admission by submitting the required documents and completing the admission procedure."),
            ("What is the fee structure?",
             "The fee structure depends on the course. Please contact the college office for the latest fee details."),
            ("Where is the college located?",
             "Please contact the college office for the complete address and location details."),
            ("What facilities are available?",
             "The college provides library, computer laboratories, classrooms and other student facilities."),
            ("When are examinations conducted?",
             "Examinations are conducted according to the academic calendar."),
            ("How can I contact the college?",
             "You can contact the college office during working hours for enquiries.")
        ]
        conn.executemany(
            "INSERT INTO faqs (question, answer) VALUES (?, ?)", data
        )

    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_database()
    print("Database created successfully.")
