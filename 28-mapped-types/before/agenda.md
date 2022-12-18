# Mapped Types

[ ] What Are Mapped Types

[ ] Let's implement Partial

[ ] Let's implement Readonly

[ ] Let's implement Getters







## Syntax

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};