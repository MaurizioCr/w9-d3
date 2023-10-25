import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';

function ToggleButtonExample(e) {
    const [checked, setChecked] = useState(false);



    return (
        <>


            <ToggleButton
                className="mb-2"
                id={e}
                type="checkbox"
                variant="outline-primary"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}
            >
                Checked
            </ToggleButton>

        </>
    );
}

export default ToggleButtonExample;