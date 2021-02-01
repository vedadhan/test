import React, { useState, useCallback} from 'react';
import { makeStyles, Checkbox, Paper, Grid, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  root: { display: 'flex' },
  left: { width: '50%', 
  boxSizing: 'border-box',
  border: '2px solid #000',
  padding: '0 5px'
},
  right: { width: '50%',
  boxSizing: 'border-box',
  border: '2px solid #000',
  padding: '0 5px'
}
}));

const data = {
  Portugal: [
    { id: 1, label: 'Aasiya Jayavant', checked: false },
    { id: 2, label: 'Luvfeen Lawrence', checked: false },
    { id: 3, label: 'Rey Mibourne', checked: false },
    { id: 4, label: 'Cayla Brister', checked: false }
  ],
  Nicaragua: [
    { id: 1, label: 'Deevaadas Nandi', checked: false },
    { id: 2, label: 'Obasey Chidy', checked: false },
    { id: 3, label: 'Xenie Dolezelova', checked: false },
    { id: 4, label: 'Ezequiel dengra', checked: false }
  ],
  Marshall: [
    { id: 1, label: 'Aaron Almaraz', checked: false },
    { id: 2, label: 'Jelena Denisova', checked: false }
  ]
};

const MainFile = () => {
  const classes = useStyles();

  const [res, setRes] = useState({});

  const handleChange = useCallback(
    (ob, el) => (e) => {
      if (e.target.checked && !(res[ob] || []).find((x) => x.id === el.id))
        setRes({
          ...res,
          [ob]: res[ob] && res[ob].length ? [...res[ob], el] : [el]
        });
    },
    [res]
  );

  const handleChange1 = useCallback(
    (ob, el) => (e) => {
     // if (e.target.checked)
        setRes({
          ...res,
          [ob]: res[ob].filter((x) => x.id !== el.id)
        });
    },
    [res]
  );

  return (
    <div className={classes.root}>
      <Paper className={classes.left}>
        
        {Object.keys(data).map((ob) => (
          <Grid key="1">
            <div>
              <h2>{ob}</h2>
            {data[ob].map((el) => (
              <Grid key="2" item xs={12}>
                <Checkbox onChange={handleChange(ob, el)} />
                <span>{el.label}</span>
              </Grid>
            ))}
            </div>
          </Grid>
        ))}
      </Paper>
      <Paper className={classes.right}>
        {Object.keys(res).map((ob) => (
          <Grid key="1">
            <div>
              {res && res[ob] && res[ob].length ? <h2>{ob}</h2> : null }
            {res[ob].map((el) => (
              <Grid key="2" item xs={12}>
                <span>{el.label}</span>
                <IconButton> <CloseIcon onClick={handleChange1(ob, el)} /> </IconButton> 
              </Grid>
            ))}
            </div>
          </Grid>
        ))}
      </Paper>
    </div>
  );
};

export default MainFile;