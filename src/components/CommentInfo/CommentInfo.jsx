import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <li className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${email}`}
        >
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">
        <em>{body}</em>
      </div>
    </li>
  );
};
