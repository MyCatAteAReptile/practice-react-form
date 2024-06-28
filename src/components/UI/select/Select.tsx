import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select``;

type SelectProps = {
    options: string[];
    onChange: ChangeEventHandler<HTMLSelectElement>;
};

const Select: React.FC<SelectProps> = ({ options, onChange }) => (
    <StyledSelect onChange={onChange}>
        <option value="highToLowPriority">Низкая</option>
        <option value="lowToHighPriority">Средняя</option>
        <option value="default" selected>
            Не выбран
        </option>
    </StyledSelect>
);

export default Select;
