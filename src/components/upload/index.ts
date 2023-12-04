import dynamic from 'next/dynamic';

export * from './types';

export const Upload = dynamic(() => import('./upload'), {
  ssr: false,
});