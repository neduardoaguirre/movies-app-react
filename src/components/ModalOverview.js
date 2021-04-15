import React, { useContext, useState } from 'react';
import { OverviewContext } from '../context/Overview';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      maxHeight: '100%',
      padding: theme.spacing(2.5, 2.5, 2.5),
    },
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    maxHeight: '100vh',
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
  },
}));

const ModalOverview = ({ open, setOpen }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const { info, setMovieId } = useContext(OverviewContext);
  const { genres, title, overview } = info;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setMovieId(null);
        handleClose();
      }}
    >
      <div style={modalStyle} className={`scroll ${classes.paper}`}>
        <h3>{title}</h3>
        <div>
          {genres
            ? genres.map((genre) => (
                <span className="badge badge-info mr-1" key={genre.id}>
                  {genre.name}
                </span>
              ))
            : null}
        </div>
        <p className="mt-3">{overview}</p>
      </div>
    </Modal>
  );
};

export default ModalOverview;
