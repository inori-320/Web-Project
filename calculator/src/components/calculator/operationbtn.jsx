import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../../redux/actions';

class OperationBtn extends Component {
    state = {
    };

    render() { 
        return (
            <button className='deep_color' onClick={ () => {this.props.choose_operation(this.props.operation)} }>
                {this.props.operation}
            </button>
        );
    }
}

const mapDispatchToProps = {
    choose_operation: operation => {
        return {
            type: ACTIONS.CHOOSE_OPERATION,
            operation: operation
        }
    }
}

export default connect(null, mapDispatchToProps)(OperationBtn);