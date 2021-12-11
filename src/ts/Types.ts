export type Point = number | 'x' | 'o';
export type Board = Point[];

export interface Config {
    el: string,
    human: Point,
    computer: Point
}
