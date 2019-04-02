function getLen(input: string | number): number{
    if ((<string>input).length) {
        return (<string>input).length;
    } else {
        return input.toString().length;
    }
}