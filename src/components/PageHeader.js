import React from 'react';
import Card from 'react-bootstrap/Card';

export default function PageHeader(props) {
    return (
        <div>
            <Card className="bg-light">
                <Card.Body>{props.text}</Card.Body>
            </Card>
            <br />
        </div>
    );
}
