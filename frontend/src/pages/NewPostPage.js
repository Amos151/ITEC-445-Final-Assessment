import React, { useState, useContext, useEffect } from "react";
import { useNavigate }   from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function NewPostPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // form state
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent]= useState([""]);
  const [error, setError] = useState(null);

  // If not logged in, kick them to /login
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleParagraphChange = (idx) => (e) => {
    const updated = [...content];
    updated[idx] = e.target.value;
    setContent(updated);
  };

  const addParagraph = () => {
    setContent([...content, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Build the new article payload
    const newArticle = { name, title, content, author: user.displayName || user.email };

    try {
      const res = await axios.post(
        `${API_URL}/articles`,
        newArticle,
        { withCredentials: true }
      );
      // Navigate to the newly minted article
      navigate(`/articles/${res.data.name}`);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Failed to create post");
    }
  };

  // While we’re redirecting, render nothing
  if (!user) return null;

  return (
    <div className="pgbody" style={{ padding: "1rem" }}>
      <h1>Create a New Post</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label><br/>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. my-new-article"
            required
          />
        </div>

        <div>
          <label>Title: </label><br/>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your post title"
            required
          />
        </div>

        <div>
          <label>Content:</label>
          {content.map((para, idx) => (
            <div key={idx} style={{ marginBottom: "0.5rem" }}>
              <textarea
                rows={4}
                cols={60}
                value={para}
                onChange={handleParagraphChange(idx)}
                placeholder={`Paragraph ${idx + 1}`}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addParagraph}>
            + Add another paragraph
          </button>
        </div>

        <div >
          <button type="submit">Publish Post</button>
        </div>
      </form>
    </div>
  );
}