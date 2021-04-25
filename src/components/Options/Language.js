import React, { useContext } from "react";
import { Dropdown, Grid } from "semantic-ui-react";
import { NewsContext } from "../../context/NewsContext";

const CountryComp = () => {
  const { country, changeCountry } = useContext(NewsContext);
  const options = [
    { key: "us", value: "us", text: "USA" },
    { key: "tr", value: "tr", text: "Türkiye" },
  ];
  const handleChange = (e, { value }) => {
    changeCountry(value);
  };

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Dropdown
          onChange={handleChange}
          options={options}
          placeholder="Choose an option"
          selection
          value={options.text}
        />
        <pre>
          {country === "tr" ? (
            <img
              alt=""
              width="50"
              height="40"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/240px-Flag_of_Turkey.svg.png"
            />
          ) : (
            <img
              alt=""
              width="50"
              height="40"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/200px-Flag_of_the_United_States.svg.png"
            />
          )}
        </pre>
      </Grid.Column>
    </Grid>
  );
};

export default CountryComp;
