import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import "./assets/fonts/fontello/css/flexiform.css";
import styled from "styled-components";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { GET_STAR_WAR_DATA } from "./GraphQl/Queries";

import { Layout, Box, Loader, Grid, EmptyState } from "flexibull-meme";
import { Theme } from "./config/theme";

const StyledDiv = styled.div`
  margin: 0 auto;
  padding: 100px 50px;
  width: 80%;
`;

function App() {
  const { loading, error, data } = useQuery(GET_STAR_WAR_DATA);

  const [allCharacters, setAllCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [downloadData, setDownloadData] = useState([]);

  const handleOrganisePeople = (data) => {
    const organisedData = data?.allPeople?.people.map((person) => {
      return {
        id: person.id,
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        planet: person.homeworld?.name,
        films: person.filmConnection?.films.map((film) => film.title),
      };
    });

    return organisedData;
  };

  useEffect(() => {
    if (data) {
      setAllCharacters(handleOrganisePeople(data));
    }
  }, [data]);

  if (loading)
    return (
      <Box pad="150px 0">
        <Loader color={Theme.PrimaryColor} section />
      </Box>
    );

  if (error)
    return (
      <EmptyState type="users" title="Something went wrong please try again." />
    );

  const handleFilter = (movie) => {
    if (movie === "All") {
      setAllCharacters(handleOrganisePeople(data));
      return;
    }

    const filterData = allCharacters.filter((person) => {
      return person.films.includes(movie);
    });

    setAllCharacters(filterData);
  };

  const handleFavorite = (character) => {
    if (selectedCharacters.includes(character.id)) {
      const filterIds = selectedCharacters.filter(
        (item) => item !== character.id
      );
      const filteredCharacters = allCharacters.filter(
        (item) => item !== character.id
      );
      setSelectedCharacters(filterIds);
      setDownloadData(filteredCharacters);
    } else {
      setSelectedCharacters([...selectedCharacters, character.id]);
      setDownloadData([...downloadData, character]);
    }
  };

  return (
    <Layout theme={Theme}>
      <StyledDiv>
        <Header
          data={data}
          downloadData={downloadData}
          selectedCharacters={selectedCharacters}
          handleFilter={handleFilter}
        />

        <Grid default="1fr 1fr 1fr" gap="30px">
          {allCharacters.map((elem) => (
            <Card
              handleFavorite={handleFavorite}
              selectedCharacters={selectedCharacters}
              key={elem.id}
              elem={elem}
            />
          ))}
        </Grid>
      </StyledDiv>
    </Layout>
  );
}

export default App;
