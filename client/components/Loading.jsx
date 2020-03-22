import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
library.add(faSpinner);


var Icon = styled.div `
    margin: 32px auto 0;
    padding: 16px;
    max-width: 750px;
    width: 100%;
    font-family: Avenir, sans-serif;
`
var Loading = ()=> {
    return (
        <Icon>
            <FontAwesomeIcon icon="spinner" size='10x'></FontAwesomeIcon>
        </Icon>
    )
}

export default Loading;