import { type ReactNode } from 'react';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

// extends type CourseGoal
export type CourseGoalProps = CourseGoal & {
  onDelete: (id: number) => void;
};

export type CourseGoalListProps = {
  goals: CourseGoal[];
  onDeleteGoal: (id: number) => void; // no return function
};

export type NewGoalProps = {
  onAddGoal: (title: string, summary: string) => void;
};

export type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
