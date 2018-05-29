export function nextDraw(state = false, action) {
    switch (action.type) {
        case 'DRAW_O':
            return action.value;
        case 'DRAW_X':
            return action.value;
        default:
            return state;
    }
}
