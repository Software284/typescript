function add(a:number,b:number):number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;

const x = add('he','he') as string;
x.split(',');

