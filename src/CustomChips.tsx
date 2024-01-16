import React from 'react';
import './CustomChips.css';

interface ChipProps {
  label: string;
  onDelete?: () => void;
  profilePicture?: string;
  selected?: boolean;
  email?: string; // Add email property
}

const Chip: React.FC<ChipProps> = ({ label, onDelete, profilePicture, selected, email }) => {
  return (
    <div className={`chip ${selected ? 'selected' : ''}`}>
      {profilePicture && (
        <img
          src={profilePicture}
          alt="Profile"
          className={`chip-profile-picture ${selected ? 'cylindrical' : ''}`}
        />
      )}
      <span className="chip-label">{label}</span>
      {email && <span className="chip-email">{email}</span>}
      {onDelete && (
        <button className="chip-delete" onClick={onDelete}>
          X
        </button>
      )}
    </div>
  );
};

export default Chip;
