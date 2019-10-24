import React from 'react';
import Commentbar from './Commentbar.jsx';
import ArtistInfo from './ArtistInfo.jsx';
import TrackInfo from './TrackInfo.jsx';
import Comments from './Comments';
import './styles.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
        }
    };


    handleAdd(newComment){
        Axios.post('/newcomment', newcomment)
        .then((songComments) => {
            this.setState({
                comments: comments.data,
            })
        })
    }

    render() {
        return(
            <div className='comments-component'>
                <Commentbar/>
                <div className='flex-lower'>
                    <ArtistInfo/>
                    <div className='flex-lower-right'>
                        <TrackInfo/>
                        <Comments/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default App;