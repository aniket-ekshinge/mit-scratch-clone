import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActionToSprite, deleteAction } from '../redux/spritesSlice.js';
import { Trash } from 'lucide-react';
import { SpriteImage } from './Sprite.js';
import ActionInput from './ActionInput.js';

const MidArea = () => {
  const dispatch = useDispatch();
  const selectedSpriteId = useSelector((state) => state.sprites.selectedSpriteId);
  const selectedSprite = useSelector((state) =>
    state.sprites.sprites.find(sprite => sprite.id === selectedSpriteId)
  );

  const handleDrop = (e) => {
    e.preventDefault();
    const actionType = e.dataTransfer.getData('actionType');
    const actionText = e.dataTransfer.getData('text');
    const payload = JSON.parse(e.dataTransfer.getData('payload'));

    if (selectedSpriteId) {
      dispatch(addActionToSprite({ spriteId: selectedSpriteId, actionType, actionText, payload }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div 
  className="flex-1 h-full overflow-auto bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg border border-blue-300 hover:shadow-xl transition-shadow duration-300"onDrop={handleDrop} onDragOver={handleDragOver}>


<div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">

        {selectedSprite ? (
          <>
            <div className='flex gap-4'>
            <h2 className="text-3xl flex font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 mb-4 hover:scale-105 transform transition-transform duration-300">Actions For

            </h2>

              <div className='text-sm'><SpriteImage spriteName={selectedSprite.name} styles={{ width: "40px", height: "40px" }} /></div>
            </div>
            <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2 underline decoration-blue-500 decoration-2 underline-offset-4">Current Actions:

            </h3>

              <ul className="space-y-2">
                {selectedSprite.actions.map((action, index) => (
                  <li 
                  key={index} 
                  className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 px-4 py-2 flex justify-between items-center rounded-full text-sm shadow-sm hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-300 transition-all duration-300">
                
                    <ActionInput index={index} action={action} />
                    <button onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteAction({ index }))
                    }}
                    >
                      <Trash width={"22px"} color='red' />
                    </button>
                  </li>
                ))}
              </ul>
            </div></>
        ) : (
          <p className="text-gray-600 italic mb-6">No sprite selected</p>
        )}
      </div>
    </div>
  );
};

export default MidArea;
