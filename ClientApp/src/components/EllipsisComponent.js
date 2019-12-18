import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/Ellipsis';

class EllipsisComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showFullText: this.props.text.length <= this.props.maxLength };
    }

    render() {

        const defaultMaxLength = 20;
        let maxLength = this.props.maxLength || defaultMaxLength;
        let ellipsisText = this.props.showFullText ? 'show less' : '... show more';

        return (
            <div>
                {
                    this.props.showFullText ? this.props.text : `${this.props.text.substr(0, maxLength)}`
                }

                <a role="button" onClick={this.props.toggleTextEllipsis}>{ellipsisText}</a>
            </div>
        );
    }
}

export default connect(
    state => state.ellipsis,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(EllipsisComponent);
