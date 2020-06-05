import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ITutorial } from '../models/tutorial.interface';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.actions';

export class TutorialStateModel {
    tutorials: ITutorial[];
}

@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})

export class TutorialState {
    @Selector()
    static getTutorialList(state: TutorialStateModel) {
        return state.tutorials;
    }

    @Action(AddTutorial)
    add({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
        const state = getState();
        patchState({
            tutorials: [ ...state.tutorials, payload ]
        });
    }

    @Action(RemoveTutorial)
    remove({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {
        patchState({
            tutorials: getState().tutorials.filter(x => x.name != payload)
        })
    }

}
