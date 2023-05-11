export interface ICreatureData {
  name: string;
  url: string;
  data: any;
  types: ICreatureType[];
}

export interface ICreatureDataResponse {
  next: string | null;
  previous: string | null;
  results: ICreatureData[];
}

export interface ICreatureTypesResponse {
  next: string | null;
  previous: string | null;
  results: ICreatureType[];
}

export interface ICreatureDataType {
  slot: number;
  type: ICreatureType;
}

export interface ICreatureType {
  name: string;
}

export interface IgetCreatureDataList {
  offset: number;
}

export interface IPokeTypesClassSet {
  [key: string]: string;
}
