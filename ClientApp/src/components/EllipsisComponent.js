import * as React from 'react';
import { connect } from 'react-redux';

class EllipsisComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showFullText: this.props.text.length <= this.props.maxLength };
    }

    render() {

        // let textLength = this.props.text.length;
        let maxLength = this.props.maxLength;
        let ellipsisText = this.state.showFullText ? 'show less' : '... show more';

        this.showFullTextHandler = () => this.setState({ showFullText: !this.state.showFullText });

        return (
            <div>
                {
                    this.state.showFullText ? this.props.text : `${this.props.text.substr(0, maxLength)}`
                }

                <a href="#" onClick={this.showFullTextHandler}>{ellipsisText}</a>
            </div>
        );
    }
}

export default connect()(EllipsisComponent);