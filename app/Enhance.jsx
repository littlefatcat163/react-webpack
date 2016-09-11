import React from "react";

export let Enhance = ComposedComponent => class extends React.Component {

    //static displayName = 'ComponentEnhancedWithIntervalHOC';

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
        console.log(ComposedComponent);
    }

    componentDidMount() {
        //this.interval = setInterval(this.tick.bind(this), 1000);
        console.log("......");
    }

    componentWillUnmount() {
        //clearInterval(this.interval);
    }

    own(o) {
      console.log(o);
    }

    render() {
        return <ComposedComponent {...this.props} {...this.state} />;
    }
};
