export interface Note {
  id: string;
  content: string;
  category: CategoryType;
  createdAt: number;
  link: string;
}

export type CategoryType = 'Work and Study' | 'Home Life' | 'Health and Well-being';
