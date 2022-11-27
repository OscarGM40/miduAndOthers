import { useQueryClient } from "@tanstack/react-query";
import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getIssueComments, getIssueInfo } from "../hooks/useIssue";
import { Issue, State } from "../interfaces/issue";

interface IssueItemProps {
  issue: Issue;
}
export const IssueItem: React.FC<IssueItemProps> = ({ issue }) => {
  const navigate = useNavigate();
  // el hook que devuelve el queryClient no ocupa argumentos(ya va a coger el contexto adecuado)
  const queryClient = useQueryClient();

  // forma con prefetch(realiza llamadas http)
  const prefetchData = () => {
    // prefetchInfiniteQuery es para paginación,lo veremos
    // fijate que tengo acceso a la issue en este Cmp
    queryClient.prefetchQuery(["issue", issue.number], () => getIssueInfo(issue.number));
    queryClient.prefetchQuery(["issue", issue.number, "comments"], () =>
      getIssueComments(issue.number),
    );
  };

  // preset es con queryClient.setQueryData
  const presetData = () => {
    queryClient.setQueryData(["issue", issue.number], issue);
  };

  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${issue.number}`)}
      // onMouseEnter={prefetchData}
      onMouseEnter={presetData}
    >
      <div className="card-body d-flex align-items-center">
        {issue.state === State.Open ? (
          <FiInfo size={30} color="red" />
        ) : (
          <FiCheckCircle size={30} color="green" />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{issue.title}</span>
          <span className="issue-subinfo">
            #{issue.number} opened 2 days ago by <span className="fw-bold">{issue.user.login}</span>
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img src={issue.user.avatar_url} alt="User Avatar" className="avatar" />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
