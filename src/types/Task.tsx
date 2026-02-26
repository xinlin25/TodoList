export type Task = {
    id: number, //Use id because each child should have a unique "key" prop
    text: string,
    completed: boolean
}