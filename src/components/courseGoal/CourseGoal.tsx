// import { type FC } from 'react';
import { CourseGoalProps } from '@/types';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CourseGoal({
  title,
  description,
  id,
  onDelete,
}: CourseGoalProps) {
  return (
    <Card className='bg-secondary'>
      <CardHeader>
        <CardTitle className='truncate'>{title}</CardTitle>
        <CardDescription className='break-words'>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button
          className='text-white'
          variant={'destructive'}
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

// Components using decorators 'type'
// const CourseGoal: FC<CourseGoalProps> = ({ title, description }) => {
//   return (
//     <Card className='w-2/5 bg-secondary'>
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>{description}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <p>Card Content</p>
//       </CardContent>
//       <CardFooter>
//         <Button className='text-white'>Delete</Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default CourseGoal;
