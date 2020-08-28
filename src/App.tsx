import React, { useRef } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer/MainContainer';

function App() {
    const containerElement = useRef<typeof MainContainer>(null);
    return (
        <div
            className='App'
            onClick={(e) => {
                const element = e.target as HTMLElement;
                if (element.tagName !== 'INPUT' && element.tagName !== 'LI') {
                }
            }}
        >
            <MainContainer ref={containerElement} />
        </div>
    );
}

export default App;
