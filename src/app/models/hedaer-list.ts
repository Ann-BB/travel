export interface HedaerList {
  title: string;
  section: ISections;
}
export interface ISections {
  list: IList;
  imgContent?: IImgContent[];
}

export interface IImgContent {
  title: string;
  imgUrl: string;
  imgText: string;
}
export interface IList {
 [name: string]: string[]
}