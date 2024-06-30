import { Filter, SortingType, isSortingType } from '../types/filter';

export const getSearchParamsObject = (searchParams: URLSearchParams) => {
    const params: { [key: string]: string } = {};

    searchParams.forEach((value, key) => {
        params[key] = value;
    });

    return params;
};

export const parseFilter = (searchParams: URLSearchParams) => {
    const params = getSearchParamsObject(searchParams);

    const filter: Filter = { query: params.query || '', sort: isSortingType(params.sort) ? params.sort : SortingType.default };

    return filter;
};
