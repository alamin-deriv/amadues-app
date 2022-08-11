import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "./../App";
import { GET_STAR_WAR_DATA } from "./../GraphQl/Queries";

const mocks = [
  {
    request: {
      query: GET_STAR_WAR_DATA,
    },
    result: {
      data: {
        allPeople: {
          people: [
            {
              name: "Luke Skywalker",
              id: "cGVvcGxlOjE=",
              gender: "male",
              height: 172,
              birthYear: "19BBY",
              homeworld: {
                name: "Tatooine",
                __typename: "Planet",
              },
              filmConnection: {
                films: [
                  {
                    id: "ZmlsbXM6MQ==",
                    title: "A New Hope",
                    __typename: "Film",
                  },
                  {
                    id: "ZmlsbXM6Mg==",
                    title: "The Empire Strikes Back",
                    __typename: "Film",
                  },
                  {
                    id: "ZmlsbXM6Mw==",
                    title: "Return of the Jedi",
                    __typename: "Film",
                  },
                  {
                    id: "ZmlsbXM6Ng==",
                    title: "Revenge of the Sith",
                    __typename: "Film",
                  },
                ],
                __typename: "PersonFilmsConnection",
              },
              __typename: "Person",
            },
          ],
        },
        allFilms: {
          films: [
            {
              id: "ZmlsbXM6MQ==",
              title: "A New Hope",
              __typename: "Film",
            },
          ],
        },
      },
    },
  },
];

const Component = (
  <MockedProvider mocks={mocks} addTypename={false}>
    <App />
  </MockedProvider>
);

it("renders without error", async () => {
  render(Component);
  expect(await screen.findByText("Star War Characters")).toBeInTheDocument();
});

it("renders download button", async () => {
  render(Component);
  expect(
    await screen.findByText("Download favourite characters")
  ).toBeInTheDocument();
});

it("renders select input", async () => {
  render(Component);
  expect(await screen.findByText("Select film")).toBeInTheDocument();
});

it("renders error messese", async () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(
    await screen.findByText("Something went wrong please try again.")
  ).toBeInTheDocument();
});

it("display at least one character", async () => {
  render(Component);
  expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();
});

it("display at least one film", async () => {
  render(Component);
  expect(await screen.findByText("Return of the Jedi")).toBeInTheDocument();
});
