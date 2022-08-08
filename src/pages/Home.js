import React from 'react';

function Home() {
    let rows = [];
    for (let i = 0; i < 100; i++) {
        rows.push(<p key={i.toString()} >.</p>);
    }
    return (
        <>
            <p>This is home page!</p>
            {rows}
        </>
    );
}
export default Home;