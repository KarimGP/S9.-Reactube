import React from 'react';
import { Grid } from '@material-ui/core';
import Searchbar from './components/SearchBar';
import VideoInfo from './components/VideoInfo';
import sourceApi from './api/sourceApi';
import VideoList from './components/VideoList';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    }

    handleSubmit = async (termFromSearchBar) => {
        const response = await sourceApi.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'API_KEY',
                q: termFromSearchBar,
            }
        });

        this.setState({ video: response.data.items, selectedVideo: response.data.items[0] });
    }

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Searchbar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoInfo video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;

