import React from 'react';

const ErrorHandling = ({ error }) => {
    return (
        <div className="error">
            <p>An error occurred:</p>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorHandling;
