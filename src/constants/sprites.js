import { v4 as uuid } from 'uuid'
const catId = uuid()
const fishId = uuid()
const fmanId =uuid()

export const SPRITE_WIDTH = 85;
export const SPRITE_HEIGHT = 85;
export default [
    {
        id: catId,
        name: "cat",
        position: { x: 0, y: 0 },
        rotation: 0,
        actions: [],
    },
    {
        id: fishId,
        name: "fish",
        position: { x: 140, y: 0 },
        rotation: 0,
        actions: [],
    },
    {
        id: fmanId,
        name: "fisherman",
        position: { x: 140, y: 0 },
        rotation: 0,
        actions: [],
    }
]