
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';

import styled from 'styled-components'

const Div = styled.div`

`

//@withRouter
//@inject('commonStore')
//@observer
export default class Login extends Component {
    render() {
        return (
            <Div>
                Login
            </Div>
        );
    }
    
}

