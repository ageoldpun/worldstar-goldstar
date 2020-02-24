import React, { useState } from "react";
import useInput from '../hooks/useInput';
import crystalRef from '../firebase';


const style = {
    width: '100%',
}

export function Password(props) {
    const { value: passwordValue, bind: passwordBind } = useInput('');
    const { value: crystalValue, bind: crystalBind } = useInput('');
    const { value: barsValue, bind: barsBind } = useInput('');
    const { value: elementiumValue, bind: elementiumBind } = useInput('');
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
        crystalRef.ref('crystals').set(crystalValue);
    }
    const handlebarsSubmit = (e) => {
        e.preventDefault();
        crystalRef.ref('bars').set(barsValue);
    }
    const handleElementiumSubmit = (e) => {
        e.preventDefault();
        crystalRef.ref('elementium').set(elementiumValue);
    }
    return (
        <div>
            {
                isPasswordEntered ? (
                    <div>
                        <form onSubmit={handleCrystalSubmit}>
                            <label>
                                Crystal count:
                                <input style={style} type="text" {...crystalBind} />
                            </label>
                            <input type="submit" value="Enter" />
                        </form>

                        <form onSubmit={handlebarsSubmit}>
                            <label>
                                Bar count:
                                <input style={style} type="text" {...barsBind} />
                            </label>
                            <input type="submit" value="Enter" />
                        </form>

                        <form onSubmit={handleElementiumSubmit}>
                            <label>
                                Elementium count:
                                <input style={style} type="text" {...elementiumBind} />
                            </label>
                            <input type="submit" value="Enter" />
                        </form>
                    </div>
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