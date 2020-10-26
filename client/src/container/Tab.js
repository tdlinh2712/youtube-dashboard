import React from 'react';
const Tab = ({activeTab, children}) => {
    return (

        <div>{children.map((child) => {
            if(child.props.name === activeTab) {
                return <div key={child.props.name}>{child}</div>;
            } else {
                return null;
            }
        })}</div>
    )
}

export default Tab;