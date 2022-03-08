import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Routes from "./Routes";
import TEST_DOGS from "./testDogg";

describe("routes test", function () {
  it("renders a single dogg", function () {
    const { debug, container, getByText } = render(
      <MemoryRouter initialEntries={["/dogs/snoop"]}>
        <Routes dogList={TEST_DOGS} />
      </MemoryRouter>
    );

    const munkhies = getByText(/munkhies/i);
    expect(munkhies).toBeInTheDocument();
  });

  it("renders dog list if endpoint does not exist", function () {
    const { debug, container } = render(
      <MemoryRouter initialEntries={["/dogs/snoopy"]}>
        <Routes dogList={TEST_DOGS} />
      </MemoryRouter>
    );

    const img = container.querySelectorAll("img");
    expect(img.length).toEqual(4);
  });

  it("renders dog list", function () {
    const { debug, container, getByText } = render(
      <MemoryRouter initialEntries={["/dogs/"]}>
        <Routes dogList={TEST_DOGS} />
      </MemoryRouter>
    );

    const img = container.querySelectorAll("img");
    expect(img.length).toEqual(4);
  });
});