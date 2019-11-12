export class List {

    id: number;
    itemId: number;
    name = '';

    constructor(values = {}) {
        Object.assign(this, values);
    }
}
