import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
  isLoadingCompleted: boolean;
  setLoading: (loading: boolean) => void;
  setLoadingCompleted: (completed: boolean) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: true, // Default to true initially
  isLoadingCompleted: false, // Track whether the loading is complete
  setLoading: (loading) => set({ isLoading: loading }),
  setLoadingCompleted: (completed) => set({ isLoadingCompleted: completed }),
}));
