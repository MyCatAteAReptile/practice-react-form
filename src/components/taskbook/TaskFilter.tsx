import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Filter from '../../types/filter';
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
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1rem;
    outline: none;

    &:focus {
        border: ${borders.borderFocus};
    }

    &:hover {
        border: ${borders.borderHover};
    }
`;

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => {
    const [query, setQuery] = useState('');

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
                    <option value="highToLowPriority">От важных к неважным</option>
                    <option value="lowToHighPriority">От неважных к важным</option>
                    <option value="onlySolved">Только выполненные</option>
                    <option value="onlyUnsolved">Только невыполненные</option>
                    <option value="default">Без сортировки</option>
                </Select>
            </Wrapper>
        </StyledTaskFilter>
    );
};

export default TaskFilter;
