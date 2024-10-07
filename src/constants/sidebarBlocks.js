import React from 'react';

export const motionColor = {
    bgColor: "bg-blue-500",
    textColor: "text-white"
};

export const controlColor = {
    bgColor: "bg-purple-500",
    textColor: "text-white"
};

export const MOVE_STEPS = "MoveSteps";
export const TURN_DEGREES = "TurnDegrees";
export const GO_TO = "GoTo";
export const REPEAT = "Repeat";

export default {
    Motion: [
        {
            text: 'Move __ steps',
            type: MOVE_STEPS,
            defaultPayload: { steps: 15 }
        },
        {
            text: 'Turn __ degrees',
            type: TURN_DEGREES,
            defaultPayload: { degree: 20 }
        },
        {
            text: "Go To x:__ y: __",
            type: GO_TO,
            defaultPayload: { x: 50, y: 50 }
        },
    ],
    Control: [
        {
            type: REPEAT,
            text: "Repeat Animation",
            defaultPayload: {}
        },
    ],
};
