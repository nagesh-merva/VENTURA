import React from 'react';

function LoadingScreen() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="text-center">
                {/* Spinner Animation */}
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mx-auto mb-4"></div>
                {/* Loading Text with Fading Animation */}
                <h2 className="text-lg font-semibold text-gray-100">
                    Loading...
                </h2>
                <p className="text-sm text-gray-400">
                    Just a moment, we are getting things ready.
                </p>
            </div>
        </div>
    );
}

export default LoadingScreen;
