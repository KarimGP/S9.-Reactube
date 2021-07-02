import React from 'react';
import { Grid } from '@material-ui/core';
import Searchbar from './components/SearchBar';
import VideoInfo from './components/VideoInfo';
import sourceApi from './api/sourceApi';
//import { VideoList } from './components/VideoList';


class App extends React.Component {
    state = {
        video: [],
        selectedVideo: null,
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await sourceApi.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyC3UluMI-5lmxYFy2-lUurY53f8nnIbJ8c',
                q: termFromSearchBar,
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render() {
        const { selectedVideo } = this.state;
        return (
            <Grid justify='center' container spacing={10}>
                <Grid item xs={14}>
                    <Grid container spacing={10}>
                        <Grid item xs={14}>
                            <Searchbar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={10}>
                            <VideoInfo video={selectedVideo} />
                        </Grid>
                        <Grid item xs={6}>
                            {/*video list*/}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App;