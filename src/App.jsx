import React from "react";

import { connect } from "react-redux";
import { setDataByCountry, setCountry } from "./redux/covid/covid.actions";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";
import coronaImage from "./images/image.png";

class App extends React.Component {
  async componentDidMount() {
    const { setDataByCountry } = this.props;
    const fetchedData = await fetchData();
    setDataByCountry(fetchedData);
  }

  handleCountryChange = async (country) => {
    const { setDataByCountry, setCountry } = this.props;
    const fetchedData = await fetchData(country);
    setDataByCountry(fetchedData);
    setCountry(country);
  };

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="covid19" />
        <Cards />
        <CountryPicker countryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDataByCountry: (data) => dispatch(setDataByCountry(data)),
  setCountry: (country) => dispatch(setCountry(country)),
});

export default connect(null, mapDispatchToProps)(App);
