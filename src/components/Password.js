import React, { useState } from "react";
import useInput from '../hooks/useInput';
import crystalRef from '../firebase';


const style = {
    width: '100%',
}

export function Password(props) {
    const { value: passwordValue, bind: passwordBind } = useInput('');
    const { value: crystalValue, bind: crystalBind } = useInput('');
    const [isPasswordEntered, setPassword] = useState(false);
    const password = 'daat for president'

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordValue.toLowerCase() === password) {
            setPassword(true)
        }
    }

    const handleCrystalSubmit = (e) => {
        e.preventDefault();
        crystalRef.set(crystalValue);
    }
    return (
        <div>
            {
                isPasswordEntered ? (
                    <form onSubmit={handleCrystalSubmit}>
                        <label>
                            Crystal count:
                            <input style={style} type="text" {...crystalBind} />
                        </label>
                        <input type="submit" value="Enter" />
                    </form>
                ) : (
                    <form onSubmit={handlePasswordSubmit}>
                        <label>
                            Password:
                            <input style={style} type="text" {...passwordBind} />
                        </label>
                        <input type="submit" value="Enter" />
                    </form>
                )
            }
        </div>
  );
}