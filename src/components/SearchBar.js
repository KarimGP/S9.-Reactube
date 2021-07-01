import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    State = {
        termFromSearchBar: '',
    }

    handleChange = (event) => this.setState({ termFromSearchBar: event.target.value });

    handleSubmit = (event) => {
        const { termFromSearchBar } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(termFromSearchBar);

        event.preventDefault();
    }

    render() {
        return (
            <Paper elevation={4} style={{ padding: '10px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label='Buscar' onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;