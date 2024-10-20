function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function clone() {
    const obj = { name: "Navras", details: { age: 19, city: "Naryn" } };
    const clonedObj = deepClone(obj);
    console.log("Original Object:", obj);
    console.log("Cloned Object:", clonedObj);
}

clone();
