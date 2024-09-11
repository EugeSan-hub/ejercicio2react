import React from 'react';

const Holamundo = ({nombre}) => {
    return (
        <section className='container my-4'>
            <h1 className='text-center'> Hola {nombre}</h1>
        </section>
    );
};

export default Holamundo;