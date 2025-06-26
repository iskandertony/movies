'use client';

import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { useSearchStore } from '../model/searchStore';
import { useDebouncedCallback } from '@shared/lib/debounce';

export const SearchInput = () => {
    const setQuery = useSearchStore((state) => state.setQuery);
    const [localValue, setLocalValue] = useState('');

    const debouncedSetQuery = useDebouncedCallback(setQuery, 500);

    useEffect(() => {
        debouncedSetQuery(localValue);
    }, [localValue, debouncedSetQuery]);

    return (
        <Input
            placeholder="Поиск по названию"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            style={{ maxWidth: 400, marginBottom: 20 }}
        />
    );
};
