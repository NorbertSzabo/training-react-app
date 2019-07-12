import React from 'react';
import './FancyPanel.css';

export function FancyPanel(props) {
    return (
        <div>
            <div className={'fancy-panel-header'}>
                <h2>{props.title}</h2>
            </div>
            <div className={'fancy-panel-content'}>
                {props.children}
            </div>
        </div>
    )
}
