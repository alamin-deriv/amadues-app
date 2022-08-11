import styled from 'styled-components';
import { 
  Box,
  Button,
  Select,
  Text,
  Grid,
 } from "flexibull-meme";
 import { CSVLink } from "react-csv";

const StyledHeader = styled.header`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
`;


export const Header = ({data, handleFilter, selectedCharacters, downloadData}) => {
    return (
        <StyledHeader>
               <Grid default="1fr 1fr 1fr">
        <Box>
            <Select
                data-testid="select-input"
                placeholder="Select film"
                width={250}
                onChange={(e) => handleFilter(e.label)}
                options={[
                    { value: 'all', label: 'All'},
                    ...data?.allFilms?.films.map(film => ({
                  label: film.title,
                  value: film.id,
                }))
                ]}
                
              />
        </Box>
        <Box pad="5px 0 0 0" align="center"><Text bold block size="20px">Star War Characters</Text></Box>
        <Box align="right">
              
        {selectedCharacters.length ? (
             <CSVLink data={downloadData} filename={"favourite-characters.csv"} target="_blank">
              <Button disabled={!selectedCharacters.length}>
              Download favourite characters
              </Button>
              </CSVLink>
        ) : (
            <Button disabled={!selectedCharacters.length}>
              Download favourite characters
              </Button>
        )}
             
                
              
            </Box>
    </Grid>
        </StyledHeader>
    );
};