'use client';
import permit, { LoginMethod } from '@permitio/permit-js';
import AccessRequest from './AccessRequest';
import UserManagement from './UserManagement';
import 'dotenv/config';
import { useEffect } from 'react';

const Dashboard = () => {
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
        <div>
            <AccessRequest />
            <UserManagement />
        </div>
    );
};

export default Dashboard;