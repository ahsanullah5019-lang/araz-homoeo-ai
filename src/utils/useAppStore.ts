import { create } from "zustand";
import { PatientData } from "../database/services/PatientService";

// গ্লোবাল স্টেটের ইন্টারফেস বা টাইপ ডেফিনিশন
interface AppState {
  // ১. পেশেন্ট স্টেট
  patients: PatientData[];
  selectedPatient: PatientData | null;
  searchQuery: string;
  isLoading: boolean;
  
  // ২. অ্যাকশন বা ফাংশনসমূহ
  setPatients: (patients: PatientData[]) => void;
  setSelectedPatient: (patient: PatientData | null) => void;
  setSearchQuery: (query: string) => void;
  setLoading: (loading: boolean) => void;
  clearCurrentPatient: () => void;
}

// সেন্ট্রাল স্টোর তৈরি
export const useAppStore = create<AppState>((set) => ({
  // প্রাথমিক বা ডিফল্ট ভ্যালুসমূহ
  patients: [],
  selectedPatient: null,
  searchQuery: "",
  isLoading: false,

  // স্টেটের মান পরিবর্তন করার ফাংশনসমূহ (কোনো অংশ বাদ না দিয়ে সম্পূর্ণ)
  setPatients: (patients) => set({ patients }),
  
  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  clearCurrentPatient: () => set({ selectedPatient: null })
}));