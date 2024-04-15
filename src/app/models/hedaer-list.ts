export interface HedaerList {
  id: number;
  title: string;
  section: ISections;
}
export interface ISections {
  list: IList;
  imgContent?: IImgContent[];
}

export interface IImgContent {
  title: string;
  imgBg: string; 
}
export interface IList {
 [name: string]: string[]
}