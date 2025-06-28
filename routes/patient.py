from flask import Blueprint, render_template, session

patient_bp = Blueprint('patient', __name__)

@patient_bp.route('/book')
def book_appointment():
    # Booking form logic
    return render_template('book_appointments.html')

@patient_bp.route('/history')
def view_history():
    # Fetch from DynamoDB
    return render_template('medical_history.html')
