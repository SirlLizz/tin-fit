import React from 'react';

function Home() {
    let rows = [];
    for (let i = 0; i < 100; i++) {
        rows.push(<p>.</p>);
    };
    return (
        <div>
            <p>This is home page!</p>
            {rows}
        </div>
    );
}
export default Home;