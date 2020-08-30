import React, { useState } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer/MainContainer';

function App() {
    const [visible, setVisible] = useState<boolean>(true);
    return (
        <div
            className='App'
            onClick={(e) => {
                const element = e.target as HTMLElement;
                if (element.tagName !== 'INPUT' && element.tagName !== 'LI') {
                    setVisible(false);
                }
            }}
        >
            <MainContainer visible={visible} setVisible={setVisible} />
        </div>
    );
}

export default App;
