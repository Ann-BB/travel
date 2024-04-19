export interface IDetails {
  id: number;
  title: string;
  section: Section;
}
export interface Section {
  categories: Categories;
  imgContent: ImgContent[];
}
export interface ImgContent {
  title: string;
  imgBg: string;
}
export interface Categories {
  [name: string]: Category1[]; 
}
export interface Category1 {
  title: string;
  index: string;
  firstSection: FirstSection;
  secondSection: FirstSection[];
}
export interface FirstSection {
  title: string;
  content: string;
  url: string;
}