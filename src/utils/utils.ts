export function createElement(tag: string, className: string, parent: HTMLElement): HTMLElement {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    parent.appendChild(newElement);

    return newElement;
}