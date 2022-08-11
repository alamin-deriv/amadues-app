import styled from "styled-components";
import { Box, Button, Select, Text, Grid } from "flexibull-meme";
import { CSVLink } from "react-csv";
import device from "./../utils/device";

const StyledHeader = styled.header`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;

  @media ${device.tabletM} {
    width: 100%;
  }
`;

export const Header = ({
  data,
  handleFilter,
  selectedCharacters,
  downloadData,
}) => {
  return (
    <StyledHeader>
      <Grid default="1fr 1fr">
        <Box pad="5px 0 0 0">
          <Text bold block size="30px">
            Star War Characters
          </Text>
        </Box>
        <Box display="flex" align="right">
          <Select
            data-testid="select-input"
            placeholder="Select film"
            width={250}
            onChange={(e) => handleFilter(e.label)}
            options={[
              { value: "all", label: "All" },
              ...data?.allFilms?.films.map((film) => ({
                label: film.title,
                value: film.id,
              })),
            ]}
          />
          <Box>
            {selectedCharacters.length ? (
              <CSVLink
                data={downloadData}
                filename={"favourite-characters.csv"}
                target="_blank"
              >
                <Button spaceLeft disabled={!selectedCharacters.length}>
                  Download favourite characters
                </Button>
              </CSVLink>
            ) : (
              <Button spaceLeft disabled={!selectedCharacters.length}>
                Download favourite characters
              </Button>
            )}
          </Box>
        </Box>
      </Grid>
    </StyledHeader>
  );
};
