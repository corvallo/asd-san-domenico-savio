export interface Reel {
  id: string;
  title: string;
  url: string;
  /** Cover image path; until provided the card shows a placeholder. */
  cover?: string;
}
