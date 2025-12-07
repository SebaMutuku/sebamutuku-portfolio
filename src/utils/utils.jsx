export function getExperienceYears(startYear, startMonth) {
    const startDate = new Date(startYear, startMonth);
    const today = new Date();
    return Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
}