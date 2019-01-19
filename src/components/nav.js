import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Hamburger from './hamburger'
import Menu from './menu'
import state from '../state/state'

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };

        this.valueChanged = this.valueChanged.bind(this);
    }

    componentDidMount() {

        state.menuToggler.setReRenderCallback(this.valueChanged);
    }

    valueChanged() {

        let menuIsOpen = state.menuToggler.isOpen;

        console.log("valueChanged_" + menuIsOpen);

        this.setState({ isOpen: menuIsOpen });

        console.log("newState_" + this.state.isOpen);
    }

    render() {

        if (this.state.isOpen) {

            return (
                <div>
                    <Menu>
                    </Menu>
                    <Hamburger>
                    </Hamburger>

                </div>
            );

        } else {

            return (
                <div>
                    <Hamburger>
                    </Hamburger>
                </div>
            );

        }
    }
}

export default Nav;