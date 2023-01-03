import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

interface CommentProps {
  comment: string;
  handleDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ comment, handleDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState<number>(0);

  function handleLikeComment() {
    setLikeCount((prev) => prev + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/DevPedroHB.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Henrique</strong>
              <time
                title="01 de Janeiro às 12:44"
                dateTime="2023-01-03 12:44:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={() => handleDeleteComment(comment)}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
