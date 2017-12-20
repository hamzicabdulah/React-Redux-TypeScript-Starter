import * as React from 'react';
import { FormEvent, StatelessComponent } from 'react';
import { homeHeading } from '../../styles/HomePage';

export const HomePage: StatelessComponent<any> = () => {
    return (
        <h1 style={homeHeading}>Home Page</h1>
    );
}