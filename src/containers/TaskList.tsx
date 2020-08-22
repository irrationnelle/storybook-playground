import React, { ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";
import { archiveTask, pinTask } from "../store/actions";

import PureTaskList from "../components/PureTaskList";

interface StoreState {
    tasks: { id: string; title: string; state: string }[];
}

const TaskList: React.FC = (): ReactElement => {
    const dispatcher = useDispatch();

    const tasksSelector = ({ tasks }: StoreState) =>
        tasks.filter(
            t => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
        );

    const tasks = useSelector(tasksSelector);

    const events = {
        onPinTask: (id: string) => dispatcher(archiveTask(id)),
        onArchiveTask: (id: string) => dispatcher(pinTask(id))
    };

    return <PureTaskList tasks={tasks} {...events} />;
};

export default TaskList;
