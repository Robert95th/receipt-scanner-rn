import Tesseract from 'tesseract.js';

export interface OCRResult {
  text: string;
  confidence: number;
}

export async function extractTextFromImage(imageUri: string): Promise<OCRResult> {
  try {
    const result = await Tesseract.recognize(imageUri, 'eng', {
      logger: (m) => console.log('OCR Progress:', m),
    });

    return {
      text: result.data.text,
      confidence: result.data.confidence,
    };
  } catch (error) {
    console.error('OCR Error:', error);
    throw error;
  }
}

export function parseReceiptData(text: string) {
  return {
    vendor: '',
    amount: 0,
    date: new Date().toISOString(),
    items: [],
  };
}