import React, { Fragment, useState } from "react";
import classes from "./DeleteMovie.module.css";
import Modal from "../../UI/Modal";
import useHttp from "../../hooks/useHttp";
import Loader from "../../utils/Loader";
import { FcOk } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { DeleteMovieItem } from "../../store/MovieStore";

function DeleteMovie(props) {
  let { isLoading, iserror: error, sendRequest } = useHttp();
  let dispatch = useDispatch();
  const [confrimDelete, setConfrimDelete] = useState(true);
  let movieDetailsData = useSelector((data) => data.MovieStore.movieDetails);
  function closeModelPopup(params) {
    props.closeMovieModel();
  }
  function deleteMovieFromList(event) {
    setConfrimDelete(false);
    async function getProductData() {
      dispatch(DeleteMovieItem(movieDetailsData.id));
    }

    getProductData();
  }

  return (
    <Fragment>
      {confrimDelete && (
        <Modal>
          <div className={classes.movieDeletePopup}>
            <div className={classes.DeleteMovieHeading}>
              <h1>Delete Movie</h1>
              <span
                className={classes.close}
                aria-hidden="true"
                onClick={closeModelPopup}
              >
                &times;
              </span>
            </div>

            <p>Are you sure you want to delete this movie?</p>
            <div className={classes.confirmButton}>
              <button onClick={deleteMovieFromList}>Confirm</button>
            </div>
          </div>
        </Modal>
      )}
      {!confrimDelete && (
        <Modal>
          <div className={classes.movieDeleteFinalPopup}>
            <span
              className={`${classes["close"]} ${classes["moveToRight"]}`}
              aria-hidden="true"
              onClick={closeModelPopup}
            >
              &times;
            </span>
            {!error && isLoading && (
              <div className={classes.centerTheText}>
                <Loader></Loader>
              </div>
            )}
            {error && (
              <div className={classes.centerTheText}>
                <p className={classes.errorFailure}>😞{error}</p>
              </div>
            )}
            {!error && !isLoading && (
              <div className={classes.centerTheText}>
                <div className={classes.sucessData}>
                  <FcOk className={classes.sucessMessageIcon}></FcOk>
                  <p className={classes.errorFailure}>
                    Sucessfully Deleted Movie
                  </p>
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </Fragment>
  );
}

export default DeleteMovie;
