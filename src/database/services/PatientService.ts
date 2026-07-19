import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, enableIndexedDbPersistence } from "firebase/firestore";

// ১. অফলাইন ডেটা পারসিস্টেন্স বা লোকাল ক্যাশে মেমোরি সচল করা
if (typeof window !== "undefined") {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn("মাল্টিপল ট্যাব খোলা থাকায় অফলাইন স্টোরেজ ব্যাকআপ মোডে চলছে।");
    } else if (err.code === 'unimplemented') {
      console.error("এই ব্রাউজারটি অফলাইন ডাটাবেস সাপোর্ট করে না।");
    }
  });
}

// রোগীর ডেটার জন্য ইন্টারফেস বা টাইপ ডেফিনিশন
export interface PatientData {
  id?: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  photoUrl?: string;
  chiefComplaints?: string;
  createdAt: Date;
}

// ২. রোগী ব্যবস্থাপনার মূল ফাংশনসমূহ
export const PatientService = {
  // অফলাইনে বা অনলাইনে নতুন রোগী যোগ করার ফাংশন
  async addPatient(patient: Omit<PatientData, 'id' | 'createdAt'>) {
    try {
      const patientCollection = collection(db, "patients");
      const docRef = await addDoc(patientCollection, {
        ...patient,
        createdAt: new Date()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("রোগী যোগ করতে সমস্যা হয়েছে: ", error);
      return { success: false, error };
    }
  },

  // অফলাইন ক্যাশে এবং ক্লাউড থেকে সব রোগীর তালিকা নিয়ে আসার ফাংশন
  async getAllPatients(): Promise<PatientData[]> {
    try {
      const patientCollection = collection(db, "patients");
      const querySnapshot = await getDocs(patientCollection);
      
      const patients: PatientData[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        patients.push({
          id: doc.id,
          name: data.name,
          age: data.age,
          gender: data.gender,
          phone: data.phone,
          photoUrl: data.photoUrl,
          chiefComplaints: data.chiefComplaints,
          createdAt: data.createdAt?.toDate() || new Date()
        });
      });
      
      return patients;
    } catch (error) {
      console.error("রোগীর তালিকা আনতে সমস্যা হয়েছে: ", error);
      return [];
    }
  }
};