import React, { ReactElement } from "react";

import Task from "./Task";

interface Props {
    loading?: boolean;
    tasks: { id: string; title: string; state: string }[];
    onPinTask: (id: string) => any;
    onArchiveTask: (id: string) => any;
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
            {tasks.map((task: { id: string; title: string; state: string }) => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    );
};

export default PureTaskList;
