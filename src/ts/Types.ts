export type Point = number | 'x' | 'o';
export type Board = Point[];
export type WinCombo = Point[];
export type WinCombosList = WinCombo[];

export interface Config {
    el: string,
    human: Point,
    computer: Point
}
