import React, { Fragment, useState } from "react";
import classes from "./DeleteMovie.module.css";
import Modal from "../../UI/Modal";
import useHttp from "../../hooks/useHttp";
import Loader from "../../utils/Loader";
import { FcOk } from "react-icons/fc";

function DeleteMovie(props) {
  let { isLoading, iserror: error, sendRequest } = useHttp();
  const [confrimDelete, setConfrimDelete] = useState(true);
  function closeModelPopup(params) {
    props.closeMovieModel();
  }
  console.log(props.deleteMovie.movieId);
  function deleteMovieFromList(event) {
    setConfrimDelete(false);
    let requestconfig;
    async function getProductData() {
      requestconfig = {
        url: "http://localhost:4000/movies/" + props.deleteMovie.movieId,
        // url: "http://localhost:4000/movies/" + "123",

        method: "DELETE",
      };

      await sendRequest(requestconfig, getMovieResponse);
    }

    function getMovieResponse(data) {}
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
