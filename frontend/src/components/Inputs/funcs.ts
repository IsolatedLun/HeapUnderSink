export function previewImage(file: File, img: HTMLImageElement) {
    img.src = URL.createObjectURL(file);
}