import { useEffect, useState } from "react";
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { Note, CategoryType } from '../models/Note';
import { v4 as uuidv4 } from 'uuid';

const NOTES_QUERY_KEY = 'notes';

export const useNotes = () => {
  const queryClient = useQueryClient();
  const { data: notes = [] } = useQuery<Note[]>([NOTES_QUERY_KEY], () => {
    // For now, get notes from query cache or empty array
    return Promise.resolve(
      queryClient.getQueryData<Note[]>([NOTES_QUERY_KEY]) || []
    );
  });

  const [categoriesWithNotes, setCategoriesWithNotes] = useState<
    { category: CategoryType; notes: Note[] }[]
  >([]);

  useEffect(() => {
    const categories: CategoryType[] = [
      "Work and Study", "Home Life", "Health and Well-being",
    ];

    const data = categories.map((category) => {
      const filteredNotes = notes
        .filter((note) => note.category === category)
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, 3);
      return { category, notes: filteredNotes };
    });

    setCategoriesWithNotes(data);
  }, [notes]);

  const addNote = (category: CategoryType, content: string) => {
    const newNote: Note = {
      id: uuidv4(),
      category,
      content,
      createdAt: Date.now(),
      link: `https://example.com/notes/${uuidv4()}`,
    };
    const currentNotes = queryClient.getQueryData<Note[]>([NOTES_QUERY_KEY]) || [];
    queryClient.setQueryData([NOTES_QUERY_KEY], [newNote, ...currentNotes]);
  }

  const deleteAllNotes = () => {
    queryClient.setQueryData([NOTES_QUERY_KEY], []);
  }

  return { categoriesWithNotes, addNote, deleteAllNotes };
}
