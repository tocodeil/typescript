# Creating Types from other Types

[x] Partial

[x] Required
  Required<{ name?: string; id: number }> === { name: string, id: number }

[x] Omit
  Omit<{ name?: string; id: number }, 'name'> === { id: number }

[x] Pick


[x] Extract
