import React from 'react';
import HeaderComponent from './HeaderComponent';
import FormComponent from './FormComponent';
import TagsComponent from './TagsComponent';
import '../global.css';

const HomeComponent: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Roboto, sans-serif' }} >
            <HeaderComponent />            
            <TagsComponent/>
            <FormComponent />          
        </div>
    );
};

export default HomeComponent;