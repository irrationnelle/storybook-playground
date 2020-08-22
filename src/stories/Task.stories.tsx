import React from "react";
import { action } from "@storybook/addon-actions";

import Task from "../components/Task";

export default {
    component: "Task",
    title: "Task",
    excludeStories: /.*Data$/
};

export const taskData = {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updateAt: new Date()
};

export const actionData = {
    onPinTask: action("onPinTask"),
    onArchiveTask: action("onArchiveTask")
};

export const Default = () => <Task task={{ ...taskData }} {...actionData} />;

export const Pinned = () => (
    <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionData} />
);

export const Archived = () => (
    <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionData} />
);
