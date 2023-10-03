import React, {
  useState,
  useRef,
  useImperativeHandle,
  useEffect,
  Fragment,
} from "react";
import Modal from "../../UI/Modal";
import classes from "./MovieAddEdit.module.css";
import Select from "react-select";
import useHttp from "../../hooks/useHttp";
import UseInput from "../../hooks/use-Input";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FcOk } from "react-icons/fc";
import Loader from "../../utils/Loader";
import FocusTrap from "focus-trap-react";
import { useDispatch, useSelector } from "react-redux";
import { updateMoviesItems, postMoviesItems } from "../../store/MovieStore";
import { movieActions } from "../../store/MovieStore";

function MovieAddEdit(props) {
  const optionsValues = ["Crime", "Documentary", "Horror", "Comedy"];
  const [selectedOption, setSelectedOption] = useState(optionsValues);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectedItems, setSelectedItems] = useState("");
  const [formValid, setFormIsValid] = useState(false);
  const [confrimAdding, setConfrimAdding] = useState(false);
  let { isLoading, iserror: error, sendRequest } = useHttp();
  let dispatch = useDispatch();

  let moviedetails = useSelector((data) => data.MovieStore.movieDetails);
  console.log(moviedetails);

  let {
    inputValue: TitleInputValue,
    inputValueIsValid: TitleInputValueISValid,
    textInputHandler: TitleTextInputHandler,
    tochedInputHandler: TitleTochedInputHandler,
    isInputHasError: TitleIsTochedHasError,
    reset: TitleReset,
  } = UseInput((value) => {
    return value.length > 7;
  });

  let {
    inputValue: ReleaseDateInputValue,
    inputValueIsValid: ReleaseDateValueISValid,
    textInputHandler: ReleaseDateTextInputHandler,
    tochedInputHandler: ReleaseDateTochedInputHandler,
    isInputHasError: ReleaseDateIsTochedHasError,
    reset: ReleaseDateReset,
  } = UseInput((value) => {
    return !isNaN(new Date(value));
  });

  let {
    inputValue: MovieURLInputValue,
    inputValueIsValid: MovieURLTextInputIsValid,
    textInputHandler: MovieURLTextInputHandler,
    tochedInputHandler: MovieURLTochedInputHandler,
    isInputHasError: MovieURLIsTochedHasError,
    reset: MovieURLReset,
  } = UseInput((values) => {
    try {
      new URL(values);
      return true;
    } catch (err) {
      return false;
    }
  });

  let {
    inputValue: MovieRatingInputValue,
    inputValueIsValid: MovieRatingTextInputIsValid,
    textInputHandler: MovieRatingTextInputHandler,
    tochedInputHandler: MovieRatingTochedInputHandler,
    isInputHasError: MovieRatingIsTochedHasError,
    reset: MovieRatingReset,
  } = UseInput((value) => {
    if (isNaN(value)) {
      return false;
    } else return true;
  });

  let {
    inputValue: MovieRunTimeInputValue,
    inputValueIsValid: MovieRunTimeTextInputIsValid,
    textInputHandler: MovieRunTimeTextInputHandler,
    tochedInputHandler: MovieRunTimeTochedInputHandler,
    isInputHasError: MovieRunTimeIsTochedHasError,
    reset: MovieRunTimeReset,
  } = UseInput((value) => {
    if (isNaN(value)) {
      return false;
    } else return true;
  });

  let {
    inputValue: MovieOverViewInputValue,
    inputValueIsValid: MovieOverViewTextInputIsValid,
    textInputHandler: MovieOverViewTextInputHandler,
    tochedInputHandler: MovieOverViewTochedInputHandler,
    isInputHasError: MovieOverViewIsTochedHasError,
    reset: MovieOverViewReset,
  } = UseInput((value) => value.length > 3);

  useEffect(() => {
    if (
      MovieOverViewTextInputIsValid &&
      MovieRunTimeTextInputIsValid &&
      MovieRatingTextInputIsValid &&
      MovieURLTextInputIsValid &&
      ReleaseDateValueISValid &&
      TitleInputValueISValid
    )
      setFormIsValid(true);
    else setFormIsValid(false);
  }, [
    TitleInputValueISValid,
    ReleaseDateValueISValid,
    MovieURLTextInputIsValid,
    MovieRatingTextInputIsValid,
    MovieRunTimeTextInputIsValid,
    MovieOverViewTextInputIsValid,
  ]);

  useEffect(() => {
    setSelectedOption(optionsValues);
    if (props.name == "Edit") {
      TitleTextInputHandler(moviedetails.title);
      ReleaseDateTextInputHandler(moviedetails.release_date);
      MovieURLTextInputHandler(moviedetails.poster_path);
      MovieRatingTextInputHandler(moviedetails.vote_average);
      MovieRunTimeTextInputHandler(moviedetails.runtime);
      MovieOverViewTextInputHandler(moviedetails.overview);
      setSelectedOption(moviedetails.genres);
      setSelectedItems(moviedetails.genres);
    }
  }, [props.name, moviedetails]);

  function submitHandlerData(event) {
    event.preventDefault();
    setConfrimAdding(true);

    if (moviedetails) {
      let updateValues = {
        ...moviedetails,
        title: TitleInputValue,
        vote_average: Number(MovieRatingInputValue),
        release_date: ReleaseDateInputValue,
        poster_path: MovieURLInputValue,
        overview: MovieOverViewInputValue,
        runtime: Number(MovieRunTimeInputValue),
        genres: selectedItems,
      };
      let requestconfig;
      async function getProductData() {
        dispatch(updateMoviesItems(updateValues));
      }
      getProductData();
    } else {
      let postingNewData = {
        title: TitleInputValue,
        tagline: "Here's to the fools who dream.",
        vote_average: Number(MovieRatingInputValue),
        vote_count: Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000,
        release_date: ReleaseDateInputValue,
        poster_path: MovieURLInputValue,
        overview: MovieOverViewInputValue,
        budget:
          Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000,
        revenue:
          Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000,
        runtime: Number(MovieRunTimeInputValue),
        genres: selectedItems,
      };
      let requestconfig;
      async function getProductData() {
        dispatch(postMoviesItems(postingNewData));
      }
      getProductData();

      function getMovieResponse(data) {
        // if (data) props.closeAddEditMovie();
      }
    }
  }

  function resetHandlerFunction(event) {
    event.preventDefault();
    TitleReset();
    ReleaseDateReset();
    MovieURLReset();
    MovieRunTimeReset();
    MovieRatingReset();
    MovieOverViewReset();
    setSelectedItems("");
  }

  function closeAddEditMoviesData(params) {
    props.closeAddEditMovie();
  }
  function checkBoxHandler(e) {
    let isSelected = e.target.checked;
    console.log(isSelected);
    let value = e.target.value;
    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems((prevData) => {
        return prevData.filter((valuesData) => valuesData !== value);
      });
    }
  }

  function showOptions() {
    setOpenDropDown((prev) => !prev);
  }

  return (
    <Fragment>
      {!confrimAdding && (
        <Modal>
          <FocusTrap focusTrapOptions={{ initialFocus: "#title" }}>
            <div className={classes.MovieAddEdit}>
              <div className={classes.movieHeading}>
                <h1>{props.name} Movie</h1>
                <span
                  className={classes.close}
                  aria-hidden="true"
                  onClick={closeAddEditMoviesData}
                >
                  &times;
                </span>
              </div>
              <form className={classes.movieForm}>
                <div className={classes.formSomeOfFields}>
                  <div className={classes.formScrollBar}>
                    <div className={classes.FormTitle}>
                      <label>Title</label>
                      <input
                        placeholder="Enter Title"
                        onChange={TitleTextInputHandler}
                        value={TitleInputValue}
                        onBlur={TitleTochedInputHandler}
                        // autoFocus
                        type="text"
                        id="title"
                      ></input>
                      <span className={classes.errorHandling}>
                        {TitleIsTochedHasError && "Please Entered Valid Title"}
                      </span>
                    </div>
                    <div className={classes.ReleaseDate}>
                      <label>Release Date</label>

                      <input
                        placeholder="Enter Release Date"
                        onChange={ReleaseDateTextInputHandler}
                        value={ReleaseDateInputValue}
                        onBlur={ReleaseDateTochedInputHandler}
                        type="date"
                        id="releaseDate"
                      ></input>
                      <span className={classes.errorHandling}>
                        {ReleaseDateIsTochedHasError &&
                          "Please Entered Valid Release Date"}
                      </span>
                    </div>
                    <div className={classes.MovieURL}>
                      <label>Movie URL</label>

                      <input
                        placeholder="https://"
                        onChange={MovieURLTextInputHandler}
                        value={MovieURLInputValue}
                        onBlur={MovieURLTochedInputHandler}
                        type="text"
                        id="movieurl"
                      ></input>
                      <span className={classes.errorHandling}>
                        {MovieURLIsTochedHasError &&
                          "Please Entered Valid Movie URL"}
                      </span>
                    </div>
                    <div className={classes.MoiveRating}>
                      <label>Rating</label>

                      <input
                        placeholder="Enter Rating"
                        onChange={MovieRatingTextInputHandler}
                        value={MovieRatingInputValue}
                        onBlur={MovieRatingTochedInputHandler}
                        type="number"
                        id="movieRating"
                      ></input>
                      <span className={classes.errorHandling}>
                        {MovieRatingIsTochedHasError &&
                          "Please Entered Valid Movie Rating"}
                      </span>
                    </div>
                    <div className={classes.MoiveGenre}>
                      <label>Genere</label>
                      <div className={classes.dropdown} onClick={showOptions}>
                        Select Genere
                        <AiOutlineCaretDown></AiOutlineCaretDown>
                      </div>
                      <div
                        id={classes.options}
                        style={{ display: openDropDown ? "flex" : "none" }}
                      >
                        {selectedOption &&
                          selectedOption.map((obj, index) => (
                            <li key={index}>
                              <input
                                type="checkbox"
                                id={classes.inputcheckboxes}
                                value={obj}
                                onChange={checkBoxHandler}
                                checked={
                                  selectedItems && selectedItems.includes(obj)
                                }
                              />
                              <div>{obj}</div>
                            </li>
                          ))}
                      </div>
                    </div>
                    <div className={classes.MovieRunTime}>
                      <label>Run Time</label>

                      <input
                        placeholder="Minutes"
                        onChange={MovieRunTimeTextInputHandler}
                        value={MovieRunTimeInputValue}
                        onBlur={MovieRunTimeTochedInputHandler}
                        type="number"
                        id="runTime"
                      ></input>
                      <span className={classes.errorHandling}>
                        {MovieRunTimeIsTochedHasError &&
                          "Please Entered Valid Movie Run Time"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={classes.textarea}>
                  <label>Over View</label>
                  <textarea
                    placeholder="Movie Description"
                    onChange={MovieOverViewTextInputHandler}
                    value={MovieOverViewInputValue}
                    onBlur={MovieOverViewTochedInputHandler}
                    type="text"
                    id="movieRating"
                    className={classes.overviewTextarea}
                  ></textarea>
                  <span className={classes.errorHandling}>
                    {MovieOverViewIsTochedHasError &&
                      "Please Entered Valid Movie OverView"}
                  </span>
                </div>
                <div className={classes.buttonsforSubmit}>
                  <button onClick={resetHandlerFunction}>Reset</button>
                  <button onClick={submitHandlerData} disabled={!formValid}>
                    {props.buttonName}
                  </button>
                </div>
              </form>
            </div>
          </FocusTrap>
        </Modal>
      )}

      <FocusTrap>
        {confrimAdding && (
          <Modal>
            <div className={classes.movieDeleteFinalPopup}>
              <span
                className={`${classes["close"]} ${classes["moveToRight"]}`}
                aria-hidden="true"
                onClick={closeAddEditMoviesData}
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
                    <p className={classes.errorFailure}>Congratulations</p>
                    <p className={classes.errorFailure}>
                      The Movie has been added to database successfully
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Modal>
        )}
      </FocusTrap>
    </Fragment>
  );
}

export default MovieAddEdit;
