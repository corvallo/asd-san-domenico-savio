export interface Reel {
  id: string;
  title: string;
  url: string;
  /** Cover image (Astro asset); until provided the card shows a placeholder. */
  cover?: ImageMetadata;
}
