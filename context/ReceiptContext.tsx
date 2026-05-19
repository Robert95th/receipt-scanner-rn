import React, { createContext, useState, useContext } from 'react';

export interface Receipt {
  id: string;
  vendor: string;
  amount: number;
  date: string;
  category: string;
  imageUrl?: string;
  notes?: string;
  extractedData?: Record<string, any>;
}

interface ReceiptContextType {
  receipts: Receipt[];
  addReceipt: (receipt: Receipt) => void;
  updateReceipt: (id: string, receipt: Partial<Receipt>) => void;
  deleteReceipt: (id: string) => void;
  getReceipt: (id: string) => Receipt | undefined;
}

const ReceiptContext = createContext<ReceiptContextType | undefined>(undefined);

export function ReceiptProvider({ children }: { children: React.ReactNode }) {
  const [receipts, setReceipts] = useState<Receipt[]>([]);

  const addReceipt = (receipt: Receipt) => {
    setReceipts([...receipts, receipt]);
    // TODO: Sync with Firestore
  };

  const updateReceipt = (id: string, updates: Partial<Receipt>) => {
    setReceipts(receipts.map(r => r.id === id ? { ...r, ...updates } : r));
    // TODO: Sync with Firestore
  };

  const deleteReceipt = (id: string) => {
    setReceipts(receipts.filter(r => r.id !== id));
    // TODO: Sync with Firestore
  };

  const getReceipt = (id: string) => {
    return receipts.find(r => r.id === id);
  };

  return (
    <ReceiptContext.Provider value={{ receipts, addReceipt, updateReceipt, deleteReceipt, getReceipt }}>
      {children}
    </ReceiptContext.Provider>
  );
}

export function useReceipts() {
  const context = useContext(ReceiptContext);
  if (!context) {
    throw new Error('useReceipts must be used within a ReceiptProvider');
  }
  return context;
}