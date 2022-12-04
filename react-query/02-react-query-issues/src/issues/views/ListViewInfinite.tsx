import { useState } from "react";
import LoadingIcon from "../../shared/components/LoadingIcon";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssues } from "../hooks/useIssues";
import { useIssuesInfinite } from "../hooks/useIssuesInfinite";
import { State } from "../interfaces/issue";

export const ListViewInfinite = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setState] = useState<State>();

  const onLabelChange = (labelName: string) => {
    // si incluye el name lo quito,si no lo agrego
    selectedLabels.includes(labelName)
      ? setSelectedLabels([...selectedLabels.filter((l) => l !== labelName)])
      : setSelectedLabels([...selectedLabels, labelName]);
  };

  const { issuesQuery } = useIssuesInfinite({ state, labels: selectedLabels });
  // useInfinite devuelve esto [ [1,2,3],[4,5,6],[7,8,9]] <- un 2D
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    console.log({
      actual: e.currentTarget,
    });
    const bottomReached =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
    if (bottomReached && issuesQuery.hasNextPage) {
      issuesQuery.fetchNextPage();
    }
  };
  return (
    <div className="row mt-5" onScroll={(e) => handleScroll(e)}>
      <div className="col-8">
        {issuesQuery.isLoading ? (
          <LoadingIcon />
        ) : (
          <IssueList
            issues={issuesQuery.data?.pages.flat() || []}
            state={state}
            onStateChanged={(newState) => setState(newState)}
          />
        )}
        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => issuesQuery.fetchNextPage()}
          disabled={!issuesQuery.hasNextPage}
        >
          Load more...
        </button>
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChange(labelName)}
        />
      </div>
    </div>
  );
};
