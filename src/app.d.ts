declare global {
  namespace App {
    interface PageData {
      notes?: NoteMeta[];
      note?: NoteMeta;
    }
  }

  interface NoteMeta {
    title: string;
    dek: string;
    date: string;
    slug: string;
    readingTime: string;
  }
}

export {};
