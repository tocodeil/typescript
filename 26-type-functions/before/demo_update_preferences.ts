interface UserPreferences {
    darkMode: boolean;
    videoSpeed: number;
    language: 'he'|'en';
}

function updatePreferences(userId: number, preferences: UserPreferences) {
    return fetch(`/users/${userId}/preferences`, {
        method: 'PUT',
        body: JSON.stringify(preferences),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

updatePreferences(23, { darkMode: true });
