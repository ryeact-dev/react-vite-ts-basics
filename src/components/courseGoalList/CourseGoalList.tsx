import { CourseGoalListProps } from '@/types';
import CourseGoal from '../courseGoal/CourseGoal';

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul className='flex flex-wrap gap-2'>
      {goals.map((goal) => (
        <li key={goal.id} className='w-96'>
          <CourseGoal
            title={goal.title}
            description={goal.description}
            onDelete={onDeleteGoal}
            id={goal.id}
          />
        </li>
      ))}
    </ul>
  );
}
