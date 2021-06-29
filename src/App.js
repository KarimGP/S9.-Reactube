import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

function App() {
    return (
        <Grid justify='center' container spacing={20}>
          <Grid item xs={14}>
              <Grid container spacing={20}>
                  <Grid item xs={14}>
                      {/*searcher*/}
                  </Grid>
                    <Grid item xs={10}>
                        {/*video info*/}
                    </Grid>
                    <Grid item xs={6}>
                        {/*video list*/}
                    </Grid>
              </Grid>
          </Grid>
        </Grid>
    );
  }
  
  export default App;