from flask import Blueprint, render_template

doctor_bp = Blueprint('doctor', __name__)

@doctor_bp.route('/records')
def view_records():
    # Doctor views patient records
    return render_template('patient_records.html')

@doctor_bp.route('/submit-diagnosis', methods=['GET', 'POST'])
def submit_diagnosis():
    if request.method == 'POST':
        # Save diagnosis report
        pass
    return render_template('submit_diagnosis.html')
