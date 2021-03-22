import React, { useState } from 'react';
import items from './allData';
import Menu from './Menu';
import Button from './Button';

import { SetsContainer, TopLine, SetsWrapper } from './SetsElements';

const allCategories = ['All', ...new Set(items.map(item => item.category[0]))];

const Sets = () => {

    const[menuItem, setMenuItem] = useState(items);
    const[buttons, setButtons] = useState(allCategories);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItem(items);
            return;
        }

        //const filteredData = items.filter(item => item.category === button);
        const filteredData = items.filter(item => item.category.indexOf(button) !== -1);
        setMenuItem(filteredData)
    }

    return (
        <SetsContainer id="sets">
                <TopLine>Sets</TopLine>
                <SetsWrapper>
                    <Button button={buttons} filter={filter}/>
                    <Menu menuItem={menuItem}/>
                </SetsWrapper>
        </SetsContainer>
    )
}

export default Sets
