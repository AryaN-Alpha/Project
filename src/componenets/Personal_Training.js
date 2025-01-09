import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Personal_Training = () => {
  const [age, setAge] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const [category, setCategory] = useState('');

  // Age categories and their exercises with reps
  const exercises = {
    under18: [
      { name: 'Push-ups', reps: '10-15 reps' },
      { name: 'Squats', reps: '15-20 reps' },
      { name: 'Plank', reps: '30-60 seconds' },
      { name: 'Jumping Jacks', reps: '30 seconds' },
      { name: 'Mountain Climbers', reps: '30 seconds' },
      { name: 'Lunges', reps: '10-15 reps per leg' },
      { name: 'Burpees', reps: '10-15 reps' },
      { name: 'High Knees', reps: '30 seconds' },
      { name: 'Leg Raises', reps: '10-15 reps' },
      { name: 'Crunches', reps: '15-20 reps' },
    ],
    '18-40': [
      { name: 'Deadlifts', reps: '4 sets of 8-12 reps' },
      { name: 'Bench Press', reps: '4 sets of 8-12 reps' },
      { name: 'Squats', reps: '4 sets of 8-12 reps' },
      { name: 'Pull-ups', reps: '3 sets of 6-10 reps' },
      { name: 'Lunges', reps: '3 sets of 10-12 reps per leg' },
      { name: 'Push-ups', reps: '3 sets of 10-15 reps' },
      { name: 'Kettlebell Swings', reps: '3 sets of 12-15 reps' },
      { name: 'Leg Press', reps: '4 sets of 8-12 reps' },
      { name: 'Overhead Press', reps: '4 sets of 8-12 reps' },
      { name: 'Dumbbell Rows', reps: '3 sets of 10-12 reps' },
    ],
    over40: [
      { name: 'Walking Lunges', reps: '3 sets of 10-12 reps per leg' },
      { name: 'Push-ups', reps: '3 sets of 8-12 reps' },
      { name: 'Bodyweight Squats', reps: '3 sets of 12-15 reps' },
      { name: 'Chest Press', reps: '4 sets of 8-12 reps' },
      { name: 'Leg Extensions', reps: '3 sets of 12-15 reps' },
      { name: 'Lat Pulldowns', reps: '3 sets of 10-12 reps' },
      { name: 'Glute Bridges', reps: '3 sets of 10-15 reps' },
      { name: 'Triceps Dips', reps: '3 sets of 10-12 reps' },
      { name: 'Bicep Curls', reps: '3 sets of 10-12 reps' },
      { name: 'Step-ups', reps: '3 sets of 10-12 reps per leg' },
    ],
  };

  const handleAgeSubmit = (event) => {
    event.preventDefault();
    if (age < 18) {
      setCategory('under18');
    } else if (age >= 18 && age <= 40) {
      setCategory('18-40');
    } else {
      setCategory('over40');
    }
    setShowPopup(false);
  };

  return (
    <div className="container">
      {/* Popup to ask age */}
      {showPopup && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Your Age</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowPopup(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAgeSubmit}>
                  <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      value={age || ''}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Display tables based on age category */}
      {!showPopup && (
        <div>
          <h2 className="text-center my-4">Personal Training Exercises</h2>

          {category === 'under18' && (
            <div>
              <h3 className="text-center">Exercises for Under 18</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Exercise</th>
                    <th>Reps</th>
                  </tr>
                </thead>
                <tbody>
                  {exercises.under18.map((exercise, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{exercise.name}</td>
                      <td>{exercise.reps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {category === '18-40' && (
            <div>
              <h3 className="text-center">Exercises for 18-40</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Exercise</th>
                    <th>Reps</th>
                  </tr>
                </thead>
                <tbody>
                  {exercises['18-40'].map((exercise, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{exercise.name}</td>
                      <td>{exercise.reps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {category === 'over40' && (
            <div>
              <h3 className="text-center">Exercises for Over 40</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Exercise</th>
                    <th>Reps</th>
                  </tr>
                </thead>
                <tbody>
                  {exercises.over40.map((exercise, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{exercise.name}</td>
                      <td>{exercise.reps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default Personal_Training;
=======
export default Personal_Training;
>>>>>>> 9dd821d667dba30e3a0cba96695fc1f8794dc664
