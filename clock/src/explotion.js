import { useState } from 'react';
import ConfettiExplosion from "react-confetti-explosion";

function explosion() {
    const [isExploding, setIsExploding] = useState(true);
    return <>{isExploding && <ConfettiExplosion />}</>;
}

export default explosion; 