import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

// রোগীর ডেটার জন্য টাইপ ডেফিনিশন
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

// রোগী ব্যবস্থাপনার মূল ফাংশনসমূহ
export const PatientService = {
  // নতুন রোগী যোগ করার ফাংশন
  async addPatient(patient: Omit<PatientData, 'id' | 'createdAt'>) {
    try {
      if (!db) {
        throw new Error("Firestore DB কানেকশন পাওয়া যায়নি!");
      }

      const patientCollection = collection(db, "patients");
      
      const payloadData: Record<string, any> = {
        name: patient.name,
        age: Number(patient.age),
        gender: patient.gender,
        phone: patient.phone,
        createdAt: new Date()
      };

      if (patient.photoUrl) {
        payloadData.photoUrl = patient.photoUrl;
      }
      if (patient.chiefComplaints) {
        payloadData.chiefComplaints = patient.chiefComplaints;
      }

      const docRef = await addDoc(patientCollection, payloadData);
      console.log("রোগী সফলভাবে সংরক্ষিত হয়েছে! ID:", docRef.id);
      return { success: true, id: docRef.id };

    } catch (error: any) {
      console.error("রোগী যোগ করতে সমস্যা হয়েছে: ", error);
      return { 
        success: false, 
        error: error.message || "রোগী সংরক্ষণ করতে সমস্যা হয়েছে।" 
      };
    }
  },

  // সব রোগীর তালিকা নিয়ে আসার ফাংশন
  async getAllPatients(): Promise<PatientData[]> {
    try {
      if (!db) return [];
      
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
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date()
        });
      });
      
      return patients;
    } catch (error) {
      console.error("রোগীর তালিকা আনতে সমস্যা হয়েছে: ", error);
      return [];
    }
  }
};