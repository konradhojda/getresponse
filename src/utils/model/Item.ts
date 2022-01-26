export interface SingleItem {
  id: string;
  dietType: string | null;
  dietDone: boolean | null;
  current?: boolean;
  meals?: Meal[];
}

export type Meal = {
  name: string;
  img?: string;
};
