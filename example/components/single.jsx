import React, { Component } from 'react';


/**
 * Slider
 */
export default class Slider extends Component {
    render() {
        var titles = this.props.panes.map(function(d) { return d.title; });
        var current = this.props.panes[this.props.current];
        var content = current ? current.content : '';

        return (<div>{content}</div>);
    }
}

Slider.propTypes = {
     /** The index of the active pane */
    current: React.PropTypes.number,
    /** An array containing all the \n panes */
    panes: React.PropTypes.arrayOf(React.PropTypes.object),
    name: React.PropTypes.string
}
Slider.defaultProps = {
    current: 0,
    panes: {
        title: 'ddsdsd',
        content: 'content test'
    }
};