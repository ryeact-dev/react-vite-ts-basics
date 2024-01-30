import { type NewGoalProps } from '@/types';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useRef, type FormEvent } from 'react';

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    evt.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit} className='px-6'>
      <Input
        type='text'
        placeholder='goal'
        className='placeholder:italic'
        id='goal'
        ref={goal}
        required
      />
      <Input
        type='text'
        placeholder='short summary'
        className='my-4 placeholder:italic'
        id='summary'
        ref={summary}
        required
      />
      <Button className='w-full'>Add Goal</Button>
    </form>
  );
}
