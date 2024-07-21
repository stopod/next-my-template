"use client";

import { useState } from "react";
import FormField from "../components/molecules/FormField";

const SamplePage = () => {
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(content);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="text-gray-700 text-sm font-bold mb-4">入力</label>
        <div className="mb-4">
          <input
            type="text"
            className="shadow border rounded py-2 px-3 text-gray-700 leaging-tight focus:outline-none"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">決定</button>
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <FormField
          label="入力"
          id="content"
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">決定</button>
      </form>
    </div>
  );
};

export default SamplePage;
