import * as React from 'react';

class Input extends React.Component<any, any> {
    render() {
        return <input type="text" {...this.props} />;
    }
}

export default Input;
