export function textSlicer(text: string, max: number) {
    if (text.length >= max) {
        return text.slice(0, max) + "..."
    }
    else {
        return text 
    }
}