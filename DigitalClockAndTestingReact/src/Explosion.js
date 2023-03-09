import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

function Explosion() {

    const [isExploding, setIsExploding] = useState(true);
    return <>{isExploding && <ConfettiExplosion />}</>;

    /*return (
        {isExploding === true ? <ConfettiExplosion/> : />}
    )</>*/

}

export default Explosion;