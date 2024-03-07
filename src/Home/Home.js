import React, { useState, useEffec } from "react";
import './home.css'

const Home = ({ food }) => {
    const [showDescription] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (value) => {
        setSearchQuery(value);
    };

}