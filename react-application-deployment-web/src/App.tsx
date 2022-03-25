import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container p-2">
            <h3 className="bg-info p-1 text-white text-center rounded">First page</h3>

            <div>message</div>

            <div className="row justify-content-center">
                <div className="col-auto">
                    <button className="btn btn-link" disabled>First</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-link">Second</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-link">Third</button>
                </div>
            </div>
        </div>

        // <div className="row justify-content-center">
        //     <div className="col-auto">
        //         <button className="btn btn-link" routerLink="/first" disabled>First</button>
        //     </div>
        //     <div className="col-auto">
        //         <button className="btn btn-link" routerLink="/second">Second</button>
        //     </div>
        //     <div className="col-auto">
        //         <button className="btn btn-link" routerLink="/third">Third</button>
        //     </div>
        // </div>

        // <div className="App">
        //     <header className="App-header">
        //       <img src={logo} className="App-logo" alt="logo" />
        //       <p>
        //         Edit <code>src/App.tsx</code> and save to reload.
        //       </p>
        //       <a
        //         className="App-link"
        //         href="https://reactjs.org"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         Learn React
        //       </a>
        //     </header>
        //   </div>
    );
}

export default App;
