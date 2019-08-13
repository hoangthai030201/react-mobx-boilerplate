
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';

import styled from 'styled-components'

const Div = styled.div`

`

//@withRouter
//@inject('commonStore')
@observer
export default class Test extends Component {
    @observable count = 5;
    render() {
        return (
            <Div>
                count: {this.count}
            </Div>
        );
    }
    
}

