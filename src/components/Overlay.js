import React from 'react';
import '../styles/overlay.scss';


class Overlay extends React.Component {

    state = {
        progress: 0
    }

    componentDidMount() {
        this.updateProgress();
    }

    updateProgress = () => {
        let update = setInterval(this.updateProgress,100)
        let {progress} = this.state;
        let {toggle, open} = this.props;
        if(progress === 100) {
            clearInterval(update);
        } else {
            this.setState({
                progress: progress + 1
            })
        }
    }

    render() {
        let {progress} = this.state;
        let {open} = this.props;
        return(
            <div className={open ? "overlay active" : "overlay"}>
                <p>Loading...</p>
                <div className="progress-bar">
                    <div className = "progress" style={{width: `${progress}%`}}></div>
                </div>
            </div>
        )
    }

}
    


export default Overlay;