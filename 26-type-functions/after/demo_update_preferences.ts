interface UserPreferences {
    userId: number;
    darkMode: boolean;
    videoSpeed: number;
    language: 'he'|'en';
}

function updatePreferences(preferences: 
    Partial<UserPreferences> & Pick<UserPreferences, 'userId'>) {
    const userId = preferences.userId;
    return fetch(`/users/${userId}/preferences`, {
        method: 'PUT',
        body: JSON.stringify(preferences),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

updatePreferences({ userId: 10, darkMode: true });
