import { Receipt } from '@/context/ReceiptContext';
import { db, storage } from './firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  getDocs,
} from 'firebase/firestore';

export async function createReceipt(userId: string, receipt: Omit<Receipt, 'id'>) {
  try {
    const docRef = await addDoc(collection(db, 'users', userId, 'receipts'), {
      ...receipt,
      createdAt: new Date(),
    });
    return { id: docRef.id, ...receipt };
  } catch (error) {
    console.error('Error creating receipt:', error);
    throw error;
  }
}

export async function updateReceipt(userId: string, receiptId: string, updates: Partial<Receipt>) {
  try {
    const docRef = doc(db, 'users', userId, 'receipts', receiptId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error('Error updating receipt:', error);
    throw error;
  }
}

export async function deleteReceipt(userId: string, receiptId: string) {
  try {
    await deleteDoc(doc(db, 'users', userId, 'receipts', receiptId));
  } catch (error) {
    console.error('Error deleting receipt:', error);
    throw error;
  }
}

export async function getReceipts(userId: string): Promise<Receipt[]> {
  try {
    const q = query(collection(db, 'users', userId, 'receipts'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    } as Receipt));
  } catch (error) {
    console.error('Error fetching receipts:', error);
    throw error;
  }
}