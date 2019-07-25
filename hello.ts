class Point{
    x: number;
    y: number;
}
interface Points3d extends Point{
    z: number;
}
let point3d: Points3d = { x: 1, y: 2, z: 3 };