import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NotFoundPage from "./NotFoundPage";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const ArticlePage = () => {
  const { name } = useParams();

  // State for article data and loading/error states
  const [article,   setArticle]   = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error,     setError]     = useState(false);

  useEffect(() => {
    const loadArticleInfo = async () => {
      try {
        const response = await axios.get(`${API_URL}/articles/${name}`);
        setArticle(response.data);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadArticleInfo();
  }, [name]);

  const addUpvote = async () => {
    try {
      const response = await axios.put(`${API_URL}/articles/${name}/upvotes`);
      setArticle(response.data);
    } catch (err) {
      console.error("Error upvoting article:", err);
    }
  };

  // Handle loading state
  if (isLoading) {
    return <p>Loading…</p>;
  }

  // Handle not found or error
  if (error || !article || !Array.isArray(article.content)) {
    return <NotFoundPage />;
  }

  return (
    <div className="pgbody">
      <h1>{article.title}</h1>
      <div id="upvotes-section">
        <button onClick={addUpvote}>Add Upvote</button>
        <p>This article has {article.upvotes} upvotes</p>
      </div>
      <div id="content-section">
        {article.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <h3>Comments</h3>
      {article.comments.map((comment, idx) => (
        <div key={idx} className="comment">
          <h4>{comment.author}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlePage;
