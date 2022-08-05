export  interface ICarCreate {
  name: string;
  color:string;
}

export interface ICar {
  id: number;
  name: string;
  color: string;
}

export interface ICarSpeed {
  velocity: number;
  distance: number;
}

export interface IStorage {
  garagePage: number;
  winnersPage: number;
  cars: ICar[];
  winners: {
    id: number;
    wins: number;
    time: number;
    car: ICar;
  }[];
  carsCount: number;
  winnersCount: number;
  view: string;
  sort: string;
  sortOrder: string;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
  car: ICar;
}

export interface IRace {
  id: number;
  time: number;
}

export interface IStartDrive {
  success: boolean;
  id: number;
  time: number;
}