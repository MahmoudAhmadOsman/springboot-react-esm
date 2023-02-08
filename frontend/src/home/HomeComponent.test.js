import { render, screen } from "@testing-library/react";
import HomeComponent from "./HomeComponent";

test("renders Home Component header", () => {
	render(<HomeComponent />);
	screen.debug();
	expect(screen.getByText("Welcome to eforce systems")).toBeInTheDocument();
});
