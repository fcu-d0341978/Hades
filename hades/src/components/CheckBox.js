import React from 'react';
import { Achievement } from './Config/AchievementConfig';
 
import { useChecklist } from 'react-checklist';
// or const { useChecklist } = require('react-checklist');
 
const data = [
  { _id: 1, label: Achievement[0].name },
  { _id: 2, label: Achievement[1].name },
  { _id: 3, label: Achievement[2].name },
]
 
export default () => {
  const { handleCheck, isCheckedAll, checkedItems } = useChecklist(data, {
    key: '_id',
    keyType: 'number',
  });
 
  console.log(checkedItems);      // Set(0) - handling with Set
  console.log([...checkedItems]); // []     - handling with Array
  return (
    <ul>
 
      <li>
        <input
          type="checkbox"
          onChange={handleCheck}              // 1
          checked={isCheckedAll}              // 2
        />
        <label>Check All</label>
      </li>
 
      {data.map((v, i) => (
        <li key={i}>
          <input
            type="checkbox"
            data-key={v._id}                  // 3
            onChange={handleCheck}            // 4
            checked={checkedItems.has(v._id)} // 5
          />
          <label>{v.label}</label>
        </li>
      ))}
 
    </ul>
  );
};