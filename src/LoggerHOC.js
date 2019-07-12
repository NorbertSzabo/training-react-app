import React from 'react';

export function logProps(WatchedComponent) {
    return class LoggerHOCComponent extends React.Component {

        componentWillReceiveProps(nextProps) {
            console.log('Next props: ', nextProps);
        }

        render() {
            return <WatchedComponent  {...this.props}/>
        }
    }
}
