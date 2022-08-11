import { 

  Box,

  Text,

  Tag
 } from "flexibull-meme";
import { Theme } from "./../config/theme";



import { lighten } from 'polished';
import { stringToHslColor } from "./../utils/utils";



export const Card = ({elem, selectedCharacters, handleFavorite}) => {
    return (
       <Box key={elem.id} style={{ borderRadius: Theme.SecondaryRadius }}>
                <Box
                  pad="25px"
                  background="#fff"
                  style={{ borderRadius: `${Theme.SecondaryRadius} ${Theme.SecondaryRadius} 0 0` }}
                >
                  <Box>
                    <Text block bold capitalize size="16px">
                      {elem.name}
                    </Text>
                    <Box onClick={() => handleFavorite(elem)} style={{ cursor: "pointer" }} align="right" margin="-25px 0 0 0">
                    <Text color='red' size="20px">
                             {selectedCharacters.includes(elem.id) ? <i className="form-heart" /> : <i className="form-heart-empty" />}
                            </Text>
                    </Box>
                            
                          
                  </Box>

                  <Box display="flex" margin="25px 0 0">
                    <Box width="33%">
                      <Text block size="10px" uppercase color={Theme.PrimaryGrey}>
                        Gender
                      </Text>
                      <Text block capitalize size="12px">
                        {elem.gender}
                      </Text>
                    </Box>
                    <Box width="33%">
                      <Text block size="10px" uppercase color={Theme.PrimaryGrey}>
                        BirthYear
                      </Text>
                      <Text block capitalize size="12px">
                        {elem.birthYear}
                      </Text>
                    </Box>
                    <Box width="33%">
                      <Text block size="10px" uppercase color={Theme.PrimaryGrey}>
                        Planet
                      </Text>
                      <Text block capitalize size="12px">
                        {elem.planet}
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box
                  pad="25px"
                  background={lighten(0.75, Theme.PrimaryFontColor)}
                  style={{ borderRadius: `0 0 ${Theme.SecondaryRadius} ${Theme.SecondaryRadius}` }}
                >
                <Box pad="0 0 20px 0" align="center">
                <Text block bold align="center" capitalize size="12px">
                        Movies
                      </Text>
                </Box>
                
                  {elem.films.map((film, index) => (
                    <Tag
                                              solid
                                              small
                                              color={stringToHslColor(
                                                film,
                                                70,
                                                80
                                              )}
                                              fontColor={stringToHslColor(
                                                film,
                                                50,
                                                30
                                              )}
                                              spaceRight
                                              style={{ marginBottom: "10px" }}
                                              key={index}
                                            >
                                              <Text
                                                bold
                                                uppercase
                                                size="9px"
                                                style={{ opacity: 0.8 }}
                                              >
                                                {film}
                                              </Text>
                                            </Tag>
                  ))}
                </Box>
              </Box>
    );
};