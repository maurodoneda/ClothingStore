export enum CATEGORIES_ACTIONS {
    FETCH_CATEGORIES_START = "categories/FETCH_CATEGORIES_START",
    FETCH_CATEGORIES_SUCCEED = "categories/FETCH_CATEGORIES_SUCCEED",
    FETCH_CATEGORIES_FAILED = "categories/FETCH_CATEGORIES_FAILED",
}

export type Category = {
    title: string,
    imageUrl: string,
    items: Item[]
}

export type Item = {
    id: number,
    imgaUrl: string,
    name: string,
    price: number,
}

export type CategoryMap = {
    [key: string] : Item[];
}
