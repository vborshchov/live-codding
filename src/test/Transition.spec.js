import Transition from "../examples/Transition.svelte";
import { render, cleanup } from "@testing-library/svelte";
import "jest-dom/extend-expect";

beforeEach(cleanup);
describe("Transition", () => {
  test("should render Show/Hide button", () => {
    const { getByText } = render(Transition);

    expect(getByText("Show/Hide"));
  });

  test("should hide message text after click", () => {
    const { getByText } = render(Transition);

    getByText("Show/Hide").click();
    const message = getByText("fades in and out");
    setTimeout(() => {
      expect(message).not.toBeInTheDocument();
    }, 0)

  });
});
