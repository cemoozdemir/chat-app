import { useState } from "react";

const GroupCreate = () => {
  const [groupName, setGroupName] = useState("");

  const createGroup = () => {
    // API'ye grup oluşturma isteği göndereceğiz
    console.log("Group created:", groupName);
  };

  return (
    <div>
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="Enter group name"
      />
      <button onClick={createGroup}>Create Group</button>
    </div>
  );
};

export default GroupCreate;
