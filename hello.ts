type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function test(name: NameOrResolver): string{
    if (typeof name === 'string') {
        return name;
    } else {
        return name();
    }
}