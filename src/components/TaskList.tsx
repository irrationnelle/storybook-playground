import React, { ReactElement } from "react";

import { connect } from "react-redux";
import { archiveTask, pinTask } from "../lib/redux";
import Task from "./Task";

interface Props {
    loading: boolean;
    tasks: { id: string; title: string; state: string }[];
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
}

const PureTaskList: React.FC<Props> = ({
    loading = false,
    tasks,
    onPinTask,
    onArchiveTask
}: Props): ReactElement => {
    const events = {
        onPinTask,
        onArchiveTask
    };

    if (loading) {
        return <div className="list-items">loading</div>;
    }

    if (tasks.length === 0) {
        return <div className="list-items">empty</div>;
    }

    return (
        <div className="list-items">
            {tasks.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    );
};

export default connect(
    ({
        tasks
    }: {
        tasks: { id: string; state: string; action: string }[];
    }) => ({
        tasks: tasks.filter(
            t => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
        )
    }),
    dispatch => ({
        onArchiveTask: (id: string) => dispatch(archiveTask(id)),
        onPinTask: (id: string) => dispatch(pinTask(id))
    })
)(PureTaskList);
