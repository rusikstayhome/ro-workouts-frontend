import React, { useEffect, useState } from 'react';
import './App.css';
import { Exercise as ExerciseModel } from './models/exercise';
import axios from './axios';
import Exercise from './components/Exercise';

function App() {
  const [exercises, setExercises] = useState<ExerciseModel[]>([]);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        axios.get('/api/exercises').then((res) => {
          const exercises = res.data;
          setExercises(exercises);
        });
      } catch (error) {
        console.error(error);
        alert(error);
      }
    };
    loadNotes();
  }, []);

  return (
    <div className="App">
      {exercises.map((exercise) => (
        <Exercise exercise={exercise} key={exercise._id} />
      ))}
    </div>
  );
}

export default App;
