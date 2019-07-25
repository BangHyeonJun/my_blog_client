import React from "react";

const PostHashtag = ({ userHashtag, onChange }) => {
    const handleChange = e => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        onChange(name, value);
    };

    return (
        <div>
            <input
                type="input"
                name="hashtag"
                value={userHashtag}
                onChange={handleChange}
            />
        </div>
    );
};

export default PostHashtag;
