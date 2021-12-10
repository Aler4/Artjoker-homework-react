export function getDate() {
    const date = new Date()
    const hours = date.getHours() == 0 ? '00' : date.getHours();
    return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}  ${hours}: ${date.getMinutes()}`
};

