import { getStartOfToday } from './date';

export function validateTask(task, mode = 'create') {
    const errors = { title: '', deadline: '' };

    if (!task.title || !task.title.trim()) {
        errors.title = 'Title is required';
    }

    if (mode === 'create' && task.deadline) {
        const deadlineDate = new Date(task.deadline);
        if (deadlineDate < getStartOfToday()) {
            errors.deadline = 'Deadline cannot be in the past';
        }
    }

    if (!task.deadline) {
        errors.deadline = 'Deadline is required';
    }

    const isValid = !errors.title && !errors.deadline;

    return { errors, isValid };
}
