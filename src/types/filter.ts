export const SortingType = {
    highToLowPriority: 'highToLowPriority',
    lowToHighPriority: 'lowToHighPriority',
    onlySolved: 'onlySolved',
    onlyUnsolved: 'onlyUnsolved',
    default: 'default',
} as const;

export type Filter = {
    query: string;
    sort: (typeof SortingType)[keyof typeof SortingType];
};

export const isSortingType = (value: any): value is Filter['sort'] => Object.values(SortingType).includes(value);
