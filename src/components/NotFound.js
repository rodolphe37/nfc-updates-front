import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import './NotFound.css';

export default () => (
    <Card>
        <Title title="Not Found" />
        <CardContent>
            <div className="style-Notfound">
                <div>
                    <i className="fas fa-exclamation-triangle fa-10x"></i>
                </div>
                <div>
                    <h1 className="tracking-in-contract-bck-bottom">404: Page not found</h1>
                </div>
            </div>
        </CardContent>
    </Card>
);