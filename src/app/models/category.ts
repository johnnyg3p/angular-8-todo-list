export class Category {

    id: number;
    name: string = '';
    observe: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
