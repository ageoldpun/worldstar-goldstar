import React, { useState, useEffect } from 'react';
import SneakyButton from './SneakyButton';
import { Password } from './Password';

const PuzzleBox = () => {
    const [isSlideUnlocked, toggleSlideLock] = useState(false);
    const [isBombDefused, toggleBomb] = useState(false);

    return (
        <div className="puzzle-box-wrapper">
            <div
                className="slide"
                style={{ left: isSlideUnlocked ? '162px' : '0' }}
                onClick={() => toggleSlideLock(prevLockStatus => !prevLockStatus)}
            >
            </div>
            <div className="buttons">
                {
                    isBombDefused ? (
                        <Password />
                    ) : (
                        <React.Fragment>
                            <SneakyButton
                                onClick={() => {
                                    // boot them the heck outta here
                                    window.location.reload()
                                    return toggleSlideLock(prevLockStatus => false)
                                }}
                                label="try me"
                            />
                            <SneakyButton
                                label="try me"
                                onClick={() => toggleBomb((toggleBomb) => !toggleBomb)}
                            />
                            <SneakyButton
                                onClick={() => {
                                    window.location.reload()
                                    return toggleSlideLock(prevLockStatus => false)
                                }}
                                label="try me"
                            />
                        </React.Fragment>
                    )
                }
            </div>
        </div>
    )
}

export default PuzzleBox;