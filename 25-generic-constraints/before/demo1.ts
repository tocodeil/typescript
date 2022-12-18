function longerThan(n: number, ...items: string[]) {
    return items.filter(s => s.length > n);
}

