export class Item {

    id: number;
    title: string = '';
    name: string = '';
    done: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
