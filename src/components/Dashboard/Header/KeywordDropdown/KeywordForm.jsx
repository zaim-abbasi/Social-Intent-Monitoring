import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const KeywordForm = ({ onAdd }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newKeyword.trim()) return;

    const success = await onAdd(newKeyword.trim());
    if (success) {
      setNewKeyword('');
      setIsAdding(false);
    }
  };

  return (
    <div className="px-4 py-3 border-t border-gray-100">
      {isAdding ? (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter new keyword"
            className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="text-primary hover:text-secondary font-medium"
          >
            Add
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center space-x-2 text-sm text-primary hover:text-secondary font-medium"
        >
          <FiPlus className="w-4 h-4" />
          <span>Add new keyword</span>
        </button>
      )}
    </div>
  );
};

export default KeywordForm;