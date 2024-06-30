import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { Filter, SortingType } from '../../types/filter';
import TextInput from '../UI/input/TextInput';
import Heading from '../UI/text/Heading';
import Title from '../UI/text/Title';
import throttle from '../../utils/throttle';
import borders from '../../global/borders';

type TaskFilterProps = {
    filter: Filter;
    setFilter: Dispatch<SetStateAction<Filter>>;
};

const StyledTaskFilter = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: ${borders.border};
    border-radius: 8px;
    border-radius: 20px;
    box-shadow: 0 5px 10px 0 rgba(0 0 0 / 50%);
`;

const Wrapper = styled.label`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Select = styled.select`
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
    border: ${borders.border};
    border-radius: 8px;
    background-color: transparent;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1rem;
    outline: none;
    text-overflow: ellipsis;

    &:focus {
        border: ${borders.borderFocus};
    }

    &:hover {
        border: ${borders.borderHover};
    }
`;

const TaskFilter: FC<TaskFilterProps> = ({ filter, setFilter }) => {
    const [query, setQuery] = useState(filter.query);

    const throttledSetFilterQuery = throttle((newQuery) => {
        setFilter({ ...filter, query: newQuery });
    }, 1000);

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        throttledSetFilterQuery(e.target.value);
    };

    return (
        <StyledTaskFilter>
            <Heading>Фильтр</Heading>
            <Wrapper>
                <Title>Выбрать по заголовку</Title>
                <TextInput id="seach-query" value={query} placeholder="Поиск..." onChange={handleQueryChange} />
            </Wrapper>
            <Wrapper>
                <Title>Сортировка</Title>
                <Select value={filter.sort} onChange={(e) => setFilter({ ...filter, sort: e.target.value as Filter['sort'] })}>
                    <option value={SortingType.highToLowPriority}>От важных к неважным</option>
                    <option value={SortingType.lowToHighPriority}>От неважных к важным</option>
                    <option value={SortingType.onlySolved}>Только выполненные</option>
                    <option value={SortingType.onlyUnsolved}>Только невыполненные</option>
                    <option value={SortingType.default}>По порядку создания</option>
                </Select>
            </Wrapper>
        </StyledTaskFilter>
    );
};

export default TaskFilter;
