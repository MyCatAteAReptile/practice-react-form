type Filter = {
    query: string;
    sort: 'highToLowPriority' | 'lowToHighPriority' | 'onlySolved' | 'onlyUnsolved' | 'default';
};

export default Filter;
