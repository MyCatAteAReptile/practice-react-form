import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Filter from '../../types/filter';
import TextInput from '../UI/input/TextInput';
import colors from '../../global/colors';
import Heading from '../UI/text/Heading';
import Title from '../UI/text/Title';

type TaskFilterProps = {
    filter: Filter;
    setFilter: Dispatch<SetStateAction<Filter>>;
};

const StyledTaskFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: solid 2px ${colors.tasksBorder};
    border-radius: 20px;
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
    border: solid 2px ${colors.taskFormBorder};
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1rem;

    &:focus {
        border: solid 2px ${colors.inputBorderFocus};
    }

    &:hover {
        border: solid 2px ${colors.inputBorderHover};
    }
`;

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => (
    <StyledTaskFilter>
        <Heading>Фильтр</Heading>
        <Wrapper>
            <Title>Выбрать по заголовку</Title>
            <TextInput id="seach-query" value={filter.query} placeholder="Поиск..." onChange={(e) => setFilter({ ...filter, query: e.target.value })} />
        </Wrapper>
        <Wrapper>
            <Title>Сортировка</Title>
            <Select value={filter.sort} onChange={(e) => setFilter({ ...filter, sort: e.target.value as Filter['sort'] })}>
                <option value="highToLowPriority">От важных к неважным</option>
                <option value="lowToHighPriority">От неважных к важным</option>
                <option value="default">Без сортировки</option>
            </Select>
        </Wrapper>
    </StyledTaskFilter>
);

export default TaskFilter;
