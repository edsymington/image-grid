import React from 'react';
import styles from './Tabs.module.css'

const Tabs = props => {

    // Set up the tabs with CSS module & Tailwind styles
    const tabs = ['Posts', 'Tagged'].map((label, index) => (
        <li key={index} className={(props.activeCollection === label ? styles.ActiveTab + ' ' : '') + 'uppercase text-xs border-t mx-3'}>
            <button onClick={() => props.tabClickHandler(label)} className="cursor-pointer mt-3 uppercase text-gray-400 hover:text-gray-500">
                {label}
            </button>
        </li>
    ));

    return (
        <nav className={styles.TabsNav}>
            <ul className="flex justify-center border-t border-gray-200">
                {tabs}
            </ul>
        </nav>
    );
}

export default Tabs;