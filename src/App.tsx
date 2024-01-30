import { useState } from 'react';
import { type CourseGoal } from './types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import goalsImg from '@/assets/goals.jpg';
import Header from './components/header/Header';
import CourseGoalList from './components/courseGoalList/CourseGoalList';
import NewGoal from './components/newGoal/NewGoal';

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGOals) => prevGOals.filter((goal) => goal.id !== id));
  };

  return (
    <main className='min-h-screen w-full flex justify-center items-center p-10'>
      <Card className='flex flex-col gap-4 w-[830px]'>
        <CardHeader>
          <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
            <h1 className='text-3xl font-bold text-blue-300'>
              Your Course Goals
            </h1>
          </Header>
        </CardHeader>
        <NewGoal onAddGoal={handleAddGoal} />
        <CardContent>
          <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
        </CardContent>
      </Card>
    </main>
  );
}
