import React from "react";
import { render } from "@testing-library/react";
import { WithPinnedTasks } from "../stories/TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
    const { getByTestId } = render(<WithPinnedTasks />);
    const checkedInput = getByTestId("checkbox-6") as HTMLInputElement;

    expect(checkedInput.checked).toEqual(true);
});
