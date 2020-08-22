export const actions = {
    ARCHIVE_TASK: "ARCHIVE_TASK",
    PIN_TASK: "PIN_TASK"
};

export const archiveTask = (id: string) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id: string) => ({ type: actions.PIN_TASK, id });
