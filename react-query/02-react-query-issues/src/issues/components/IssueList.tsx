import { IssueItem } from "./IssueItem";
import { Issue, State } from "../interfaces/issue";

interface IssueListProps {
  issues: Issue[];
  state?: State; // recuerda que puede venir undefined(luego prop?)
  onStateChanged: (state?: State) => void; // tiene que ser igual que la prop
}
export const IssueList: React.FC<IssueListProps> = ({ issues, state, onStateChanged }) => {
  return (
    <div className="card border-white">
      <div className="card-header bg-dark">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item" onClick={() => onStateChanged()}>
            <a className={`nav-link ${!state ? "active" : ""}`}>All</a>
          </li>
          <li className="nav-item" onClick={() => onStateChanged(State.Open)}>
            <a className={`nav-link ${state === State.Open ? "active" : ""}`}>Open</a>
          </li>
          <li className="nav-item" onClick={() => onStateChanged(State.Closed)}>
            <a className={`nav-link ${state === State.Closed ? "active" : ""}`}>Closed</a>
          </li>
        </ul>
      </div>
      <div className="card-body text-dark">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};
