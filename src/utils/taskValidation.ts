import TaskValidationError from '../types/error';
import Task from '../types/task';

const titleMaxLength = 30;
const descriptionMaxLength = 200;
const errorMessages = {
    emptyTitle: 'Введите, пожалуйста, заголовок',
    longTitle: `Заголовок должен быть короче ${titleMaxLength} символов`,
    longDescription: `Описание должно быть короче ${descriptionMaxLength} символов`,
};

const isTitleFulfilled = (title: string) => title.length !== 0;

const isTitleValid = (title: string) => title.length <= titleMaxLength;

const isDescriptionValid = (description: string) => description.length <= descriptionMaxLength;

const validateTask = (task: Task) => {
    let isTaskValid = true;
    let error: TaskValidationError = { titleError: '', descriptionError: '' };

    if (!isTitleFulfilled(task.title)) {
        isTaskValid = false;
        error = { ...error, titleError: errorMessages.emptyTitle };
    }

    if (!isTitleValid(task.title)) {
        isTaskValid = false;
        error = { ...error, titleError: errorMessages.longTitle };
    }

    if (!isDescriptionValid(task.description)) {
        isTaskValid = false;
        error = { ...error, descriptionError: errorMessages.longDescription };
    }

    return { isTaskValid, error };
};

export default validateTask;
