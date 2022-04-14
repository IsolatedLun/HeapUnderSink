export function cleanUnderscores(str: string): string {
    return str.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

export function getMimeType(str: string): string {
    return str.split('/')[0];
}

export function constructFormData(obj: object): FormData | null {
    if(typeof(obj) === 'object') {
        let formData = new FormData();

        Object.entries(obj).forEach(tup => {
            formData.append(tup[0], tup[1])
        })

        return formData
    }

    return null;
}