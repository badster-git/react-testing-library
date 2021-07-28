import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  describe('initialized with defaultCount=10 and description="WWW"', () => {
    let fetch;
    beforeEach(() => {
      render(<Counter defaultCount={10} description="WWW" />);
      fetch = jest.fn(() => Promise.resolve());
    });

    it('renders "Current Count: 10"', () => {
      expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
    });

    it('renders title as "WWW"', () => {
      expect(screen.getByText(/WWW/)).toBeInTheDocument();
    });

    describe("when incrementor is 5 and '+' is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        user.click(screen.getByRole("button", { name: "Add to Counter" }));
      });

      it('renders "Current count: 15"', () => {
        expect(screen.getByText("Current Count: 15")).toBeInTheDocument();
      });
    });

    describe("when incrementor is 5 and '-' is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        user.click(
          screen.getByRole("button", { name: "Subtract from Counter" })
        );
      });

      it("renders 'Current count: 5'", () => {
        expect(screen.getByText("Current Count: 5")).toBeInTheDocument();
      });
    });
  });

  describe('initialized with defaultCount=0 and description="My Counter"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description="My Counter" />);
    });

    it('renders "Current Count: 0"', () => {
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    });

    it('renders title as "MyCounter"', () => {
      expect(screen.getByText(/My Counter/)).toBeInTheDocument();
    });

    describe("when + is clicked", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "Add to Counter" }));
      });

      it('renders "Current count: 1"', () => {
        expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
      });
    });

    describe("when - is clicked", () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole("button", { name: "Subtract from Counter" })
        );
      });

      it("defaultCount=0, and - clicked then counter = -1", () => {
        expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
      });
    });
  });
});
