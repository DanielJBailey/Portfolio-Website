import React from 'react';
// import Overlay from './Overlay';
import '../styles/app.scss';

class Home extends React.Component {

    state = {
        overlayOpen: true,
        currentPage: 1
    }

    toggleOverlay = () => {
        console.log('made it');
        let { overlayOpen } = this.state;
        this.setState({
            overlayOpen: !overlayOpen
        })
    }

    render() {
        // let {overlayOpen} = this.state;
        return (
            <>
                {/* <Overlay open={overlayOpen} toggle={this.toggleOverlay}/> */}
                <div className="open-menu">
                    menu
                    </div>
                <section id="home" className="section">
                    <h1 className="name">Daniel Bailey</h1>
                    <h3 className="title">Software Engineer <span style={{ color: "#A9BCD0" }}>|</span> SLC, Utah</h3>
                </section>
            </>
        )
    }

}

export default Home;