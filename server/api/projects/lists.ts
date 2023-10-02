import list from './list.json';

// type project = {
//   id: number;
//   title: string;
//   description: string;
//   imgs: string[];
// };

export default defineEventHandler((event) => {
  return {
    list
  };
});
