import { HeaderProps } from '@/types';

export default function Header({ image, children }: HeaderProps) {
  return (
    <div className='p-8 flex flex-col items-center justify-center gap-4'>
      <img {...image} className='size-24 rounded-full' />
      {children}
    </div>
  );
}
