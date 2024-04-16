import React, { useState } from 'react';
import './Sort.css';

function Sort({ myTodos, onSort }) {

    function handleSort(sort) {
        let sortedTodos = [...myTodos]; 

        if (sort == 'AtoZ'){
            sortedTodos.sort(function (a, b) {
                return a.text.localeCompare(b.text);
            });
        } else if(sort == 'ZtoA') {
            sortedTodos.sort(function (a, b) {
                return b.text.localeCompare(a.text);
            }); 
        } else if(sort == 'Old') {
            sortedTodos.sort(function (a, b) {
                return Date.parse(a.created_at) - Date.parse(b.created_at); // parses the date string
            });
        } else if(sort == 'Recent') {
            sortedTodos.sort(function (a, b) {
                return Date.parse(b.created_at) - Date.parse(a.created_at);
            });
        } else if(sort == 'Complete') {
            sortedTodos.sort(function (a, b) {
                if (a.completed && !b.completed) {
                    return -1; 
                } 
                if (!a.completed && b.completed) {
                    return 1;
                }
                return 0;
            });
        } else { // sort by incomplete
            sortedTodos.sort(function (a, b) {
                if (a.completed && !b.completed) {
                    return 1;
                } 
                if (!a.completed && b.completed){
                    return -1;
                }
                return 0;
            });
        }
        onSort(sortedTodos); 
    }

    return (
        <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
                <a href="#" onClick={() => handleSort('AtoZ')}>Sort A to Z</a>
                <a href="#" onClick={() => handleSort('ZtoA')}>Sort Z to A</a>
                <a href="#" onClick={() => handleSort('Old')}>Last created</a>
                <a href="#" onClick={() => handleSort('Recent')}>Recently created</a>
                <a href="#" onClick={() => handleSort('Complete')}>Completed</a>
                <a href="#" onClick={() => handleSort('inComplete')}>Not Completed</a>
            </div>
        </div>
    )
}

export default Sort;
