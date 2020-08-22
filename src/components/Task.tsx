import React, { ReactElement } from "react";

interface Props {
    task: {
        id: string;
        title: string;
        state: string;
    };
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
}

const Task: React.FC<Props> = ({
    task: { id, title, state },
    onArchiveTask,
    onPinTask
}: Props): ReactElement => (
    <div className={`list-item ${state}`}>
        <label className="checkbox">
            <input
                data-testid={`checkbox-${id}`}
                type="checkbox"
                checked={state === "TASK_PINNED"}
                disabled={true}
                name="checked"
            />
            <span
                className="checkbox-custom"
                onClick={() => onArchiveTask(id)}
            />
        </label>
        <div className="title">
            <input
                type="text"
                value={title}
                readOnly={true}
                placeholder="Input title"
            />
        </div>

        <div className="actions" onClick={event => event.stopPropagation()}>
            {state !== "TASK_ARCHIVED" && (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a onClick={() => onPinTask(id)}>
                    <span className={`icon-star`} />
                </a>
            )}
        </div>
    </div>
);

export default Task;
