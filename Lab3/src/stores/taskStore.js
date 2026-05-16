import { defineStore } from 'pinia';
import { isOverdue, isUpcoming } from '@/utils/date';
import { UPCOMING_DAYS, CATEGORIES } from '@/constants/task';

const initialTasks = [
    {
        id: 1,
        title: 'Prepare presentation for defense',
        description:
            'Prepare slides for the lab №3 defense. Include description of the architecture, Pinia store and Vue Router. Record a demo video of the application.',
        category: 'Work',
        priority: 'High',
        deadline: '2026-05-04',
        completed: false,
        createdAt: '2026-04-28T10:00:00.000Z',
    },
    {
        id: 2,
        title: 'Read Vue Router documentation',
        description: 'Go through the official guide and reference for Vue Router 4.',
        category: 'Study',
        priority: 'Medium',
        deadline: '2026-05-15',
        completed: true,
        createdAt: '2026-04-20T09:00:00.000Z',
    },
    {
        id: 3,
        title: 'Write unit tests for store',
        description: 'Cover task store getters and actions with unit tests.',
        category: 'Work',
        priority: 'Low',
        deadline: '2026-05-20',
        completed: false,
        createdAt: '2026-05-01T12:00:00.000Z',
    },
    {
        id: 4,
        title: 'Buy groceries for the week',
        description: 'Vegetables, fruits, bread, dairy.',
        category: 'Personal',
        priority: 'Low',
        deadline: '2026-05-10',
        completed: false,
        createdAt: '2026-05-08T08:00:00.000Z',
    },
    {
        id: 5,
        title: 'Set up CI/CD pipeline',
        description: 'Configure GitHub Actions for build and lint on push.',
        category: 'Work',
        priority: 'Medium',
        deadline: '2026-05-11',
        completed: false,
        createdAt: '2026-05-05T15:00:00.000Z',
    },
    {
        id: 6,
        title: 'Review Pinia material',
        description: 'Refresh knowledge of state, getters, and actions in Pinia.',
        category: 'Study',
        priority: 'Medium',
        deadline: '2026-05-12',
        completed: false,
        createdAt: '2026-05-06T18:00:00.000Z',
    },
];

export const useTaskStore = defineStore('tasks', {
    state: () => ({
        tasks: initialTasks,
    }),

    getters: {
        activeTasks: (state) => state.tasks.filter((t) => !t.completed),

        completedTasks: (state) => state.tasks.filter((t) => t.completed),

        overdueTasks: (state) => state.tasks.filter((t) => !t.completed && isOverdue(t.deadline)),

        upcomingDeadlines: (state) =>
            state.tasks
                .filter((t) => !t.completed && isUpcoming(t.deadline, UPCOMING_DAYS))
                .sort((a, b) => new Date(a.deadline) - new Date(b.deadline)),

        tasksByCategory: (state) => {
            const counts = {};
            for (const category of CATEGORIES) counts[category] = 0;
            for (const task of state.tasks) {
                if (counts[task.category] !== undefined) counts[task.category] += 1;
            }
            return counts;
        },

        getTaskById: (state) => (id) => state.tasks.find((t) => t.id === Number(id)),
    },

    actions: {
        addTask(payload) {
            const task = {
                id: Date.now(),
                title: payload.title.trim(),
                description: payload.description?.trim() ?? '',
                category: payload.category,
                priority: payload.priority,
                deadline: payload.deadline,
                completed: false,
                createdAt: new Date().toISOString(),
            };
            this.tasks.push(task);
            return task;
        },

        updateTask(id, payload) {
            const index = this.tasks.findIndex((t) => t.id === Number(id));
            if (index === -1) return;
            this.tasks[index] = {
                ...this.tasks[index],
                title: payload.title.trim(),
                description: payload.description?.trim() ?? '',
                category: payload.category,
                priority: payload.priority,
                deadline: payload.deadline,
                completed: payload.completed,
            };
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter((t) => t.id !== Number(id));
        },

        toggleComplete(id) {
            const task = this.tasks.find((t) => t.id === Number(id));
            if (task) task.completed = !task.completed;
        },
    },
});
