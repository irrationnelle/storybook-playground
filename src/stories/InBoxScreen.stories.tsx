import React from "react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

import { PureInboxScreen } from "../containers/InBoxScreen";
import { defaultTasksData } from "./TaskList.stories";

const store = {
    getState: () => {
        return {
            tasks: defaultTasksData
        };
    },
    subscribe: () => 0,
    dispatch: action("dispatch")
};

export default {
    component: PureInboxScreen,
    title: "InboxScreen",
    decorators: [
        (story: () => any) => (
            <Provider store={store as any}>{story()}</Provider>
        )
    ]
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
