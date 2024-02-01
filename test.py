import tkinter as tk
from tkinter import ttk
import sqlite3
from datetime import datetime

# Connect to the SQLite database
conn = sqlite3.connect('life_calendar.db')
cursor = conn.cursor()

# Create a table to store events
cursor.execute('''
    CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        event_name TEXT NOT NULL,
        event_date TEXT NOT NULL
    )
''')
conn.commit()

def add_event():
    event_name = event_name_entry.get()
    event_date = event_date_entry.get()

    # Insert the event into the database
    cursor.execute('INSERT INTO events (event_name, event_date) VALUES (?, ?)', (event_name, event_date))
    conn.commit()

    # Display a notification
    notification.notify(
        title='Life Calendar Reminder',
        message=f'Event "{event_name}" added on {event_date}',
    )

# GUI setup
root = tk.Tk()
root.title("Life Calendar Reminder")

# Create and place widgets (labels, entry fields, buttons) on the GUI

# Bind the "Add Event" button to the add_event function

# Start the Tkinter event loop

# Don't forget to close the database connection when the program exits
