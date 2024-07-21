'use client';
import permit, { LoginMethod } from '@permitio/permit-js';
import 'dotenv/config';
import { useEffect } from 'react';

const AccessRequest = () => {
    useEffect(() => {
        const login = async () => {
            try {
                await permit.elements.login({
                    loginMethod: LoginMethod.frontendOnly,
                    userJwt: process.env.JWT,
                    tenant: 'default',
                    envId: process.env.ENV,
                });
                console.log('Login successful');
            } catch (err) {
                console.error('Login error:', err);
            }
        };

        if (process.env.JWT && process.env.ENV) {
            login();
        } else {
            console.error('JWT token or ENV variable is not defined.');
        }
    }, []);

    return (
        <iframe
            title="Permit Element AR"
            src="https://embed.permit.io/ar?envId=e0ffba3632274e8085d92c793d34f0c1&darkMode=false&tenantKey=default"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
        />
    );
};

export default AccessRequest;