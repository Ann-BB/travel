export interface ICard {
  imgBg: string;
  title: string;
  describe?: string;
  isFavorite?: boolean;
  loveIcon?: boolean;
  category?: string[];
  date?: string | Date;
}