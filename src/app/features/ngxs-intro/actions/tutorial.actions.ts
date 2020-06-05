import { ITutorial } from '../models/tutorial.interface';

export class AddTutorial {
    static readonly type = '[TUTORIAL] Add';

    constructor(public payload: ITutorial) {}
}

export class RemoveTutorial {
    static readonly type = '[TUTORIAL] Remove';

    constructor(public payload: string) {}
}