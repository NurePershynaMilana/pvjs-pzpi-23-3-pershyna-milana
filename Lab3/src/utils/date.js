export function getStartOfToday() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
}

export function isOverdue(deadline) {
    if (!deadline) return false;
    return new Date(deadline) < getStartOfToday();
}

export function isUpcoming(deadline, days = 3) {
    if (!deadline) return false;
    const target = new Date(deadline);
    target.setHours(0, 0, 0, 0);
    const today = getStartOfToday();
    const limit = new Date(today);
    limit.setDate(limit.getDate() + days);
    return target >= today && target <= limit;
}

export function formatDate(deadline) {
    if (!deadline) return '';
    return new Date(deadline).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
    });
}

export function formatFullDate(deadline) {
    if (!deadline) return '';
    return new Date(deadline).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

export function toInputDate(date) {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
