export interface ApiData{
  data:DataItem[];
  titles:Title[];
}

export interface Title<K extends keyof DataItem = keyof DataItem> {
  key: K;
  title: string;
}

export interface DataItem{
  id:string,
  name:string,
  code:string
}