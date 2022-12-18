type Button = {
    text: string,
    onClick: () => void,
    type: "normal"|"primary"|"danger",
};

function isDangerous(buttonType: string) {
    return buttonType === "danger";
}

// OK
console.log(isDangerous("normal"));

// Compile error - it'll never be true
console.log(isDangerous("norma"));

