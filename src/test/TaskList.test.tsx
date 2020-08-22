import React from "react";
import { render } from "@testing-library/react";
import { WithPinnedTasks } from "../components/TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
    const { getByText } = render(<WithPinnedTasks />);
    const lastTaskInput = getByText(/Task 6/i);

    expect(lastTaskInput).not.toBeNull();
});
